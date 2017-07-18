import React, { Component } from 'react';
import classNames from 'classnames';
import '../styles/ImageUpload.css';

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

  zoomIn() {
    var doc = (document.getElementById("uploadedImg"));
    if (doc) {
      var docWidth = doc.style.width;
      // first time clicking zoom (cannot read width for some reason)
      if (!docWidth) {
        console.log("first time")
        doc.style.width = '150%';
      } else { // after user has clicked "zoom" at least once
        var currWidth = parseFloat(docWidth);
        currWidth += 50;
        doc.style.width = currWidth + "%";
        console.log(doc.style.width);
      }
    }
  }

  zoomOut() {
    var doc = (document.getElementById("uploadedImg"));
    if (doc) {
      var docWidth = doc.style.width;
      // first time clicking zoom (cannot read width for some reason)
      if (!docWidth) {
        console.log("first time")
        doc.style.width = '50%';
      } else { // after user has clicked "zoom" at least once
        var currWidth = parseFloat(docWidth);
        currWidth -= 50;
        doc.style.width = currWidth + "%";
        console.log(doc.style.width);
      }
    }
  }

  render() {
    let {imagePreviewUrl} = this.state;
    let ximagePreview = null;
    if (imagePreviewUrl) {
      ximagePreview = (<img id = "uploadedImg" src={imagePreviewUrl} />);
    } else {
      ximagePreview = (<div className="previewText">Select an image to view</div>);
    }

    return (
      <div className="previewComponent">

        <div className="imgPreview">
          {ximagePreview}
        </div>
        <div className="zoomButtons">
            <button onClick ={this.zoomIn}> + </button>
            <button onClick ={this.zoomOut}> - </button>
        </div>

        <form onSubmit={(e)=>this._handleSubmit(e)}>
                <div className="mdl-textfield mdl-js-textfield mdl-textfield--file fileInput">
                    <input className="mdl-textfield__input" placeholder="File" value={this.state.file.name} type="text" readOnly/>
                    <div className="mdl-button mdl-button--primary mdl-button--icon mdl-button--file">
                        <i className="material-icons">attach_file</i><input type="file" onChange={(e)=>this._handleImageChange(e)} />
                    </div>
                </div>
            {/*<button className="submitButton" 
              type="submit" 
              onClick={(e)=>this._handleSubmit(e)}>Upload Image</button>*/}
        </form>
      </div>
    )
  }
}