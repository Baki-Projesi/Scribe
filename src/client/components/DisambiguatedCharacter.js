import React, { Component } from 'react';
export default class DisambiguatedCharacter extends Component {

    render() {
        const styles = {
            disambiguatedcharacter: {
                color: 'black'
            }
        }
        return (
            <span style={styles.disambiguatedcharacter}>
                {this.props.children}
            </span>
        )
    }
}