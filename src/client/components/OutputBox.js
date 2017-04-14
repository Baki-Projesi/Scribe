import React, { Component } from 'react';
import '../styles/OutputBox.css';

export default class OutputBox extends Component {

    constructor(props) {
        super(props);
        this.state = {
            contentBlocks: {}
        }
    }

    //reduces obj1 by only keeping the values that match keys with obj2
    reduceObj(obj1, contentState) {

        Object.keys(obj1).forEach(function(key) {
            if (!contentState.getBlockForKey(key)) {
                delete obj1[key];
            }
        });

        return obj1;
    }

    //translate a single content block by building up a string of entity entries
    translate(contentState, currentBlockKey, language) {
        const block = contentState.getBlockForKey(currentBlockKey);
        const charList = block.getCharacterList();
        let outputText = "";

        charList.forEach(function (charMeta) {
            let key = charMeta.getEntity();
            if (key && contentState.getEntity(key).type === "DISAMBIGUATION") {
                outputText += contentState.getEntity(key).data[language];
            }
        });

        return outputText;
    }

    componentWillReceiveProps(nextProps) {
        const currentProps = this.props.transcribeState;
        const newProps = nextProps.transcribeState;
        let { contentBlocks } = this.state;
        if (newProps.contentState.getBlocksAsArray().length !== currentProps.contentState.getBlocksAsArray().length) {
            //different number of blocks, may be from mass deletion
            contentBlocks = this.reduceObj(contentBlocks, newProps.contentState);
        }
        if (newProps.editorState.getSelection().isCollapsed()) {

            if (this.state.contentBlocks[newProps.startKey] === undefined) {
                //new content block detected
                contentBlocks[newProps.startKey] = newProps.contentState.getBlockForKey(newProps.startKey).text;
            }

            contentBlocks[newProps.startKey] = this.translate(newProps.contentState, newProps.startKey, 'arabicText');
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
