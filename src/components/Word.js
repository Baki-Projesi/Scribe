import React, { Component } from 'react';
import '../styles/Word.css';

/*
Words have the following properties:
    -they can be clicked and commented on
    -they are generated using the space bar
    -they hold information about their latin, arabic, and coded text
*/

export default class Word extends Component {

    constructor(props) {
        super(props);
        this.state = {
            active: false,
            Latin_Text: "",
            Arabic_Text: "",
            Coded_Text: "",
            Comment: undefined
        }
    }

    componentWillReceiveProps(nextProps) {

    }

    render() {
        const {displayText} = this.state;
        return (
            <span className={}>{displayText}</span>
        );
    }
}