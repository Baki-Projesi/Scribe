import React, { Component } from 'react';
import OutputBox from './OutputBox';
import InputBox from './InputBox';
import ImageUpload from './ImageUpload';
import '../styles/Transcribe.css';
import {
    EditorState,
    RichUtils,
    CompositeDecorator,
    convertToRaw,
    convertFromRaw,
    getDefaultKeyBinding,
    KeyBindingUtil,
    Modifier
} from 'draft-js';
import findWithRegex from '../utils/findWithRegex';
import { adjustSelectionOffset } from '../utils/selectionStateHelpers';
import getCurrentWordBuffer from '../utils/getCurrentWordBuffer';
import { orderRules } from '../utils/groupByKey';
import decorateComponentWithProps from 'decorate-component-with-props';
import DisplayComment from './DisplayComment'
import AmbiguousCharacter from './AmbiguousCharacter';
import DisambiguatedCharacter from './DisambiguatedCharacter';
import { englishKeyboardDisambiguations, turkishKeyboardDisambiguations } from '../../assets/disambiguationRules';
import bufferComboSearch from '../utils/bufferComboSearch';
import generateDraftStateObject from '../utils/generateDraftStateObject';
import FileSaver from 'file-saver';

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
        this.state.usingTurkishKeyboard = true;

        this.logState = () => {
            const content = this.state.editorState.getCurrentContent();
            console.log(convertToRaw(content));
        };

        this.focus = () => this.refs.editor.focus();

        this.onChange = (editorState) => {
            let newState, current = generateDraftStateObject(editorState);
            current.didFileLoad = false;

            if (current.oldSelectionState.isCollapsed()) {
                // Selection is just the cursor w/ no characters highlighted
                newState = this._promptForDisambiguation(current);
            } else {
                // At least one character highlighted
                //newState = this._promptForComment(current);
                newState = current;
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
        this.doFileLoad = this._doFileLoad.bind(this);
        this.allowOpen = this._allowOpen.bind(this)
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
            let charRules = this.state.usingTurkishKeyboard ? turkishKeyboardDisambiguations : englishKeyboardDisambiguations;
            const numOptions = this.state.disambiguationOptions ? this.state.disambiguationOptions.length : 0;

            if (this.state.showDropdown) {
                const optionMap = this._generateOptionMap();

                if ((e.which >= 49 && e.which <= 49 + numOptions) || (e.which >= 97 && e.which <= 97 + numOptions) && optionMap[e.which]) {
                    return optionMap[e.which]; //e.g. 'dropdown-2'
                }
                else if (e.key === " " || !isNaN(Number(e.key))) {
                    //go with default option and create choiceless entity if applicable
                    return 'noDropdown-' + e.key;
                }
                else {
                    this.confirmDropdownChoice(0);
                }
            }

            else if (charRules[e.key] && charRules[e.key][0].needsDisambiguation === false) {
                //choiceless rule (e.g. space or number)
                this.createChoicelessEntity(e.key);
                return 'handled';
            }
        }

        return getDefaultKeyBinding(e);

    }

    _generateOptionMap() {
        let str = 'dropdown-';
        const keyCodeBase = 48;
        const numOptions = this.state.disambiguationOptions.length;
        const optionMap = {};
        for (let i = 1; i < numOptions + 1; i++) {
            optionMap[keyCodeBase + i] = (str + i); //numkeys 1-9
            optionMap[(keyCodeBase * 2) + i] = (str + i); // numpad 1-9
        }

        return optionMap;
    }

    //This is passed a value from _keyBindingFn, either a special string or the default
    _handleKeyCommand(command) {
        if (command === 'handled') {
            return command;
        }
        if (command.startsWith('noDropdown')) {
            let character = command.charAt(command.length - 1);
            this.confirmDropdownWithChoicelessEntity(character);
            return 'handled';
        }
        if (command === 'editor-newline') {
            this.editorNewLine();
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
            this.confirmDropdownChoice(choice - 1);

            return 'handled';
        }

        return 'not-handled';
    }

    createChoicelessEntity(key) {
        let charRules = this.state.usingTurkishKeyboard ? turkishKeyboardDisambiguations : englishKeyboardDisambiguations;
        let newState = Object.assign(this.state, this._addChoicelessEntity(key, this.state.editorState));
        this.setState(newState);
    }

    editorNewLine() {
        let newState = this.state;
        if (this.state.showDropdown) {
            newState = Object.assign(this.state, this._confirmDisambiguation(0, this.state.editorState));
        }
        newState.editorState = this.keyCommandInsertNewline(this.state.editorState);
        //newState = generateDraftStateObject(newState.editorState);
        this.setState(newState);
    }

    confirmDropdownWithChoicelessEntity(character) {
        let newState = Object.assign(this.state, this._confirmDisambiguation(0, this.state.editorState));
        newState = Object.assign(newState, this._addChoicelessEntity(character, newState.editorState));
        this.setState(newState);
    }

    confirmDropdownChoice(choiceIndex) {
        let newState = Object.assign(this.state, this._confirmDisambiguation(choiceIndex, this.state.editorState));
        this.setState(newState);
    }

    //TODO: move comment prompt into a floating tooltip
    _promptForComment(current) {
        const { editorState } = this.state;
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
                // console.log(commentKey)
                // console.log(commentInstance)

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
        const { editorState, commentVal } = this.state;
        const contentState = editorState.getCurrentContent();
        const contentStateWithEntity = contentState.createEntity(
            'COMMENT',
            'MUTABLE',
            { val: commentVal }
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
                }

                if (charRules[previousChar] !== undefined) {
                    //generate dropdown options using the merged array of char rules and combo options
                    disambiguationOptions = orderRules(charRules[previousChar].concat(combinationOptions));
                    showDropdown = true; //TODO: you shouldn't need this anymore
                }
            }
        }

        Object.assign(current, {
            combinationOptions: combinationOptions,
            disambiguationGroupData: disambiguationGroupData,
            showDropdown: showDropdown,
            disambiguationOptions: disambiguationOptions,
            showCommentInput: false,
            characterBuffer: characterBuffer
        });

        return current;
    }

    //this is called during handleKeyCommand when it detects a dropdown choice.
    _confirmDisambiguation(choiceIndex, editorState) {
        if (!this.state.disambiguationOptions || this.state.disambiguationOptions.length < 1) {
            return {};
        }

        //== USER CHOSE NON-FINAL OPTION ==//
        if (this.state.disambiguationOptions[choiceIndex].secondDropdownOptions) {
            return {
                disambiguationOptions: this.state.disambiguationOptions[choiceIndex].secondDropdownOptions
            }
        }

        //== USER CHOSE FINAL OPTION, CREATE ENTITY ==//
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

        //remove SPECIAL combos from the combination options list because they are hidden under SPECIALS menu by default
        if (this.state.combinationOptions && 
            this.state.combinationOptions.length > 0 && 
            this.state.disambiguationOptions[this.state.disambiguationOptions.length - 1].turkishText === "SPECIALS") 
            {
            for (let i = 0; i < this.state.combinationOptions.length; i++) {
            let comboOption = this.state.combinationOptions[i];
                if (comboOption.dropdownOrder === 4) {
                    this.state.combinationOptions.splice(i, 1);
                }
            }
        }

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
            editorState: newEditorState,
            showDropdown: false,
            disambiguationOptions: null
        }
    }

    _addChoicelessEntity(char, editorState) {
        let charRules = this.state.usingTurkishKeyboard ? turkishKeyboardDisambiguations : englishKeyboardDisambiguations;

        if (charRules[char] && charRules[char].length > 0) {
            const contentState = editorState.getCurrentContent(), rule = charRules[char][0];
            let contentStateWithEntity = contentState.createEntity(
                'DISAMBIGUATION',
                'IMMUTABLE',
                rule
            );
            const entityKey = contentStateWithEntity.getLastCreatedEntityKey();
            let newSelectionState = adjustSelectionOffset(editorState.getSelection(), 0, rule.turkishText.length);

            //Replace the typed text with the displayText
            contentStateWithEntity = Modifier.replaceText(contentStateWithEntity, newSelectionState, rule.turkishText, null, entityKey);

            let newEditorState = EditorState.set(editorState, { currentContent: contentStateWithEntity });
            newEditorState = RichUtils.toggleLink(
                newEditorState,
                newSelectionState,
                entityKey
            );

            newSelectionState = adjustSelectionOffset(newSelectionState, rule.turkishText.length, 0);
            newEditorState = EditorState.set(newEditorState, { selection: newSelectionState });

            return {
                editorState: newEditorState,
                showDropdown: false,
                disambiguationOptions: null
            }
        }
    }

    keyCommandInsertNewline(editorState) {
        var contentState = Modifier.splitBlock(
            editorState.getCurrentContent(),
            editorState.getSelection(),
        );
        return EditorState.push(editorState, contentState, 'split-block');
    }

    _toggleCheckboxValue(value) {
        this.logState();
        // will have to come back to this once we have more keyboards
        var usingTurkishKeyboard;
        if (value == "Turkish Keyboard") {
            usingTurkishKeyboard = true;
        } else {
            usingTurkishKeyboard = false;
        }
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

    doFileSave() {
        let fileName = prompt("Please enter the name of this file.");

        if (fileName) {
            fileName = fileName.replace(/[|&;$%@"<>()+,.]/g, "");
            fileName += ".json";
            let file = new File([JSON.stringify(convertToRaw(this.state.editorState.getCurrentContent()))],
                fileName,
                { type: "text/plain;charset=utf-8" });

            FileSaver.saveAs(file);
        }

    }

    _doFileLoad() {
        const files = this.refs.filePicker.files;
        if (files.length > 0) {
            const fr = new FileReader();
            fr.onload = function (e) {
                let result = JSON.parse(e.target.result);

                let editState = EditorState.push(this.state.editorState, convertFromRaw(result));
                let newState = generateDraftStateObject(editState);
                newState.didFileLoad = true;

                this.setState(newState);
            }.bind(this);
            fr.readAsText(files.item(0));
        }

    }

    _allowOpen() {
        const files = this.refs.filePicker.files;
        if (files.length > 0) {
            this.refs.openButton.disabled = false;
        }
    }

    render() {
        const { inputText, } = this.state;
        let whichKeyboard = this.state.usingTurkishKeyboard ? "Turkish Keyboard" : "English Keyboard";

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
                <div>
                    <label htmlFor="turkish_keyboard_checkbox" className="keyboardSelect">
                        <button id="demo-menu-top-left"
                            className="mdl-button mdl-js-button mdl-button--icon">
                            <i className="material-icons">more_vert</i>
                        </button>
                        <span>{whichKeyboard}</span>


                        <ul className="mdl-menu mdl-menu--top-left mdl-js-menu mdl-js-ripple-effect"
                            data-mdl-for="demo-menu-top-left">
                            <li className="mdl-menu__item" onClick={this.toggleCheckboxValue.bind(this, "Turkish Keyboard")}>Turkish Keyboard</li>
                            <li className="mdl-menu__item" onClick={this.toggleCheckboxValue.bind(this, "English Keyboard")}>English Keyboard</li>
                        </ul>
                    </label>

                </div>
                <div>
                    <input type="button" value="Save to File" id="saveToFileButton" onClick={this.doFileSave.bind(this)} />
                </div>
                <div>
                    <input type="button" value="Open JSON File" id="openFileButton" ref="openButton" onClick={this.doFileLoad.bind(this)} />
                    <input type="file" ref="filePicker" id="filePickerInput" onChange={this.allowOpen.bind(this)} />
                </div>
            </div>
        );
    }
}
