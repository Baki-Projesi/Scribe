import React, { Component } from 'react';

export default class FilePicker extends Component {
    constructor(props, context) {
        super(props, context);
        this.handleNewInputs = this.handleNewInputs.bind(this);
    }
    // componentWillReceiveProps(nextProps) if something has been removed
    // if(nextProps.value !== this.props.value){
    //     this.setState({count:nextProps.value});
    // }

    handleNewInputs(e) {
        e.preventDefault();
        var files = e.target.files;
        var output = [];
        this.props.onNewInput(files);
        for (var i = 0; i < files.length; i++) {
            output.push('<li><strong>', escape(files[i].name), '</strong> (', files[i].type || 'n/a', ') - ',
                files[i].size, ' bytes, last modified: ',
                files[i].lastModifiedDate ? files[i].lastModifiedDate.toLocaleDateString() : 'n/a',
                        '</li>');
        }
        document.getElementById(this.props.fileNumber + "").innerHTML = '<ul>' + output.join('') + '</ul>';
    }

    render() {
    
        return (
            <div id="fileInput">
                    <label>File Selection #{this.props.fileNumber}</label><br/>
                    <input type="file"
                    id="chooseFile"
                    name="jsonFile"
                    accept="application/json, .json"
                    multiple="multiple"
                    onChange={this.handleNewInputs} />
                    <output id={this.props.fileNumber + ""}></output>
                    {/* <button name={this.state.fileNumber} onClick={this.removeFiles.bind(this)}>Remove File</button> */}

            </div>
        );
      }
}