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
import decorateComponentWithProps from 'decorate-component-with-props';
import findWithRegex from '../utils/findWithRegex';
import getRelativeParentElement from '../utils/getRelativeParentElement';
import CommentPopup from './CommentPopup';
import Dropdown from './DropDown';


/*
    The input area contains a rich text editor that allows the typist to add comment entities to any part of the text
    Milestone TODOs:
    - Handle pasted text -> see https://github.com/facebook/draft-js/issues/416#issuecomment-221639163
    - Handle input choice dropdowns using live decorators 
    - Handle comments using current selection triggering an inline popup -> For inspiration --> https://www.draft-js-plugins.com/plugin/inline-toolbar
*/


const charRules = {
    "a": ["a", "A", "ǎ"]
}

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
            const oldSelectionState = editorState.getSelection();
            const startKey = oldSelectionState.getStartKey();
            const startOffset = oldSelectionState.getStartOffset();
            const endOffset = oldSelectionState.getEndOffset();
            const currentBlock = contentState.getBlockForKey(startKey);

            const current = {
                editorState: editorState,
                contentState: contentState,
                oldSelectionState: oldSelectionState,
                startKey: startKey,
                startOffset: startOffset,
                endOffset: endOffset,
                currentBlock: currentBlock
            }

            if (oldSelectionState.isCollapsed()) {
                // Selection is just the cursor, no characters highlighted
                this._promptForDisambiguation(current);
                newState.showCommentPopup = false;
            } else {
                // At least one character highlighted
                this._promptForComment(current);
                newState.showDropdown = false;
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

    //captures global key events, results of this function (a special command string) are passed to handleKeyCommand() before the window interprets them
    _keyBindingFn(e) {
        if (e.which === 83 /* `S` key */ && KeyBindingUtil.hasCommandModifier(e)) {
            console.log('ctrl/cmd-S pressed');
            return 'editor-save';
        }

        //TODO: move key handing to dropdown component?
        if (this.state.showDropdown) {
            if (e.which === 49 || e.which === 97) {
                return 'dropdown-1';
            }
            else if (e.which === 50 || e.which === 98) {
                return 'dropdown-2';
            }
            else if (e.which === 51 || e.which === 99) {
                return 'dropdown-3';
            }
            else if (e.which === 52 || e.which === 100) {
                return 'dropdown-4';
            }
            else if (e.which === 53 || e.which === 101) {
                return 'dropdown-5';
            }

        }
        return getDefaultKeyBinding(e);
    }

    //This is passed a value from _keyBindingFn, either a special string or the default
    handleKeyCommand(command) {
        if (command === 'editor-save') {
            /*
                API CALL TO SAVE DRAFT HERE
            */
            console.log('API save draft called');
            return 'handled';
        }
        if (command.startsWith('dropdown')) {
            console.log(command);

            if (this.state.disambiguationOptions) {
                let choice = Number(command.charAt(command.length - 1));
                this._confirmDisambiguation(choice - 1);
            }

            return 'handled';
        }

        return 'not-handled';
    }

    //TODO: move comment prompt into a floating tooltip
    _promptForComment(current) {
        const blockWithCommentAtBeginning = current.contentState.getBlockForKey(current.startKey);
        const commentKey = blockWithCommentAtBeginning.getEntityAt(current.startOffset);

        let commentText = '';
        if (commentKey) {
            commentText = current.contentState.getEntity(commentKey).getData().commentText;
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
            //uncomment below for automatic focus to the comment input 

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


    //TODO: move into dropdown positioned under cursor
    _promptForDisambiguation(current) {
        let showDropdown = false, disambiguationOptions;
        if (current.startOffset > 0) {
            const previousChar = current.currentBlock.getText().charAt(current.startOffset - 1);
            const previousEntity = current.currentBlock.getEntityAt(current.startOffset - 1);
            if (previousEntity === null || previousEntity.type !== 'DISAMBIGUATION') {
                //previous character isn't a disambiguated character entity
                if (charRules[previousChar] !== undefined) {
                    console.log('rule found ', charRules[previousChar]);

                    showDropdown = true;
                    disambiguationOptions = charRules[previousChar]
                }
            }
        }

        this.setState({
            showDropdown: showDropdown,
            disambiguationOptions: disambiguationOptions
        })
    }

    //this is called during handleKeyCommand when it detects a dropdown choice. 
    //NOTE: the entity doesn't currently take, try logging the state (via the console or on-screen button) to see for yourself
    _confirmDisambiguation(choiceIndex) {
        const displayChar = this.state.disambiguationOptions[choiceIndex];
        const { editorState, commentContent } = this.state;
        const contentState = editorState.getCurrentContent();
        const contentStateWithEntity = contentState.createEntity(
            'DISAMBIGUATION',
            'IMMUTABLE',
            {
                typedCharacter: 'a',
                charCode: 'a1',
                displayCharacter: displayChar
            }
        );

        const oldSelectionState = editorState.getSelection();
        const newSelectionState = oldSelectionState.merge({
            anchorOffset: (oldSelectionState.getAnchorOffset() - 1),
        })

        const entityKey = contentStateWithEntity.getLastCreatedEntityKey();
        Modifier.replaceText(contentStateWithEntity, newSelectionState, displayChar, null, entityKey);
        Modifier.applyEntity(
            contentStateWithEntity,
            newSelectionState,
            entityKey
        );
        const newEditorState = EditorState.set(editorState, { currentContent: contentStateWithEntity });

        //TESTING, ENTITY DOES NOT CURRENTLY SAVE
        const content = newEditorState.getCurrentContent();
        console.log(convertToRaw(content));


        this.setState({
            editorState: newEditorState,
            showDropdown: false,
            disambiguationOptions: undefined
        })
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

    //This will eventually decorate all potentially ambiguous characters that don't have disambigtuation entities
    findAmbiguousCharacters(contentBlock, callback, contentState) {
        //for testing, only use the letter 'a'

        //TODO: use decorator to find ambiguous letters that don't have metadata
        const REGEX = /[a]/g;
        findWithRegex(REGEX, contentBlock, callback);
    }


    render() {
        let commentInput, dropdown;

        //TODO: move to hovering tooltip near cursor
        if (this.state.showCommentInput) {
            commentInput = <CommentPopup
                onCommentChange={this.onCommentChange}
                value={this.state.commentContent}
                onCommentInputKeyDown={this.onCommentInputKeyDown}
                confirmComment={this.confirmComment}
            />
        }

        //TODO: move to dropdown below cursor
        if (this.state.showDropdown) {
            dropdown = <Dropdown
                options={this.state.disambiguationOptions}
            />
        }

        return (
            <div>
                <div>
                    <button onMouseDown={this.removeComment}>
                        Remove Comment
                </button>
                </div>
                {commentInput}
                {dropdown}
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


//These will eventually be put in their own files
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
        const commentText = this.props.contentState.getEntity(this.props.entityKey).getData().comment;
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
