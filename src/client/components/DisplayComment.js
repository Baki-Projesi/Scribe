import React, { Component } from 'react';

export default class DisplayComment extends Component {

    render() {
        const styles = {
            comment: {
                color: '#3b5998',
                textDecoration: 'underline'
            }
        }
        const commentText = this.props.contentState.getEntity(this.props.entityKey).getData().val;
        console.log("reached this thing")
        return (
            //TODO: show comment popup text on click
            <span title={commentText} style={styles.comment} >
                {this.props.children}
            </span>
        );
    }

}
