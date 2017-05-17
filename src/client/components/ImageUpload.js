import React, { Component } from 'react';
import classNames from 'classnames';
import '../styles/ImageUpload.css';
import { Button, Card, CardText } from 'react-mdl';

 

export default class ImageUpload extends React.Component {
  constructor(props) {
    super(props);
    this.state = {file: '',imagePreviewUrl: ''};
  }

  _handleSubmit(e) {
    e.preventDefault();
    // TODO: do something with -> this.state.file
    console.log('handle uploading-', this.state.file);
  }

  _handleImageChange(e) {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result
      });
    }

    reader.readAsDataURL(file)
  }

  render() {
    let {imagePreviewUrl} = this.state;
    let ximagePreview = null;
    if (imagePreviewUrl) {
      ximagePreview = (<img src={imagePreviewUrl} />);
    } else {
      ximagePreview = (<div className="previewText">Select an image to view</div>);
    }

    return (
      <div className="previewComponent">
        <form onSubmit={(e)=>this._handleSubmit(e)}>

            {/*<div classNmae="mdl-textfield mdl-js-textfield mdl-textfield--file">
                <input className="mdl-textfield__input" placeholder="File" type="text" id="uploadFile" readonly/>
                <div className="mdl-button mdl-button--primary mdl-button--icon mdl-button--file" >
                    <i className="material-icons"></i><input type="file" id="uploadBtn"/> 
                </div>
            </div>*/}

            {/*<div class="mdl-file mdl-js-file mdl-file--floating-label">
                <input type="file" name="avatar" id="avatar" />
                <label class="mdl-file__label" for="avatar">Avatar</label>
            </div>*/}

            <input className="fileInput"
              type="file" 
              onChange={(e)=>this._handleImageChange(e)} />
            {/*<button className="submitButton" 
              type="submit" 
              onClick={(e)=>this._handleSubmit(e)}>Upload Image</button>*/}
        </form>


        {/*<Button raised ripple>Button</Button>*/}


        <div className="imgPreview">
          {ximagePreview}
        </div>
      </div>
    )
  }
}