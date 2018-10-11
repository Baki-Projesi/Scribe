import React, { Component } from 'react';
import logo from '../assets/logo.svg';
import FileConcat from '../client/components/FileConcat';
// import '../client/styles/JSONConcat.css';

export default class JSONConcat extends Component {

  render() {
    return (
      <div className="JSONConcat">
        <FileConcat />
      </div>
    );
  }
}