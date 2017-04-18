import React, { Component } from 'react';
import LanguageTabBar from "./LanguageTabBar";
import OutputBox from './OutputBox';
import InputBox from './InputBox';
import '../styles/Transcribe.css';
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
import findWithRegex from '../utils/findWithRegex';
import { adjustSelectionOffset } from '../utils/selectionStateHelpers';
import decorateComponentWithProps from 'decorate-component-with-props';
import AmbiguousCharacter from './AmbiguousCharacter';
import DisambiguatedCharacter from './DisambiguatedCharacter';
import { englishKeyboardDisambiguations, turkishKeyboardDisambiguations } from '../../assets/disambiguationRules';

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

export default class Transcribe extends Component {

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
                strategy: this.findAmbiguousEnglishCharacters,
                component: decorateComponentWithProps(AmbiguousCharacter, ambiguousCharacterProps)
            }
        ]);
        const initEditorState = EditorState.createEmpty(decorator);
        this.state = {
            editorState: initEditorState,
            contentState: initEditorState.getCurrentContent(),
            oldSelectionState: initEditorState.getSelection(),
            startKey: initEditorState.getSelection().getStartKey(),
            startOffset: initEditorState.getSelection().getStartOffset(),
            endKey: initEditorState.getSelection().getEndKey(),
            endOffset: initEditorState.getSelection().getEndOffset(),
            currentBlock: initEditorState.getCurrentContent().getBlockForKey(initEditorState.getSelection().getStartKey()),
            showCommentInput: false,
            commentContent: '',
            usingTurkishKeyboard: false
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
                endKey: editorState.getSelection().getEndKey(),
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

        //  this.onCommentChange = (e) => this.setState({ commentContent: e.target.value });

        this.promptForComment = this._promptForComment.bind(this);
        this.confirmComment = this._confirmComment.bind(this);
        this.onCommentInputKeyDown = this._onCommentInputKeyDown.bind(this);
        this.removeComment = this._removeComment.bind(this);
        this.keyBindingFn = this._keyBindingFn.bind(this);
        this.toggleCheckboxValue = this._toggleCheckboxValue.bind(this);
        this.handleKeyCommand = this._handleKeyCommand.bind(this)
    }

    //captures global key events, results of this function (a special command string) are passed to KeyCommand() before the window interprets them
    _keyBindingFn(e) {
        if (e.which === 83 /* `S` key */ && KeyBindingUtil.hasCommandModifier(e)) {
            console.log('ctrl/cmd-S pressed');
            return 'editor-save';
        }

        if (e.which === 13) {
            return 'editor-newline';
        }

        if (e.which !== 8 && e.which !== 46) {
            if (this.state.showDropdown) { // backspace, delete
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
                    // use default disambiguation choice and have the editor  the normal keypress
                    let newState = Object.assign(this.state, this._confirmDisambiguation(0, this.state.editorState));
                    this.setState(newState);
                }
            } else if (this.state.disambiguationOptions && this.state.disambiguationOptions[0].code === 'sp') {
                //we don't show dropdown for spaces, but they need an entity anyways
                let newState = Object.assign(this.state, this._confirmDisambiguation(0, this.state.editorState));
                this.setState(newState);
            }
        }
        
        return getDefaultKeyBinding(e);
    }

    //This is passed a value from _keyBindingFn, either a special string or the default
    _handleKeyCommand(command) {
        if (command === 'editor-space') {

        }
        if (command === 'editor-newline') {
            let newState = this.state;
            if (this.state.showDropdown) {
                newState = Object.assign(this.state, this._confirmDisambiguation(0, this.state.editorState));
            }
            newState.editorState = this.keyCommandInsertNewline(this.state.editorState);
            this.setState(newState);

            return 'handled';
        }
        if (command === 'editor-save') {
            /*
                API CALL TO SAVE HERE
            */
            console.log('API save draft called');

            return 'handled';
        }
        if (command.startsWith('dropdown') && this.state.disambiguationOptions) {
            let choice = Number(command.charAt(command.length - 1));
            let newState = this.state.editorState;
            newState = this._confirmDisambiguation(choice - 1, this.state.editorState);

            this.setState(newState);
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
            //showDropdown: false
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
        let charRules = this.state.usingTurkishKeyboard ? turkishKeyboardDisambiguations : englishKeyboardDisambiguations;
        let showDropdown = false, disambiguationOptions;
        if (current.startOffset > 0) {
            const previousChar = current.currentBlock.getText().charAt(current.startOffset - 1);

            //TODO: find a better way to check if the previous character has disambiguation metadata
            const previousEntity = current.currentBlock.getEntityAt(current.startOffset - 1);
            if (previousEntity === null) {
                //previous character isn't a disambiguated character entity
                if (charRules[previousChar] !== undefined) {
                    showDropdown = previousChar !== ' ';
                    disambiguationOptions = charRules[previousChar]
                }
            }
        }

        Object.assign(current, {
            showDropdown: showDropdown,
            disambiguationOptions: disambiguationOptions,
            //showCommentInput: false
        });

        return current;
    }

    //this is called during handleKeyCommand when it detects a dropdown choice.
    _confirmDisambiguation(choiceIndex, editorState) {
        const displayText = this.state.disambiguationOptions[choiceIndex].turkishText;
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

        return {
            editorState: newEditorState,
            showDropdown: false,
            disambiguationOptions: null
        }
    }

    keyCommandInsertNewline(editorState) {
        var contentState = Modifier.splitBlock(
            editorState.getCurrentContent(),
            editorState.getSelection(),
        );
        return EditorState.push(editorState, contentState, 'split-block');
    }

    _toggleCheckboxValue() {
        let usingTurkishKeyboard = !this.state.usingTurkishKeyboard;
        let editorState = this.state.editorState;
        if (usingTurkishKeyboard) {
            editorState = this.enableTurkishKeyboardDecorations(editorState);
        } else {
            editorState = this.enableEnglishKeyboardDecorations(editorState);
        }
        this.setState({
            usingTurkishKeyboard: usingTurkishKeyboard,
            editorState: editorState
        });
    }

    enableEnglishKeyboardDecorations(editorState, rules) {
        const decor = new CompositeDecorator([{
            strategy: this.findCommentEntities,
            component: decorateComponentWithProps(Comment, commentProps)
        },
        {
            strategy: this.findDisambiguatedCharacterEntities,
            component: decorateComponentWithProps(DisambiguatedCharacter, disambiguatedCharProps)
        },
        {
            strategy: this.findAmbiguousEnglishCharacters,
            component: decorateComponentWithProps(AmbiguousCharacter, ambiguousCharacterProps)
        }]);
        return EditorState.set(editorState, { decorator: decor });
    }

    enableTurkishKeyboardDecorations(editorState, rules) {
        const decor = new CompositeDecorator([{
            strategy: this.findCommentEntities,
            component: decorateComponentWithProps(Comment, commentProps)
        },
        {
            strategy: this.findDisambiguatedCharacterEntities,
            component: decorateComponentWithProps(DisambiguatedCharacter, disambiguatedCharProps)
        },
        {
            strategy: this.findAmbiguousTurkishCharacters,
            component: decorateComponentWithProps(AmbiguousCharacter, ambiguousCharacterProps)
        }]);
        return EditorState.set(editorState, { decorator: decor });
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

    //Decorates ambiguous characters based on english keyboard ruleset
    findAmbiguousEnglishCharacters(contentBlock, callback, contentState) {
        const regex = new RegExp(Object.keys(englishKeyboardDisambiguations).join("|"), 'g');
        findWithRegex(regex, contentBlock, callback);
    }

    //Decorates ambiguous characters based on turkish keyboard ruleset
    findAmbiguousTurkishCharacters(contentBlock, callback, contentState) {
        const regex = new RegExp(Object.keys(turkishKeyboardDisambiguations).join("|"), 'g');
        findWithRegex(regex, contentBlock, callback);
    }

    render() {
        return (
            <div id="tool-window">
                <InputBox
                    onInputTextChange={this.onInputTextChange}
                    editorState={this.state.editorState}
                    onChange={this.onChange}
                    handleKeyCommand={this.handleKeyCommand}
                    keyBindingFn={this.keyBindingFn}
                    showDropdown={this.state.showDropdown}
                    disambiguationOptions={this.state.disambiguationOptions}
                    store={store}
                    showCommentInput={this.state.showCommentInput}
                />
                <input
                    onClick={this.logState}
                    className={'checkboxes'}
                    onChange={this.toggleCheckboxValue}
                    id="turkish_keyboard_checkbox"
                    ref="turkish_keyboard_checkbox"
                    type="checkbox"
                />
                <label htmlFor="turkish_keyboard_checkbox">I'm using a Turkish keyboard</label>
                <input
                    onClick={this.logState}
                    type="button"
                    value="log state to console"
                />
                <OutputBox
                    transcribeState={this.state}
                />
            </div>
        );
    }
}
