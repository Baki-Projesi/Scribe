import React, { Component } from 'react';
export default class DisambiguatedCharacter extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const styles = {
            disambiguatedcharacter: {
                color: 'red'
            }
        }
        return (
            <span style={styles.disambiguatedcharacter}>
                {this.props.children}
            </span>
        )
    }
}