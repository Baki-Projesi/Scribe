import React, { Component } from 'react';

export default class LanguageTab extends Component {
    constructor() {
        super();
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.onTabClick(
            this.props.language);

    }
    render() {
        var language = this.props.language;

        return (
            <button onClick={this.handleClick}>{language}</button>
        );
    }
}
