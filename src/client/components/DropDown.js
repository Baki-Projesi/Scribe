import React, { Component } from 'react';
export default class DropDown extends Component {

  render() {
    const styles = {
      dropDownBox: {
        width: '120px',
        height: '80px',
        color: 'blue'
      }
    }

    let dropdownOptions = this.props.options ? this.props.options.map((option) => <li key={option}>{option}</li>) : null;

    return (
      <div style={styles.dropDownBox}>
        <ol>
          {dropdownOptions}
        </ol>
      </div>
    );
  }
}
