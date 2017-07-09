import React, { Component } from 'react';
import { List, Record } from 'immutable';
import { convertToRaw, ContentBlock } from 'draft-js';
import '../styles/OutputBox.css';

export default class OutputBox extends Component {

    constructor(props) {
        super(props);
        this.state = {
            cursorBlockIndex: 0,
            contentBlocks: [] //example item -> {key: 'abc', block: 'test text'}
        }
    }

    //returns the index of the block with given key as if
    // the map was an array of blocks (maps do have inherent ordering)
    findIndexOfBlock(blockKey, contentBlockArray) {
        let index = -1, result = null;
        if (contentBlockArray) {
            contentBlockArray.forEach(function (block) { //TODO: fix performance (break after found)
                let key = block.hasOwnProperty("_map") ? block.getKey() : block.key;
                index++;
                if (key === blockKey) {
                    result = index;
                }
            });
        }

        return result !== null ? result : -1;
    }

    //translate a single content block by building up a string of entity entries
    translate(contentBlocks, translationIndexes, contentState) {
        translationIndexes.forEach(function (index) {

            if (contentBlocks[index]) {
                //TODO: fix undefined indexes, shouldn't need this 'if' block
                const charList = contentState.getBlockForKey(contentBlocks[index].key).getCharacterList();
                let result = contentBlocks[index], outputText = "", sourceText = "";

                //build up the translated string
                for (let i = 0; i < charList.count(); i++) {
                    let charMeta = charList.get(i);
                    let key = charMeta.getEntity();
                    if (key && contentState.getEntity(key).type === "DISAMBIGUATION") {
                        let outputStr = contentState.getEntity(key).data["arabicText"];
                        let sourceStr = contentState.getEntity(key).data["turkishText"];
                        outputText += outputStr;
                        if (sourceStr.length > 1) {
                            i += sourceStr.length - 1;
                        }
                    }
                }

                result.outputText = outputText;
                //replace content block with newly translated block at index
                contentBlocks[index] = result;
            }

        });

        return contentBlocks;
    }

    //Insert a new content block in the array by shifting everything down one
    insertNewContentBlock(contentBlockArray, key, newCursorIndex) {
        if (newCursorIndex > contentBlockArray.length) {
            newCursorIndex = contentBlockArray.length;
        }

        let block = {
            key: key,
            outputText: ''
        }

        contentBlockArray.splice(newCursorIndex, 0, block);
        return contentBlockArray;
    }


    //is called on every editor onChange()
    componentWillReceiveProps(nextProps) {
        const currentProps = this.props.transcribeState;
        const newProps = nextProps.transcribeState;
        if (newProps.didFileLoad) {
            return this.doFullTranslate(newProps.editorState.getCurrentContent());
        }

        let { contentBlocks, cursorBlockIndex } = this.state;
        let translationIndexes = [],
            newStartKey = newProps.editorState.getSelection().getAnchorKey(),
            oldStartKey = this.state.oldStartKey ? this.state.oldStartKey : currentProps.startKey,
            newCursorBlockIndex = cursorBlockIndex,
            newContentBlocks = contentBlocks,
            newBlockLength = newProps.contentState.getBlocksAsArray().length;

        let idx = this.findIndexOfBlock(newStartKey, contentBlocks);
        if (newStartKey !== oldStartKey) {
            if (idx === -1) {
                //they added a new block
                translationIndexes.push(cursorBlockIndex);
                newCursorBlockIndex = cursorBlockIndex + 1;
                newContentBlocks = this.insertNewContentBlock(newContentBlocks, newStartKey, newCursorBlockIndex);
            } else {
                newCursorBlockIndex = idx;
            }
        }
        else if (idx === -1) {
            newContentBlocks = this.insertNewContentBlock(newContentBlocks, newStartKey, newCursorBlockIndex);
        }

        //we're always going to look at least the current line
        translationIndexes.push(newCursorBlockIndex);

        if (contentBlocks.length > newBlockLength) {
            //user deleted some amount of blocks, remove them from array
            newContentBlocks.splice(newCursorBlockIndex + 1, this.findIndexOfBlock(currentProps.endKey, contentBlocks) - newCursorBlockIndex);
        }

        newContentBlocks = this.translate(newContentBlocks, translationIndexes, newProps.editorState.getCurrentContent());

        this.setState({
            cursorBlockIndex: newCursorBlockIndex,
            contentBlocks: newContentBlocks,
            oldStartKey: newStartKey
        });
    }

    doFullTranslate(contentState) {
        let newContentBlocks = [];
        let translationIndexes = [];
        let incomingBlocks = contentState.getBlocksAsArray();
        for (let i = 0; i < incomingBlocks.length; i++) {
            translationIndexes.push(i);
            newContentBlocks[i] = {
                key: incomingBlocks[i].getKey(),
                outputText: ":)"
            }
        }
        
        newContentBlocks = this.translate(newContentBlocks, translationIndexes, contentState);
        this.setState({
            contentBlocks: newContentBlocks
        })
    }

    render() {
        const { contentBlocks } = this.state;
        const textBlocks = [];
        const keys = {};
        contentBlocks.forEach(function (contentBlock) {
            if (!keys[contentBlock.key]) {
                let spaceText;
                if (contentBlock.outputText === '')
                    spaceText = <br />;
                if (spaceText)
                    textBlocks.push(spaceText);
                else
                    textBlocks.push(<p className="outputLine" key={contentBlock.key}>{contentBlock.outputText}</p>);

                keys[contentBlock.key] = true;
            }
        })

        return (
            <div className={"outputbox-display"}>
                <div className="outputbox-display_container">
                    {textBlocks}
                </div>
                <p className="output-editor_label">Ottoman Arabic Script Output</p>
            </div>
        );
    }
}
