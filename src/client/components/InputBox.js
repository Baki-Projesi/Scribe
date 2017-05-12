import React, { Component } from 'react';
import {
    Editor,
    EditorState,
    RichUtils,
    CompositeDecorator,
    convertToRaw,
    contentState,
    getDefaultKeyBinding,
    getVisibleSelectionRect,
    hasCommandModifier,
    KeyBindingUtil,
    SelectionState,
    Modifier
} from 'draft-js';
import '../styles/InputBox.css';
import '../styles/CommentPopup.css';
import DisplayComment from './DisplayComment.js'
import getRelativeParentElement from '../utils/getRelativeParentElement';
import { adjustSelectionOffset } from '../utils/selectionStateHelpers';
import { englishKeyboardDisambiguations, turkishKeyboardDisambiguations } from '../../assets/disambiguationRules';
import CommentPopup from './CommentPopup';
import Dropdown from './DropDown';
import AmbiguousCharacter from './AmbiguousCharacter';
import DisambiguatedCharacter from './DisambiguatedCharacter';
import Comment from './Comment';


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
                    <Editor
                        editorState={this.props.editorState}
                        onChange={this.props.onChange}
                        handleKeyCommand={this.props.handleKeyCommand}
                        keyBindingFn={this.props.keyBindingFn}
                        ref="editor"
                    />
                </div>
            </div>
        )
    }

}
