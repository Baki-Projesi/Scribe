import React, { Component } from 'react';
export default class DropDown extends Component {

  render() {
    const top = this.props.coordinates ? this.props.coordinates.top : 0;
    const left = this.props.coordinates ? this.props.coordinates.left : 0;

    const dropDownStyles = {
      dropDownBox: {
        backgroundColor: '#efefef',
        borderStyle: 'solid',
        borderColor: 'grey',
        borderWidth: '1px',
        position: 'absolute',
        width: '120px',
        top: top + 18,
        left: left + 6,
        color: 'black'
      },
      orderedList: {
        margin: '4px'
      }
    }

    let dropdownOptions;
    if (this.props.options && Array.isArray(this.props.options)) {
        dropdownOptions = this.props.options.map((option) =>
          <li key={option.code}> {
            option.turkishText + ' ➞ ' +
              option.representedText ?
              option.representedText :
              option.arabicText
          }</li>
        );
    }
    return (
      <div style={dropDownStyles.dropDownBox}>
        <ol style={dropDownStyles.orderedList}>
          {dropdownOptions}
        </ol>
      </div>
    );
  }
}
