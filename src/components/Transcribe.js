import React, { Component } from 'react';
import LanguageTabBar from "./LanguageTabBar";


export default class Transcribe extends Component {
    constructor() {
      super();
      this.state = {
        language:"Turkish",
      };
    }
    changeLang(lang) {
      this.setState({language: lang});
    }
    render() {

        return (
          <LanguageTabBar changeLang={this.changeLang.bind(this)} language={this.state.language}/>
          {console.log(this.state)}
        );
    }
}
