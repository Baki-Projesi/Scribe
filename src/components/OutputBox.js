import React, { Component } from 'react';
import { ottomanArabic, ottomanTurkish, ottomanLatin, ottomanCyrillic } from '../utils/reverse-rules'
export default class OutputBox extends Component {

    constructor(props) {
        super(props);
        this.state = {
            language: "ottomanTurkish", //default to Turkish
            displayText: ''
        }
        
        this.onLanguageChange = this.onLanguageChange.bind(this);
    }

    translate(input) {
        const language = this.state.language;
        const inputText = input;
        var outputText;
        var translationRules;

        if (language === "ottomanTurkish") {
            translationRules = ottomanTurkish;
        }
        else if (language === "ottomanArabic") {
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

    //TODO: remove after we use this to generate the objects
    invert(obj) {

        var new_obj = {};

        for (var prop in obj) {
            if (obj.hasOwnProperty(prop)) {

                let value = obj[prop];
                if (new_obj[value]) {
                    //already has a key defined
                    var array;
                    if (Array.isArray(new_obj[value])) {
                        //already an array, don't make a new one
                        array = new_obj[value];
                    } else {
                        //simply a string, make new array with first element the string
                        array = [new_obj[value]];
                    } 
                    array.push(prop); //add current value
                    new_obj[value] = array;                   
                } else {
                    //brand new key
                    new_obj[value] = prop;
                }
            }
        }

        return new_obj;
    };

    //TODO: bind to Component
    onLanguageChange(newLanguage) {
        if (newLanguage) {
            this.setState({
                language: newLanguage
            })
        }
    }

    render() {
        const outputText = this.state.displayText;
        
        return (
                <h2>{this.props.inputText}</h2>
        );
    }
}