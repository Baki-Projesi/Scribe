import React, { Component } from 'react';
import { ottomanArabic, ottomanTurkish, ottomanLatin, ottomanCyrillic } from '../utils/reverse-rules'
class OutputBox extends Component {

    constructor(props) {
        super(props);
        this.state = {
            language: "ottomanTurkish", //default to Turkish
            displayText: "Nothing to translate"
        }
    }

    translate(input) {
        const language = this.state.language;
        const inputText = input;
        var outputText;
        var translationRules;

        if (language === "ottomanTurkish") {
            translationRules = ottomanTurkish;
        }
        else if (language == "ottomanArabic") {
            translationRules = ottomanArabic;
        }
        else if (language === "ottomanLatin") {
            translationRules = ottomanLatin;
        }
        else if (language === "ottomanCyrillic") {
            translationRules = ottomanCyrillic;
        }
        
        for (var i = 0; i < inputText.length; ++i) {
            let character = inputText.charAt(i);
            
        }
    }

    onLanguageChange(language) {
        if (language) {
            this.state.language = language;
        }
    }

    render() {

        return (
                <stuff></stuff>
        );
    }
}