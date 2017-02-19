import React, { Component } from 'react';
import classNames from 'classnames';

/*
comment popups have the following properties:
    -they are displayed when a user clicks on a word
    -their content is editable
    -a user can either choose to save or discard the comment

We expect the following props:
    Text -> prior text of the comment if it exists
*/

export default class CommentPopup extends Component {

    constructor(props) {
        super(props);
        this.state = {
            text: ""
        }

        this.handleSave = this.handleSave.bind(this);
        this.handleDiscard = this.handleDiscard.bind(this);
    }

    handleSave() {
        if (this.state.text) {
            this.props.saveComment(this.state.text);
        }
    }

    handleDiscard() {
        if (this.state.text) {
            this.setState({
                text: ""
            })
        }

        this.props.discardComment();
    }

    render() {
        const {} = this.state;
        var negativeText = this.props.previouslySaved ? "Delete" : "Cancel";

        return (
            <div>
                <input type="text"> </input>
                <button onClick={this.handleDiscard} >{negativeText}</button>
                <button onClick={this.handleSave} >Save</button>
            </div>
        );
    }
}