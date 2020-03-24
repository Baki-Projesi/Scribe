import React, { Component } from 'react';
import logo from '../assets/logo.svg';
import Transcribe from '../client/components/Transcribe';
import '../client/styles/App.css';

export default class App extends Component {

  render() {
    return (
      <div className="App">
        <Transcribe />
      </div>
    );
  }
}
