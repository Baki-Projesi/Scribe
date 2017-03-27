import React, { Component } from 'react';
import classNames from 'classnames';

/*
Lines have the following properties:
    -they store an array of words
    -they can be commented on
*/

export default class Line extends Component {

    constructor(props) {
        super(props);
        this.state = {
            words: [],
            comment: undefined
        }
    }

    componentWillReceiveProps(nextProps) {

    }

    render() {
        const {words, comment} = this.state;
        var wordClass = classNames({
            'line': true,
            'line-commented': comment !== undefined && comment !== null && comment !== ''
        })
        return (
            <div>
                {words}
            </div>
        );
    }
}