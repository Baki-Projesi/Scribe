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
import { adjustSelectionOffset } from '../utils/selectionStateHelpers';
import { englishKeyboardDisambiguations, turkishKeyboardDisambiguations } from '../../assets/disambiguationRules';
import CommentPopup from './CommentPopup';
import Dropdown from './DropDown';
import AmbiguousCharacter from './AmbiguousCharacter';
import DisambiguatedCharacter from './DisambiguatedCharacter';

/*
    The input area contains a rich text editor that allows the typist to add comment entities to any part of the text
    Milestone TODOs:
    - Handle pasted text -> see https://github.com/facebook/draft-js/issues/416#issuecomment-221639163
    - Handle input choice dropdowns using live decorators
    - Handle comments using current selection triggering an inline popup -> For inspiration --> https://www.draft-js-plugins.com/plugin/inline-toolbar
*/

const store = {
    mostRecentAmbiguousCharCoords: null
}

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
    ambiguousCharacterProps = {
        updateCoordinates: function (offsetKey, coordinates) {
            store.mostRecentAmbiguousCharCoords = coordinates;
        }
    }

export default class InputBox extends Component {

    constructor(props, context) {
        super(props, context);

        const decorator = new CompositeDecorator([
            {
                strategy: this.findCommentEntities,
                component: decorateComponentWithProps(Comment, commentProps)
            },

            {
                strategy: this.findDisambiguatedCharacterEntities,
                component: decorateComponentWithProps(DisambiguatedCharacter, disambiguatedCharProps)
            },
            {
                strategy: this.findAmbiguousCharacters,
                component: decorateComponentWithProps(AmbiguousCharacter, ambiguousCharacterProps)
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

            let newState, current = {
                editorState: editorState,
                contentState: editorState.getCurrentContent(),
                oldSelectionState: editorState.getSelection(),
                startKey: editorState.getSelection().getStartKey(),
                startOffset: editorState.getSelection().getStartOffset(),
                endOffset: editorState.getSelection().getEndOffset(),
                currentBlock: editorState.getCurrentContent().getBlockForKey(editorState.getSelection().getStartKey())
            }

            if (current.oldSelectionState.isCollapsed()) {
                // Selection is just the cursor w/ no characters highlighted
                newState = this._promptForDisambiguation(current);
            } else {
                // At least one character highlighted
                newState = this._promptForComment(current);
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

        if (this.state.showDropdown && e.which !== 8 && e.which !== 46) { // backspace, delete
            let str = 'dropdown-';
            const keyCodeBase = 48;
            const numOptions = this.state.disambiguationOptions.length;
            const optionMap = {};
            for (let i = 1; i < numOptions + 1; i++) {
                optionMap[keyCodeBase + i] = (str + i); //numkeys 1-9
                optionMap[(keyCodeBase * 2) + i] = (str + i); // numpad 1-9
            }

            if ((e.which >= 49 && e.which <= 57) || (e.which >= 97 && e.which <= 105) && optionMap[e.which]) {
                return optionMap[e.which];
            } else {
                //If anything besides Backspace or a number is chosen,
                // use default disambiguation choice and have the editor handle the normal keypress
                this._confirmDisambiguation(0);
            }
        }

        return getDefaultKeyBinding(e);
    }

    //This is passed a value from _keyBindingFn, either a special string or the default
    handleKeyCommand(command) {
        if (command === 'editor-save') {
            /*
                API CALL TO SAVE HERE
            */
            console.log('API save draft called');
            return 'handled';
        }

        if (command.startsWith('dropdown') && this.state.disambiguationOptions) {
            let choice = Number(command.charAt(command.length - 1));
            this._confirmDisambiguation(choice - 1);

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
            //top: (selectionRect.top - relativeRect.top) - commentPopupHeight,
            //left: (selectionRect.left - relativeRect.left) + (selectionRect.width / 2),
            //transform: 'translate(-50%) scale(1)',
            //transition: 'transform 0.15s cubic-bezier(.3,1.2,.2,1)',
        };

        Object.assign(current, {
            showCommentInput: true,
            commentPopupPosition: position,
            commentContent: commentText,
            showDropdown: false
        });

        return current;

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
        const charRules = this.props.charRules;
        let showDropdown = false, disambiguationOptions;
        if (current.startOffset > 0) {
            const previousChar = current.currentBlock.getText().charAt(current.startOffset - 1);

            //TODO: find a better way to check if the previous character has disambiguation metadata
            const previousEntity = current.currentBlock.getEntityAt(current.startOffset - 1);
            if (previousEntity === null) {
                //previous character isn't a disambiguated character entity
                if (charRules[previousChar] !== undefined) {
                    showDropdown = true;
                    disambiguationOptions = charRules[previousChar]
                }
            }
        }

        Object.assign(current, {
            showDropdown: showDropdown,
            disambiguationOptions: disambiguationOptions,
            showCommentInput: false
        });

        return current;
    }

    //this is called during handleKeyCommand when it detects a dropdown choice.
    _confirmDisambiguation(choiceIndex) {
        const displayText = this.state.disambiguationOptions[choiceIndex].turkishText;
        const editorState = this.state.editorState;
        const contentState = editorState.getCurrentContent();
        let contentStateWithEntity = contentState.createEntity(
            'DISAMBIGUATION',
            'IMMUTABLE',
            this.state.disambiguationOptions[choiceIndex]
        );
        const entityKey = contentStateWithEntity.getLastCreatedEntityKey();
        let newSelectionState = adjustSelectionOffset(editorState.getSelection(), -1, 0);

        //Replace the typed text with the displayText
        contentStateWithEntity = Modifier.replaceText(contentStateWithEntity, newSelectionState, displayText, null, entityKey);

        let newEditorState = EditorState.set(editorState, { currentContent: contentStateWithEntity });
        /* //NOTE: toggleLink is a horribly named function that actually means to apply the entity
         *   (AKA establish a link between the content and the entity map)
         *   See: https://github.com/facebook/draft-js/issues/182
        */
        newEditorState = RichUtils.toggleLink(
            newEditorState,
            newSelectionState,
            entityKey
        );

        newSelectionState = adjustSelectionOffset(newSelectionState, 1, 0);
        newEditorState = EditorState.set(newEditorState, { selection: newSelectionState });

        this.setState({
            editorState: newEditorState,
            showDropdown: false,
            disambiguationOptions: null
        });
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
                    contentState.getEntity(entityKey).getType() === 'DISAMBIGUATION'
                );
            },
            callback
        );
    }

    //Decorates ambiguous characters based on current ruleset
    findAmbiguousCharacters(contentBlock, callback, contentState) {
        //TODO: use this.props.charRules ('this' needs to be bound though)
        const regex = new RegExp(Object.keys(englishKeyboardDisambiguations).join("|"), 'g');
        findWithRegex(regex, contentBlock, callback);
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

        if (this.state.showDropdown) {
            dropdown = <Dropdown
                coordinates={store.mostRecentAmbiguousCharCoords}
                options={this.state.disambiguationOptions}
            />
        }

        return (
            <div>
                <div>
                    {/*<button onMouseDown={this.removeComment}>
                        Remove Comment
                </button>*/}
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
