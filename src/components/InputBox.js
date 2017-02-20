import React, { Component } from 'react';
import {
    Editor,
    EditorState,
    RichUtils,
    CompositeDecorator,
    convertToRaw,
    contentState,
    getDefaultKeyBinding,
    hasCommandModifier,
    KeyBindingUtil
} from 'draft-js';
import '../styles/InputBox.css';


/*
    The input area contains a rich text editor that allows the typist to add comment entities to any part of the text
    Milestone TODOs:
    - Handle pasted text -> see https://github.com/facebook/draft-js/issues/416#issuecomment-221639163
    - Handle input choice dropdowns using live decorators 
    - Handle comments using current selection triggering an inline popup -> For inspiration --> https://www.draft-js-plugins.com/plugin/inline-toolbar
*/

export default class InputBox extends Component {

    constructor(props) {
        super(props);

        const decorator = new CompositeDecorator([
            {
                strategy: this.findCommentEntities,
                component: Comment,
            },
        ])

        this.state = {
            editorState: EditorState.createEmpty(decorator),
            showCommentInput: false,
            commentContent: '',
        };

        this.logState = () => {
            const content = this.state.editorState.getCurrentContent();
            console.log(convertToRaw(content));
        };

        this.focus = () => this.refs.editor.focus();
        this.onChange = (editorState) => this.setState({ editorState });
        this.onCommentChange = (e) => this.setState({ commentContent: e.target.value });

        this.promptForComment = this._promptForComment.bind(this);
        this.confirmComment = this._confirmComment.bind(this);
        this.onCommentInputKeyDown = this._onCommentInputKeyDown.bind(this);
        this.removeComment = this._removeComment.bind(this);
        this.keyBindingFn = this._keyBindingFn.bind(this);
    }

    _keyBindingFn(e) {
        if (e.keyCode === 83 /* `S` key */ && KeyBindingUtil.hasCommandModifier(e)) {
            console.log('ctrl/cmd-S pressed');
            return 'editor-save';
        }
        return getDefaultKeyBinding(e);
    }

    handleKeyCommand(command) {
        if (command === 'editor-save') {
            /*
                API CALL TO SAVE DRAFT HERE
            */
            console.log('API save draft called');
            return 'handled';
        }

        return 'not-handled';
    }

    //TODO: move comment prompt into a floating tooltip
    _promptForComment(e) {
        e.preventDefault();
        const {editorState} = this.state;
        const selection = editorState.getSelection();
        if (!selection.isCollapsed()) {
            const contentState = editorState.getCurrentContent();
            const startKey = editorState.getSelection().getStartKey();
            const startOffset = editorState.getSelection().getStartOffset();
            const blockWithCommentAtBeginning = contentState.getBlockForKey(startKey);
            const commentKey = blockWithCommentAtBeginning.getEntityAt(startOffset);

            let commentText = '';
            if (commentKey) {
                const commentInstance = contentState.getEntity(commentKey);
                commentText = commentInstance.getData().commentText;
            }

            this.setState({
                showCommentInput: true,
                commentContent: commentText,
            }, () => {
                setTimeout(() => this.refs.comment.focus(), 0);
            });
        }
    }

    _confirmComment(e) {
        e.preventDefault();
        const {editorState, commentContent} = this.state;
        const contentState = editorState.getCurrentContent();
        const contentStateWithEntity = contentState.createEntity(
            'COMMENT',
            'MUTABLE',
            { comment: commentContent }
        );
        const entityKey = contentStateWithEntity.getLastCreatedEntityKey();
        const newEditorState = EditorState.set(editorState, { currentContent: contentStateWithEntity });

        this.setState({
            editorState: RichUtils.toggleLink(
                newEditorState,
                newEditorState.getSelection(),
                entityKey
            ),
            showCommentInput: false,
            commentContent: '',
        }, () => {
            setTimeout(() => this.refs.editor.focus(), 0);
        });
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
        const {editorState} = this.state;
        const selection = editorState.getSelection();

        if (!selection.isCollapsed()) {
            this.setState({
                editorState: RichUtils.toggleLink(editorState, selection, null),
            });
        }
    }

    //Searches through a block of content (newLine separated) and finds embedded COMMENT entities 
    findCommentEntities(contentBlock, callback, contentState) {
        contentBlock.findEntityRanges(
            (character) => {
                const entityKey = character.getEntity();
                return (
                    entityKey !== null &&
                    contentState.getEntity(entityKey).getType() === 'COMMENT'
                );
            },
            callback
        );
    }


    render() {
        let commentInput;

        //TODO: move to hovering tooltip near cursor
        if (this.state.showCommentInput) {
            commentInput =
                <div>
                    <input
                        onChange={this.onCommentChange}
                        ref="comment"
                        type="text"
                        value={this.state.commentContent}
                        onKeyDown={this.onCommentInputKeyDown}
                    />
                    <button onMouseDown={this.confirmComment}>
                        Confirm
                </button>
                </div>;
        }

        return (
            <div>
                <div style={{ marginBottom: 10 }}>
                    Select some text, then use the buttons to add or remove comments
                on the selected text.
              </div>
                <div>
                    <button
                        onMouseDown={this.promptForComment}
                        style={{ marginRight: 10 }}>
                        Add Comment
                </button>
                    <button onMouseDown={this.removeComment}>
                        Remove Comment
                </button>
                </div>
                {commentInput}
                <div className={'editor'} onClick={this.focus}>
                    <Editor
                        editorState={this.state.editorState}
                        onChange={this.onChange}
                        handleKeyCommand={this.handleKeyCommand.bind(this)}
                        keyBindingFn={this.keyBindingFn}
                        placeholder="Enter some text..."
                        ref="editor"
                    />
                </div>
                <input
                    onClick={this.logState}
                    className={'buttons'}
                    type="button"
                    value="Log State to Console"
                />
            </div>
        );
    }
}


class Comment extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const styles = {
            comment: {
                color: '#3b5998',
                textDecoration: 'underline'
            }
        }
        const {commentText} = this.props.contentState.getEntity(this.props.entityKey).getData();
        return (
            //TODO: show comment popup text on click
            <span title={commentText} style={styles.comment}>
                {this.props.children}
            </span>
        );
    }

}