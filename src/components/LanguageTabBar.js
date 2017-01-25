import React, { Component } from 'react';
import LanguageTab from "./LanguageTab.js";

export default class LanguageTabBar extends Component {
  constructor() {
    super();
  }
  render() {
    var buttons = [
      <LanguageTab onTabClick={this.props.changeLang} isActive= {true} language="Turkish" key="Turkish" />,
      <LanguageTab onTabClick={this.props.changeLang} isActive= {false} language="Ottoman Arabic" key="Ottoman Arabic" />,
      <LanguageTab onTabClick={this.props.changeLang} isActive= {false} language="Latin" key="Latin" />,
      <LanguageTab onTabClick={this.props.changeLang} isActive= {false} language="Other" key="other" />,
    ];
    return (
      <div>
        {buttons}
      </div>
    );
  }
}
