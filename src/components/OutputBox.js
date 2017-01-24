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

    translate(newInput) {
        const language = this.props.language;
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
                while (newInput.charAt(k) != ';' && k - i < 6) {
                    ++k;
                    character += newInput.charAt(k);
                }
                i = k;
            }
            var code = turkishCodes[character]; //TODO: what is the input language?
            if (code !== undefined) {
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

    parseHtmlEntities(str) {
        return str.replace(/&#([0-9]{1,3});/gi, function (match, numStr) {
            var num = parseInt(numStr, 10); // read num as normal number
            return String.fromCharCode(num);
        });
    }

    componentWillReceiveProps(nextProps) {
        var currentDisplayText = this.state.displayText;
        var newDisplayText = nextProps.inputText ? he.decode(this.translate(nextProps.inputText), {decimal:true}) : '';


        console.log("translated text is", newDisplayText);

        if (currentDisplayText !== newDisplayText) {
            this.setState({
                displayText: newDisplayText,
                inputSourceText: nextProps.inputText
            })
        }
    }


    render() {
        const {displayText} = this.state;

        return (
            <h2>{displayText}</h2>
        );
    }
}