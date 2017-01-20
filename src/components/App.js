import React, { Component } from 'react';
import logo from '../assets/logo.svg';
import '../styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React </h2>
          <p className="App-intro">
          </p>
        </div>
      </div>
    );
  }
}

export default App;
