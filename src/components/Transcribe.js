import React, { Component } from 'react';
import OutputBox from './OutputBox';
import InputBox from './InputBox';
import '../styles/Transcribe.css';

export default class Transcribe extends Component {

    constructor(props) {
        super(props);
        this.state = {
            inputText: undefined
        }

        this.onInputTextChange = this.onInputTextChange.bind(this);
    }

    onInputTextChange(text) {
        this.setState({
            inputText: text
        });
    }

    render() {
        const {inputText} = this.state;

        return (
            <div> 
                <InputBox onInputTextChange={this.onInputTextChange}/>
                <OutputBox inputText={inputText} />
            </div>
        );
    }
}