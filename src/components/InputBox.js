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
    KeyBindingUtil
} from 'draft-js';
import '../styles/InputBox.css';
import '../styles/CommentPopup.css';
import decorateComponentWithProps from 'decorate-component-with-props';
import findWithRegex from '../utils/findWithRegex';
import getRelativeParentElement from '../utils/getRelativeParentElement';


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

        const commentProps = {
            callback: function (commentText) {
                console.log("comment called back with text: " + commentText);
            }
        },
            disambiguatedCharProps = {
                callback: function () {
                    console.log("disambiguated character called back");
                }
            },
            ambiguousCharProps = {
                callback: function () {
                    console.log("ambiguous character called back");
                }
            }


        const decorator = new CompositeDecorator([
            {
                strategy: this.findCommentEntities,
                component: decorateComponentWithProps(Comment, commentProps)
            },
            {
                strategy: this.findDisambiguatedCharacterEntities,
                component: DisambiguatedCharacter
            },
            {
                strategy: this.findAmbiguousCharacters,
                component: decorateComponentWithProps(AmbiguousCharacter, ambiguousCharProps)
            }
        ]);

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
        this.onChange = (editorState) => {


            /*TODO:
                if cursor is within a disambiguated character entity, display ambiguous dropdown for re-selection (with current selection highlighted)
                else if cursor is within an ambiguous character/word, display ambiguous dropdown (with default selection highlighted)
                else if if current selection is within a comment entity, display empty comment popup 
                else if current selection is within a comment entity,  display comment popup with the comment text inside
            */

            const newState = { editorState: editorState };
            const contentState = editorState.getCurrentContent();
            const currentSelection = editorState.getSelection();
            const startKey = currentSelection.getStartKey();
            const startOffset = currentSelection.getStartOffset();
            const endOffset = currentSelection.getEndOffset();
            const currentBlock = contentState.getBlockForKey(startKey);
            //const entityKey = currentBlock.getEntityAt(startOffset);

            if (currentSelection.isCollapsed()) {
                // Selection is just the cursor, no characters highlighted
                if (startOffset > 0) {
                    const entity = currentBlock.getEntityAt(startOffset - 1);
                    if (entity) {
                        console.log('entity found: ', entity);
                    }
                }
            } else {
                // At least one character highlighted
                this._promptForComment();
            }

            this.setState(newState);
        }

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
    _promptForComment() {
        const { editorState } = this.state;

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

        let commentPopupHeight = 44, position, relativeParent;
        // const relativeParent = getRelativeParentElement(this.toolbar.parentElement);
        const relativeRect = relativeParent ? relativeParent.getBoundingClientRect() : document.body.getBoundingClientRect();
        const selectionRect = getVisibleSelectionRect(window);
        position = {
            top: (selectionRect.top - relativeRect.top) - commentPopupHeight,
            left: (selectionRect.left - relativeRect.left) + (selectionRect.width / 2),
            //transform: 'translate(-50%) scale(1)',
            transition: 'transform 0.15s cubic-bezier(.3,1.2,.2,1)',
        };

        console.log(position);

        this.setState({
            showCommentInput: true,
            commentPopupPosition: position,
            commentContent: commentText,
        }, () => {
            //setTimeout(() => this.refs.comment.focus(), 0);
        });

    }

    _confirmComment(e) {
        e.preventDefault();
        const { editorState, commentContent } = this.state;
        const contentState = editorState.getCurrentContent();
        const contentStateWithEntity = contentState.createEntity(
            'COMMENT',
            'IMMUTABLE',
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
        const { editorState } = this.state;
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

    //Searches though a block of content and finds DISAMBIGUATED entities
    findDisambiguatedCharacterEntities(contentBlock, callback, contentState) {
        contentBlock.findEntityRanges(
            (character) => {
                const entityKey = character.getEntity();
                return (
                    entityKey !== null &&
                    contentState.getEntity(entityKey).getType === 'DISAMBIGUATED'
                );
            },
            callback
        );
    }

    findAmbiguousCharacters(contentBlock, callback, contentState) {
        //for testing, only use the letter 'a'
        const REGEX = /[a]/g;
        findWithRegex(REGEX, contentBlock, callback);
    }


    render() {
        let commentInput;

        //TODO: move to hovering tooltip near cursor
        if (this.state.showCommentInput) {
            commentInput =
                <div style={this.state.commentPopupPosition}>
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
                <div>
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
        const { commentText } = this.props.contentState.getEntity(this.props.entityKey).getData();
        return (
            //TODO: show comment popup text on click
            <span title={commentText} style={styles.comment} onClick={this.props.callback(commentText)}>
                {this.props.children}
            </span>
        );
    }

}

class DisambiguatedCharacter extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const styles = {
            disambiguatedcharacter: {
                color: 'red'
            }
        }
        return (
            <span style={styles.disambiguatedcharacter}>
                {this.props.children}
            </span>
        )
    }
}

class AmbiguousCharacter extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        const styles = {
            char: {
                color: 'green'
            }
        }

        return (
            <span style={styles.char} onClick={this.props.callback}>
                {this.props.children}
            </span>
        )
    }
}
