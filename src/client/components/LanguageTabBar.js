import React, { Component } from 'react';
import LanguageTab from "./LanguageTab.js";

export default class LanguageTabBar extends Component {

  render() {
    return (
      <div>
        <LanguageTab onTabClick={this.props.changeLang} language="Turkish" />
        <LanguageTab onTabClick={this.props.changeLang} language="Ottoman Arabic" />
        <LanguageTab onTabClick={this.props.changeLang} language="Latin" />
        <LanguageTab onTabClick={this.props.changeLang} language="Cyrillic" />
      </div>
    );
  }
}
