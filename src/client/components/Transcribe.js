import React, { Component } from 'react';
import LanguageTabBar from "./LanguageTabBar";
import OutputBox from './OutputBox';
import InputBox from './InputBox';
import ImageUpload from './ImageUpload';
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
import getCurrentWordBuffer from '../utils/getCurrentWordBuffer';
import { convertKeyGroupToDisambiguationArray, groupByTurkishKey } from '../utils/groupByKey';
import decorateComponentWithProps from 'decorate-component-with-props';
import CommentPopup from './CommentPopup';
import DisplayComment from './DisplayComment'
import AmbiguousCharacter from './AmbiguousCharacter';
import DisambiguatedCharacter from './DisambiguatedCharacter';
import { englishKeyboardDisambiguations, turkishKeyboardDisambiguations } from '../../assets/disambiguationRules';
import bufferComboSearch from '../utils/bufferComboSearch';
import needsDropdown from '../utils/needsDropdown';
import generateDraftStateObject from '../utils/generateDraftStateObject';

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
        this.state = generateDraftStateObject(initEditorState);

        this.logState = () => {
            const content = this.state.editorState.getCurrentContent();
            console.log(convertToRaw(content));
        };

        this.focus = () => this.refs.editor.focus();

        this.onChange = (editorState) => {
            let newState, current = generateDraftStateObject(editorState);

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
        this.handleKeyCommand = this._handleKeyCommand.bind(this);
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

        if (e.which !== 8 && e.which !== 46) { // backspace, delete
            if (this.state.showDropdown) {
                let characterBuffer = getCurrentWordBuffer(
                    this.state.editorState.getCurrentContent().getBlockForKey(this.state.editorState.getSelection().getStartKey()),
                    this.state.editorState.getSelection().getStartOffset());
                let charRules = this.state.usingTurkishKeyboard ? turkishKeyboardDisambiguations : englishKeyboardDisambiguations;
                let comboOptions = bufferComboSearch(characterBuffer + e.key, charRules);
                let str = 'dropdown-';
                const keyCodeBase = 48;
                const numOptions = this.state.disambiguationOptions.length;
                const optionMap = {};
                for (let i = 1; i < numOptions + 1; i++) {
                    optionMap[keyCodeBase + i] = (str + i); //numkeys 1-9
                    optionMap[(keyCodeBase * 2) + i] = (str + i); // numpad 1-9
                }

                if ((e.which >= 49 && e.which <= 49 + numOptions) || (e.which >= 97 && e.which <= 97 + numOptions) && optionMap[e.which]) {
                    return optionMap[e.which]; //e.g. 'dropdown-2'
                }
                // else if (comboOptions.length > 0) {
                //     //If they type another character that could be a combination 
                //     console.log('potential combo');
                // }
                else {
                    //If anything besides Backspace or a number is chosen,
                    // use default disambiguation choice and have the editor use the normal keypress
                    let newState = Object.assign(this.state, this._confirmDisambiguation(0, this.state.editorState));
                    this.setState(newState);
                }
            } else if (this.state.disambiguationOptions &&
                this.state.disambiguationOptions.length > 0 &&
                this.state.disambiguationOptions[0].code === 'sp') {
                //we don't show dropdown for spaces, but they need an entity anyways
                let newState = Object.assign(this.state, this._confirmDisambiguation(0, this.state.editorState));
                this.setState(newState);
            } else if (!needsDropdown(e.key)) {
                //arabic numbers don't need dropdowns, translate them immediately

            }
        }

        return getDefaultKeyBinding(e);
    }

    //This is passed a value from _keyBindingFn, either a special string or the default
    _handleKeyCommand(command) {
        if (command === 'require-dropdown') {
            console.log(command)
            //TODO: remove className .flash and add it back to <Dropdown />
            // https://github.com/facebook/react/issues/7142
            // https://facebook.github.io/react/docs/animation.html
        }
        if (command === 'editor-newline') {
            let newState = this.state;
            if (this.state.showDropdown) {
                newState = Object.assign(this.state, this._confirmDisambiguation(0, this.state.editorState));
            }
            newState.editorState = this.keyCommandInsertNewline(this.state.editorState);
            newState = generateDraftStateObject(newState.editorState);
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

            if (choice === 1 || // first choice always default
            this.state.dropDownCount < 2 || // no grouping
                (this.state.combinationOptions && this.state.combinationOptions.length + 1 >= choice)) //chose a combination
            {
                newState = this._confirmDisambiguation(choice - 1, this.state.editorState);
            }
            else {
                newState = this._confirmVowelCategory(choice, this.state.editorState);
            }

            this.setState(newState);
            return 'handled';
        }

        return 'not-handled';
    }

    //TODO: move comment prompt into a floating tooltip
    _promptForComment(current) {
        const {editorState} = this.state;
        const selection = editorState.getSelection();
        if (!selection.isCollapsed()) {
            const contentState = editorState.getCurrentContent();
            const startKey = editorState.getSelection().getStartKey();
            const startOffset = editorState.getSelection().getStartOffset();
            const blockWithCommentAtBeginning = contentState.getBlockForKey(startKey);
            const commentKey = blockWithCommentAtBeginning.getEntityAt(startOffset);

            let commentContent = ""
            if (commentKey) {
                const commentInstance = contentState.getEntity(commentKey);
                commentContent = commentInstance.getData().val;
                console.log(commentKey)
                console.log(commentInstance)

            }

            // add positioning code here
            Object.assign(current, {
                showCommentInput: true,
                showDropdown: false,
                // commentPopupPosition: position,
                commentVal: commentContent, // might not need comma here
            });

        }


        // let commentPopupHeight = 44, position, relativeParent;
        // // const relativeParent = getRelativeParentElement(this.toolbar.parentElement);
        // const relativeRect = relativeParent ? relativeParent.getBoundingClientRect() : document.body.getBoundingClientRect();
        // const selectionRect = getVisibleSelectionRect(window);
        // position = {
        //     top: (selectionRect.top - relativeRect.top) - commentPopupHeight,
        //     left: (selectionRect.left - relativeRect.left) + (selectionRect.width / 2),
        //     transform: 'translate(-50%) scale(1)',
        //     transition: 'transform 0.15s cubic-bezier(.3,1.2,.2,1)',
        // };
        return current;

    }

    _confirmComment(e) {
        const {editorState, commentVal} = this.state;
        const contentState = editorState.getCurrentContent();
        const contentStateWithEntity = contentState.createEntity(
          'COMMENT',
          'MUTABLE',
          {val: commentVal}
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
            commentVal: '',
        })
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
        const contentState = editorState.getCurrentContent();
        const selection = editorState.getSelection();
        const startKey = selection.getStartKey();
        const startOffset = editorState.getSelection().getStartOffset();
        const blockWithCommentAtBeginning = contentState.getBlockForKey(startKey);
        const commentKey = blockWithCommentAtBeginning.getEntityAt(startOffset);
        console.log(commentKey)

        var newContent = RichUtils.toggleLink(editorState, selection, commentKey)

        if (!selection.isCollapsed()) {
            this.setState({
                editorState: EditorState.push(editorState, newContent, 'apply-entity'),
                showCommentInput: false,   
            });
        }
    }

    //TODO: move into dropdown positioned under cursor
    _promptForDisambiguation(current) {
        let charRules = this.state.usingTurkishKeyboard ? turkishKeyboardDisambiguations : englishKeyboardDisambiguations;
        let showDropdown = false,
            dropDownCount = 0,
            disambiguationOptions = [],
            characterBuffer = this.state.characterBuffer,
            combinationOptions = [],
            disambiguationGroupData;

        if (current.startOffset > 0) {
            const previousChar = current.currentBlock.getText().charAt(current.startOffset - 1);
            characterBuffer = getCurrentWordBuffer(current.currentBlock, current.startOffset);

            const previousEntity = current.currentBlock.getEntityAt(current.startOffset - 1);
            if (previousEntity === null) {

                //check buffer to see if we have a combination match to offer
                combinationOptions = bufferComboSearch(characterBuffer, charRules);
                if (combinationOptions.length > 0 && characterBuffer.length > 1) {
                    disambiguationOptions = disambiguationOptions.concat(combinationOptions);
                    dropDownCount = 1;
                }

                //add disambiguation options based on previous typed char
                if (charRules[previousChar] !== undefined) {
                    showDropdown = previousChar !== ' ';
                    if (charRules[previousChar].length + combinationOptions.length > 9) {
                        //more than 9 options in total, need to group single-char options

                        disambiguationGroupData = groupByTurkishKey(charRules[previousChar]);
                        disambiguationOptions = disambiguationOptions.concat(convertKeyGroupToDisambiguationArray(disambiguationGroupData));
                        disambiguationOptions.unshift(charRules[previousChar][0]); //add default option for quick typing
                        dropDownCount = 2;
                    } else {
                        disambiguationOptions = disambiguationOptions.concat(charRules[previousChar]);
                        dropDownCount = 1;
                    }
                }
            }
        }

        Object.assign(current, {
            combinationOptions: combinationOptions,
            disambiguationGroupData: disambiguationGroupData,
            showDropdown: showDropdown,
            dropDownCount: dropDownCount,
            disambiguationOptions: disambiguationOptions,
            showCommentInput: false,
            characterBuffer: characterBuffer
        });

        return current;
    }

    //this is called during handleKeyCommand when it detects a dropdown choice.
    _confirmDisambiguation(choiceIndex, editorState) {
        let chosenText;
        if (this.state.disambiguationOptions[choiceIndex].representedText !== undefined) {
            chosenText = this.state.disambiguationOptions[choiceIndex].representedText;
        } else {
            chosenText = this.state.disambiguationOptions[choiceIndex].turkishText;
        }
        const displayText = chosenText;
        const contentState = editorState.getCurrentContent();
        let contentStateWithEntity = contentState.createEntity(
            'DISAMBIGUATION',
            'IMMUTABLE',
            this.state.disambiguationOptions[choiceIndex]
        );
        const entityKey = contentStateWithEntity.getLastCreatedEntityKey();
        let newSelectionState;

        if (this.state.combinationOptions && this.state.combinationOptions.length > 0 && this.state.combinationOptions.length - choiceIndex > -1) {
            //user chose a combination, need to replace text backwards
            newSelectionState = adjustSelectionOffset(editorState.getSelection(), 0 - chosenText.length, 0);
        } else {
            if (chosenText.length > 1) {
                //user chose a double-consonant, need to add text forwards
                let str = new Array(chosenText.length).join(' ');
                contentStateWithEntity = Modifier.insertText(contentStateWithEntity, editorState.getSelection(), str);
            }
            newSelectionState = adjustSelectionOffset(editorState.getSelection(), -1, (-1 + chosenText.length));
        }

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

        newSelectionState = adjustSelectionOffset(newSelectionState, chosenText.length, 0);
        newEditorState = EditorState.set(newEditorState, { selection: newSelectionState });

        return {
            dropDownCount: this.state.dropDownCount - 1,
            editorState: newEditorState,
            showDropdown: false,
            disambiguationOptions: null
        }
    }

    _confirmVowelCategory(choiceIndex, editorState) {
        let key = this.state.disambiguationOptions[choiceIndex - 1].turkishText;

        return {
            dropDownCount: this.state.dropDownCount - 1,
            disambiguationOptions: this.state.disambiguationGroupData[key],
            editorState: editorState
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
        //     // specify props
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
        const {inputText, } = this.state;
        return (
            <div id="tool-window">
                <div className={'tool-window_inputs'}>
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
                        commentVal={this.state.commentVal}
                        onCommentChange={this.onCommentChange}
                        confirmComment={this.confirmComment}
                        onCommentInputKeyDown={this.onCommentInputKeyDown}
                        removeComment={this.removeComment}
                    />
                    <ImageUpload />

                    <OutputBox
                        transcribeState={this.state}
                    />
                </div>

                <input
                    onClick={this.logState}
                    className="turkish_keyboard_checkbox"
                    onChange={this.toggleCheckboxValue}
                    id="turkish_keyboard_checkbox"
                    ref="turkish_keyboard_checkbox"
                    type="checkbox"
                />
                <label htmlFor="turkish_keyboard_checkbox">I'm using a Turkish keyboard</label>
            </div>
        );
    }
}
