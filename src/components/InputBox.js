import React, { Component } from 'react';
import '../styles/InputBox.css';


/*
The input area has the following properties:
    -Holds a collection of Words
    -

*/

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

    }
    
    render() {
        const { textContents } = this.state;

        return (
            <div>
                <textarea value={textContents} onChange={this.updateInputValue}/>
            </div>
        );
    }
}