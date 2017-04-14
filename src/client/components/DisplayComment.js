import React, { Component } from 'react';

export default class DisplayComment extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const styles = {
            comment: {
                color: '#3b5998',
                textDecoration: 'underline'
            }
        }
        const commentText = this.props.contentState.getEntity(this.props.entityKey).getData().comment;
        return (
            //TODO: show comment popup text on click
            <span title={commentText} style={styles.comment} onClick={this.props.callback(commentText)}>
                {this.props.children}
            </span>
        );
    }

}
