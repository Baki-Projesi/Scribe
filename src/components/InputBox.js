import React, { Component } from 'react';
import '../styles/InputBox.css';

export default class InputBox extends Component {
    
    constructor (props) {
        super(props);
        this.state = {
            textContents: ''
        }
        this.updateInputValue = this.updateInputValue.bind(this);
    }

    updateInputValue(event) {
        const text = event.target.value;

        this.setState({
            textContents: text
        });

        this.props.onInputTextChange(text);
        console.log(text);
    }
    
    render() {
        const { textContents } = this.state;

        return (
            <div>
                <input value={textContents} onChange={this.updateInputValue}/>
            </div>
        );
    }
}