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
        // this.handleChange = this.handleChange.bind(this);

    }

    handleChange(e) {
        //this.props.onCommentChange(e);
    }

    render() {
        return (
            <div style={this.props.position}>
                <input
                    onChange={this.handleChange.bind(this)}
                    ref={"comment"}
                    type="text"
                    value={this.props.value}
                    onKeyDown={this.props.onCommentInputKeyDown}
                />
                <button onMouseDown={this.props.confirmComment}>
                    Confirm
                  </button>
            </div>
        );
    }
}
