import React, { Component } from 'react';
import LanguageTabBar from "./LanguageTabBar";
import OutputBox from './OutputBox';
import InputBox from './InputBox';
import '../styles/Transcribe.css';

export default class Transcribe extends Component {

    constructor(props) {
        super(props);
        this.state = {
            language: "Turkish",
            inputText: undefined
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

    render() {
        const {inputText} = this.state;

        return (
            <div>
                <InputBox onInputTextChange={this.onInputTextChange} />
                <OutputBox inputText={inputText} />
                <LanguageTabBar changeLang={this.changeLang} language={this.state.language} />
            </div>
        );
    }
}
