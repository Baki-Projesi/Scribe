import React, { Component } from 'react';
import he from 'he';
import translate from '../utils/translation'
import '../styles/OutputBox.css';

export default class OutputBox extends Component {

    constructor(props) {
        super(props);
        this.state = {
            displayText: '',
            inputSourceText: ''
        }
    }

    componentWillReceiveProps(nextProps) {
        var newDisplayText = nextProps.inputText ?
            he.decode(translate(nextProps.inputText, nextProps.language), { decimal: true })
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
