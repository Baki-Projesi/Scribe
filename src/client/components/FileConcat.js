import React, { PropTypes, Component } from 'react';
import FileSaver from 'file-saver';
import concat from '../utils/concat';
import '../styles/FileConcat.css';

export default class JSONConcat extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fileNumber: 1,
            inputsToDisplay: [],
                // <div id="fileInput">
                //     <label>File #{initialFileNumber}</label><br/>
                //     <input type="file"
                //     id="chooseFile"
                //     name="jsonFile"
                //     accept="application/json, .json"
                //     onChange={this.addFilesToConcat.bind(this)} />
                //     <button name={initialFileNumber} onClick={this.removeFiles.bind(this)}>Remove File</button>
                // </div>
            // ],
            filesToConcat: [],

        }
    }

    addFile() {
        this.setState({
            fileNumber: this.state.fileNumber + 1,
            inputsToDisplay: [
                ...this.state.inputsToDisplay,
                <div id="fileInput">
                    <label>File #{this.state.fileNumber}</label><br/>
                    <input type="file"
                    id="chooseFile"
                    name="jsonFile"
                    accept="application/json, .json"
                    onChange={this.addFilesToConcat.bind(this)} />
                    <button name={this.state.fileNumber} onClick={this.removeFiles.bind(this)}>Remove File</button>
                </div>,
            ],
        });
    };

    removeFiles(e) {
        // figure out how to get rid of the last one
        e.preventDefault();
        console.log(e.target.name);
        var fileNumberLabel = e.target.name;
        
        if (this.state.inputsToDisplay.length == 1) {
            this.setState({
                fileNumber: 0,
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

    addFilesToConcat(e) {
        // add checks for less than two
        e.preventDefault();
        var jsonObj;
        var reader = new FileReader();
        reader.onload = function () {
            jsonObj = JSON.parse(reader.result);
            this.setState({
                filesToConcat: [
                    ...this.state.filesToConcat,
                    jsonObj,
                ]
            });
        }.bind(this);
        reader.readAsText(e.target.files[0]);
    };

    concatFiles(e) {
        e.preventDefault();
 
        // console.log(this.state.filesToConcat);
        if (this.state.filesToConcat.length > 0) {
            var basefile = this.state.filesToConcat[0];
            for (var i = 1; i < this.state.filesToConcat.length; i++ ) {
                var file = this.state.filesToConcat[i];
                basefile = concat(basefile, file);
                console.log(basefile);
            }
            this.downloadFile(basefile);
        } else {
            // you have not selected any files
        }
    }

    downloadFile(fileToDownload) {

        let fileName = prompt("Please enter the name of this file.");
        if (fileName) {
            fileName = fileName.replace(/[|&;$%@"<>()+,.]/g, "");
            fileName += ".json";
            let file = new File([JSON.stringify(fileToDownload)],
                fileName,
                { type: "text/plain;charset=utf-8" });

            FileSaver.saveAs(file);
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
                <button id="addFilePicker" onClick={this.addFile.bind(this)}>Add File</button>
                <br />
                <input id="addFilePicker" onClick={this.concatFiles.bind(this)} type="submit" value="Combine files"/>
            </div>
        );
    }
}