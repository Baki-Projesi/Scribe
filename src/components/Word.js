import React, { Component } from 'react';
import classNames from 'classnames';
import '../styles/Word.css';

/*
Words have the following properties:
    -when they are active, dropdown suggestions happen
    -they can be clicked and commented on
    -they are generated using the space bar
    -they hold information about their latin, arabic, and coded text
    -their content is highlighted when hovered over or when holding comment data
*/

export default class Word extends Component {

    constructor(props) {
        super(props);
        this.state = {
            active: false, //The user is actively working on this word
            hover: false, 
            latinText: "",
            arabicText: "",
            codedText: "",
            comment: undefined
        }

        this.handleClick = this.handleClick.bind(this);
        this.saveComment = this.saveComment.bind(this);
    }

    componentWillReceiveProps(nextProps) {

    }

    handleClick() {
        //show comment popup
        console.log("You clicked me!");
    }

    saveComment(commentText) {
        console.log("comment saved with text ", commentText);
        if (commentText) {
            this.setState({
                comment: commentText
            })
        }
    }

    //These probably have to be bound
    mouseOver () {
        this.setState({hover: true});
    }

    //needs bind
    mouseOut () {
        this.setState({hover: false});
    }

    render() {
        const {active, hover, latinText, arabicText, codedtext, comment} = this.state;

        var wordClass = classNames({
            'word': true,
            'word-highlighted': comment !== undefined && comment !== null && comment !== '',
            'word-mouseOver': hover
        });

        var displayText = codedtext;
        if (this.props.language === 'Latin') {
            displayText = latinText;
        }
        else if (this.props.language === 'Arabic') {
            displayText = latinText;
        }
        displayText += ' '; // add space to separate words

        return (
            <span className={wordClass} onClick={this.handleClick}>{displayText}</span>
        );
    }
}