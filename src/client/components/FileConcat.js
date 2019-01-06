import React, { PropTypes, Component } from 'react';
import FilePicker from './FilePicker';

import concat from '../utils/concat';
import '../styles/FileConcat.css';
import writeFile from '../utils/fileWriter';

export default class JSONConcat extends Component {
    constructor(props) {
        super(props);
        this.handleAdditionalInput = this.handleAdditionalInput.bind(this);
        this.state = {
            fileNumber: 1,
            inputsToDisplay: [],
            filesToConcat: [],
        }
    }

    addFile() {
        this.setState({
            fileNumber: this.state.fileNumber + 1,
            inputsToDisplay: [
                ...this.state.inputsToDisplay,
                <FilePicker
                    onNewInput={this.handleAdditionalInput}
                    fileNumber={this.state.fileNumber} />,
            ],
        });
    };

    handleAdditionalInput(files) {
        for (var i = 0; i < files.length; i++) {
            this.setUpReader(files[i]);
        }
    };

    removeFiles(e) {
        // figure out how to get rid of the last one
        e.preventDefault();
        console.log(e.target.name);
        var fileNumberLabel = e.target.name;
        
        if (this.state.inputsToDisplay.length == 1) {
            this.setState({
                fileNumber: 1,
                inputsToDisplay: [],
            }); 
        } else if (this.state.inputsToDisplay.length == 2) {
            this.setState({
                fileNumber: 1,
                inputsToDisplay: [
                    ...this.state.inputsToDisplay.splice(fileNumberLabel - 1, 1),
                ]
            });
        } else {
            this.setState({
                fileNumber: this.state.fileNumber - 1,
                inputsToDisplay: [
                    ...this.state.inputsToDisplay.slice(0, fileNumberLabel - 1),
                    ...this.state.inputsToDisplay.slice(fileNumberLabel),
                ]
            });
        }
        
        console.log(this.state.inputsToDisplay)
    }

    setUpReader(file) {
        var jsonObj;
        var that = this;
        var reader = new FileReader();
        reader.onload = function () {
            jsonObj = JSON.parse(reader.result);
            that.setState({
                filesToConcat: [
                    ...that.state.filesToConcat,
                    jsonObj,
                ]
            });
        };

        reader.readAsText(file);
    }

    concatFiles(e) {
        e.preventDefault();
 
        // console.log(this.state.filesToConcat);
        if (this.state.filesToConcat.length > 0) {
            let basefile = this.state.filesToConcat[0];
            for (var i = 1; i < this.state.filesToConcat.length; i++ ) {
                var file = this.state.filesToConcat[i];
                basefile = concat(basefile, file);
            }
            this.downloadFile(basefile);
        } else {
            // you have not selected any files
        }
    }

    downloadFile(fileToDownload) {

        let fileName = prompt("Please enter the name of this file.");
        if (fileName) {
            writeFile(fileName, '.json', JSON.stringify(fileToDownload))
        }
    };

    render() {
        const { className, ...props } = this.props;

        return (
            <div>
                <h1>Combine Transcriptions</h1>
                <h3>Instructions</h3>
                <h5>Choose files in the order you would like to combine them</h5>
                <form>
                    {this.state.inputsToDisplay}
                </form>
                <button id="addFilePicker" onClick={this.addFile.bind(this)}>Add File(s)</button>
                <br />
                <input id="addFilePicker" onClick={this.concatFiles.bind(this)} type="submit" value="Combine files"/>
            </div>
        );
    }
}