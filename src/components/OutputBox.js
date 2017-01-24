import React, { Component } from 'react';
import { ottomanArabic, ottomanTurkish, ottomanLatin, ottomanCyrillic } from '../utils/reverse-rules'
import { arabicCodes, turkishCodes, latinCodes, cyrillicCodes } from '../utils/rules'
import '../styles/OutputBox.css';

export default class OutputBox extends Component {

    constructor(props) {
        super(props);
        this.state = {
            displayText: '',
            inputSourceText: ''
        }
    }

    translate(inputText) {
        const language = this.props.language, 
            newInput = inputText ? inputText.substring(this.state.inputSourceText.length) : '';
        var outputText = this.state.displayText, codeToCharRules, charToCodeRules;

        if (language.toLowerCase() === "turkish") {
            codeToCharRules = ottomanTurkish;
            charToCodeRules = turkishCodes;
        }
        else if (language.toLowerCase() === "ottoman arabic") {
            codeToCharRules = ottomanArabic;
            charToCodeRules = arabicCodes;
        }
        else if (language.toLowerCase() === "latin") {
            codeToCharRules = ottomanLatin;
            charToCodeRules = latinCodes;
        }
        else if (language.toLowerCase() === "other") {
            codeToCharRules = ottomanCyrillic;
            charToCodeRules = cyrillicCodes;
        }

        for (let i = 0; i < newInput.length; ++i) {
            var character = newInput.charAt(i);
            var code = charToCodeRules[character];
            if (code != undefined) {
                if (Array.isArray(code)) {
                    //TODO: find out which one to use
                    code = code[0];
                }
                var translatedChar = codeToCharRules[code];
                outputText += translatedChar;
            }
        }
        return outputText;
    }

    componentWillReceiveProps(nextProps) {
        console.log("component recieved props");
        var currentDisplayText = this.state.displayText;
        var newDisplayText = this.translate(nextProps.inputText);
        console.log("translated text is", newDisplayText);
        if (currentDisplayText != newDisplayText) {
            this.setState({
                displayText: newDisplayText,
                inputSourceText: nextProps.inputText
            })
        }
    }


    render() {
        const {outputText} = this.state;

        return (
            <h2>{outputText}</h2>
        );
    }
}