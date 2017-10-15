import React, { Component } from 'react';
export default class DropDown extends Component {

  generateDropdownString(option) {
    let result = option.turkishText;
    if (result === "SPECIALS")
      return result;

    result = result + " ➞ ";
    if (option.representedText)
      result = result + option.representedText;
    else
      result = result + option.arabicText;

    return result;
  }

  render() {
    const top = this.props.coordinates ? this.props.coordinates.top : 108;
    const left = this.props.coordinates ? this.props.coordinates.left : 60;

    const dropDownStyles = {
      dropDownBox: {
        display: this.props.options && this.props.options.length > 0 ? 'auto' : 'none',
        backgroundColor: '#efefef',
        borderStyle: 'solid',
        borderColor: 'grey',
        borderWidth: '1px',
        position: 'absolute',
        width: '140px',
        top: top + 24,
        left: left + 10,
        color: 'black',
        paddingRight: 10,
        paddingBottom: 5,
        paddingTop: 5
      },
      orderedList: {
        margin: '4px'
      }
    }

    let dropdownOptions, k = 0;
    if (this.props.options) {
      dropdownOptions = this.props.options.map((option) =>
        <li className={'dropDown'} key={k++}>
          {this.generateDropdownString(option)}
        </li>
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
