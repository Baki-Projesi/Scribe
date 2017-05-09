import React, { Component } from 'react';
import { convertToRaw } from 'draft-js';
import '../styles/OutputBox.css';

export default class OutputBox extends Component {

    constructor(props) {
        super(props);
        this.state = {
            contentBlocks: []
        }
    }

    //reduces obj1 by only keeping the values that match keys with obj2
    reduceObj(obj1, obj2) {

        Object.keys(obj1).forEach(function (key) {
            if (!obj2.getBlockForKey(key)) {
                delete obj1[key];
            }
        });

        return obj1;
    }

    //translate a single content block by building up a string of entity entries
    translate(contentState, currentBlockKey, outputLang, sourceLang) {
        const block = contentState.getBlockForKey(currentBlockKey);
        const charList = block.getCharacterList();
        let outputText = "";

        for (let i = 0; i < charList.count(); i++) {
            let charMeta = charList.get(i);
            let key = charMeta.getEntity();
            if (key && contentState.getEntity(key).type === "DISAMBIGUATION") {
                let outputStr = contentState.getEntity(key).data[outputLang];
                let sourceStr = contentState.getEntity(key).data[sourceLang];
                outputText += outputStr;
                if (sourceStr.length > 1) {
                    i += sourceStr.length - 1;
                }
            }
        }

        return outputText;
    }

    //TODO: incoming content block array is IN ORDER. The map we are using is not in order, causing bugs
    //  if (currentKey != newKey) -> sacrifice performance for ordering -> loop through array to find key
    //  else insert new block in similar index


    //incoming state = map / array
    // currentState = array
    // 1. go through incoming state
    

    manageContentBlocks(oldblockArray, newBlockArray, currentBlockKey) {
        reference_object = {};
        //convert into obj for lookup perf
        for (var i = 0; i < newBlockArray.length; i++) {
            reference_object[newBlockArray[i]] = i;
        }

        var array = ["bob", "dan", "steven", "corbin"];
        array.sort(function (a, b) {
            return reference_object[a] - reference_object[b];
        });

        console.log(array);
    }


    componentWillReceiveProps(nextProps) {
        const currentProps = this.props.transcribeState;
        const newProps = nextProps.transcribeState;
        let { contentBlocks } = this.state;
        if (newProps.contentState.getBlocksAsArray().length !== currentProps.contentState.getBlocksAsArray().length) {
            //different number of blocks between input/output, may be from mass deletion or copy/paste
            contentBlocks = this.reduceObj(contentBlocks, newProps.contentState);
        }
        if (newProps.editorState.getSelection().isCollapsed()) {

            if (this.state.contentBlocks[newProps.startKey] === undefined) {
                //new content block detected
                contentBlocks[newProps.startKey] = newProps.contentState.getBlockForKey(newProps.startKey).text;
            }

            contentBlocks[newProps.startKey] = this.translate(newProps.contentState, newProps.startKey, 'arabicText', 'turkishText');
        }

        this.setState({ contentBlocks: contentBlocks });
    }

    componentWillUnmount() {
        this.translate.cancel();
    }

    render() {
        const { contentBlocks } = this.state;
        const textBlocks = [];
        Object.keys(contentBlocks).forEach(function (blockKey) {
            const block = contentBlocks[blockKey];
            textBlocks.push(<p className="outputLine" key={blockKey}>{block}</p>);
        })

        return (
            <div>
                {textBlocks}
            </div>
        );
    }
}
