import React, { Component, PropTypes } from 'react';
import {Editor, EditorState} from 'draft-js';
import '../styles/Draft-js-gutter.css';


export class EditorGutter extends Component {
  static defaultProps = {
    style: {},
    styleEditor: {},
    styleList: {},
    styleListItem: {}
  }

  constructor(props) {
    super(props);
    this.state = {editorState: this.props.editorState || EditorState.createEmpty()};

    var s1 = document.getElementById('scrolling1');
    var s2 = document.getElementById('scrolling2');
  }

    select_scroll_1(e) { this.s2.scrollTop = this.s1.scrollTop; }
    select_scroll_2(e) { this.s1.scrollTop = this.s2.scrollTop; }

  render() {
    if(this.s1 != null && this.s2 !=null) {
        this.s1.addEventListener('scroll', this.select_scroll_1, false);
        this.s2.addEventListener('scroll', this.select_scroll_2, false);
        console.log("event listners added")
    }

    return (
        
      <div id = "inputcontainer" style={Object.assign(this.props.style, {
          display: 'flex'
        })}>
        <ol 
            id="scrolling1"
            {...this.props.list}
            style={Object.assign(this.props.styleList, {
            margin: 0,
            padding: 0
          })}>
          {[...Array(this.props.editorState.getCurrentContent().getBlockMap().size)].map((x, i) =>
            <li key={i}
              {...this.props.listItem}
              style={Object.assign(this.props.styleListItem, {
                listStylePosition: 'inside'
              })} />
          )}
        </ol>
        <div 
            id="scrolling2"
            style={{flex:1}} >
          <Editor {...this.props.editor}
            style={this.props.styleEditor}
            editorState={this.props.editorState}
            onChange={this.props.onChange}
            handleKeyCommand={this.props.handleKeyCommand}
            keyBindingFn={this.props.keyBindingFn}
            ref="editor" 
            />
        </div>
      </div>
    );
  }
}