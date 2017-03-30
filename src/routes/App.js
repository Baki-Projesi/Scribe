import React, { Component } from 'react';
import logo from '../assets/logo.svg';
import Transcribe from '../client/components/Transcribe';
import '../client/styles/App.css';

export default class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2 id="title-nav">The Baki Project</h2>
          <p className="App-intro"></p>
        </div>
        <Transcribe />
      </div>
    );
  }
}
