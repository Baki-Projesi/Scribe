import React, { Component } from 'react';
import {
    Editor,
    RichUtils,
} from 'draft-js';
import '../styles/InputBox.css';
import '../styles/CommentPopup.css';
import CommentPopup from './CommentPopup';
import Dropdown from './DropDown';
import { EditorGutter } from './Draft-js-gutter';
import FileSaver from 'file-saver';


/*
    The input area contains a rich text editor that allows the typist to add comment entities to any part of the text
    Milestone TODOs:
    - Handle pasted text -> see https://github.com/facebook/draft-js/issues/416#issuecomment-221639163
    - Handle input choice dropdowns using live decorators
    - Handle comments using current selection triggering an inline popup -> For inspiration --> https://www.draft-js-plugins.com/plugin/inline-toolbar
*/

export default class InputBox extends Component {
    constructor(props, context) {
        super(props, context);
        const { editorState,
            handleKeyCommand,
            onChange,
            onInputTextChange,
            keyBindingFn,
            showDropdown,
            disambiguationOptions,
            showCommentInput,
            store } = this.props;
        this.focus = () => this.refs.editor.focus();
    }



    //Pressing enter saves the comment
    _onCommentInputKeyDown(e) {
        if (e.which === 13) {
            this._confirmComment(e);
        }
    }

    //Removes comment from selection
    _removeComment(e) {
        e.preventDefault();
        const { editorState } = this.state;
        const selection = editorState.getSelection();

        if (!selection.isCollapsed()) {
            this.setState({
                editorState: RichUtils.toggleLink(editorState, selection, null),
            });
        }
    }

    doTextExport() {
        let fileName = prompt("Please enter the name of this file.");
        let plainTextBlocks = [];
        this.props.editorState.getCurrentContent().getBlocksAsArray().forEach((contentBlock) => 
            plainTextBlocks.push(contentBlock.getText() + "\r\n")
        )

        if (fileName) {
            fileName = fileName.replace(/[|&;$%@"<>()+,.]/g, "");
            fileName += ".txt";
            let file = new File(plainTextBlocks,
                fileName,
                { type: "text/plain;charset=utf-8" });

            FileSaver.saveAs(file);
        }
    }

    render() {
        let commentInput;
        if (this.props.showCommentInput) {
            commentInput =
            <div>
                <CommentPopup 
                    onCommentChange={this.props.onCommentChange} 
                    onKeyDown={this.props.onCommentInputKeyDown}
                    value={this.props.commentVal}
                    confirmComment={this.props.confirmComment}
                    removeComment={this.props.removeComment}
                />
                
            </div>;
        }
        if (this.props.showDropdown) {
            var dropdown = <Dropdown
                coordinates={this.props.store.mostRecentAmbiguousCharCoords}
                options={this.props.disambiguationOptions}
            />
        }
        return (
            <div className={'inputBox-editor'}>
                {commentInput}
                {dropdown}
                <div className={'editor'} onClick={this.focus}>
                    <EditorGutter
                        editorState={this.props.editorState}
                        onChange={this.props.onChange}
                        handleKeyCommand={this.props.handleKeyCommand}
                        keyBindingFn={this.props.keyBindingFn}
                        ref="editor"
                        styleListItem={{color:'#a6a6a6'}}
                    />
                    <p className="inputBox-editor_label">
                        <strong>Transcription Input &nbsp; &nbsp;</strong>
                        <a href="javascript:void(0)" onClick={this.doTextExport.bind(this)}>Export as .txt</a>
                    </p>
                </div>
            </div>
        )
    }

}
