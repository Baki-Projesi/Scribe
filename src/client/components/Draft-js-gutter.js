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
    this.focus = () => this.refs.editor.focus();
  }

  render() {
    return (
        
      <div id = "inputcontainer" style={Object.assign(this.props.style, {
          display: 'flex'
        })}>
        <ol 
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