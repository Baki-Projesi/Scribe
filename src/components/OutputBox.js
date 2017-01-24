import React, { Component } from 'react';
import he from 'he';
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

    translate(newInput, language) {
        var outputText = '', codeToCharRules, charToCodeRules;

        if (language.toLowerCase() === "turkish") {
            codeToCharRules = ottomanTurkish;
        }
        else if (language.toLowerCase() === "ottoman arabic") {
            codeToCharRules = ottomanArabic;
        }
        else if (language.toLowerCase() === "latin") {
            codeToCharRules = ottomanLatin;
        }
        else if (language.toLowerCase() === "other") {
            codeToCharRules = ottomanCyrillic;
        }

        for (let i = 0; i < newInput.length; ++i) {
            var character = newInput.charAt(i);
            if (character === '&' && newInput.charAt(i + 1) === '#') {
                let k = i;
                while (newInput.charAt(k) !== ';' && k - i < 6) {
                    ++k;
                    character += newInput.charAt(k);
                }
                i = k;
            }
            if (character !== ' ') {
                var code = turkishCodes[character]; //TODO: what is the input language?
                if (code !== undefined) {
                    if (Array.isArray(code)) {
                        //TODO: find out which one to use
                        code = code[0];
                    }
                    var translatedChar = codeToCharRules[code];

                    if (translatedChar !== undefined) {
                        outputText += translatedChar;

                    }
                }
            } else {
                outputText += character;
            }
        }
        return outputText;
    }

    componentWillReceiveProps(nextProps) {
        var newDisplayText = nextProps.inputText ? 
            he.decode(this.translate(nextProps.inputText, nextProps.language), { decimal: true }) 
            : '';

        this.setState({
            displayText: newDisplayText,
            inputSourceText: nextProps.inputText
        })

    }


    render() {
        const {displayText} = this.state;

        return (
            <h2>{displayText}</h2>
        );
    }
}