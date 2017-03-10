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

    return (
      <div style={styles.dropDownBox}>
        test DropDown!
      </div>
    );
  }
}
