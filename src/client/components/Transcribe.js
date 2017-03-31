import React, { Component } from 'react';
import LanguageTabBar from "./LanguageTabBar";
import OutputBox from './OutputBox';
import InputBox from './InputBox';
import '../styles/Transcribe.css';
import {englishKeyboardDisambiguations, turkishKeyboardDisambiguations} from '../../assets/disambiguationRules';


export default class Transcribe extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            language: "Turkish",
            inputText: undefined,
            keyboard: "English",
            boxesShown: [{input: true}, {arabic: true}, {output: true}]
        }
        this.changeLang = this.changeLang.bind(this);
        this.onInputTextChange = this.onInputTextChange.bind(this);
    }

    onInputTextChange(text) {
        this.setState({
            inputText: text
        });
    }

    changeLang(lang) {
        this.setState({
            language: lang
        });
    }

    toggleBox() {}

    render() {
        const {inputText} = this.state;
        return (
            <div id="tool-window">
                <InputBox charRules={englishKeyboardDisambiguations} onInputTextChange={this.onInputTextChange} />
                <OutputBox inputText={inputText} />
            </div>
        );
    }
}
