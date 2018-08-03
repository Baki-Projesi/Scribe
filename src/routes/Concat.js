import React, { PropTypes, Component, Fragment } from 'react';
import FileSaver from 'file-saver';
import concat from '../client/utils/concat';

export default class Concat extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            baseJson: undefined,
            nextJson: undefined,
            fileCount: 0,
            additionalFilePanels: []
        }
    }

    componentDidMount() {
        this.addFilePanel();
    }

    addFilePanel() {
        let panels = this.state.additionalFilePanels;
        let count = this.state.fileCount + 1;
        panels.push({ count: count });
        this.setState({
            fileCount: count,
            additionalFilePanels: panels
        });
    }

    getResultFile() {
        let fr = undefined;
        let baseJsonObj = {};

        // get base Json file
        let baseFileInput = document.getElementById("basefileInput");
        const baseFile = baseFileInput.files;
        if (baseFile.length > 0) {
            fr = new FileReader();
            fr.onload = function(e) {
                baseJsonObj = JSON.parse(e.target.result);
            }.bind(this);
            fr.readAsText(baseFile.item(0))
        }
        
        // concatenate other json files
        //TODO ensure order
        let fileInputs = document.getElementsByClassName("additionalFileInput");
        for (let i = 0; i < fileInputs.length; i++) {
            let input = fileInputs[i];
            let files = input.files;
            if (files.length > 0) {
                fr = new FileReader();
                fr.onload = function(e) {
                    let nextJson = JSON.parse(e.target.result);
                    if (nextJson) {
                        let newBase = concat(baseJsonObj, nextJson);
                        this.setState({
                            baseJson: newBase
                        })
                    }
                }.bind(this);
                fr.readAsText(files.item(0))
            }
        }
        this.doFileSave(this.state.baseJson);
    }

    doFileSave(json) {
        let fileName = prompt("Please enter the name of this file.");

        if (fileName) {
            fileName = fileName.replace(/[|&;$%@"<>()+,.]/g, "");
            fileName += ".json";
            let file = new File([JSON.stringify(json)],
                fileName,
                { type: "text/plain;charset=utf-8" });

            FileSaver.saveAs(file);
        }
    }

    render() {
        const { className, ...props } = this.props;
        return (
            <div>
                <h3>This is the manuscript concatenation tool.</h3>
                <div className="file-panel base-file">
                    <h4>Base file</h4>
                    <input type="file" id="basefileInput"></input>
                </div>
                <div>
                    <h4>Files to concatenate</h4>
                </div>
                {this.state.additionalFilePanels.map(panel =>
                    <div className="file-panel" key={panel.count}>{panel.count}
                        <input type="file" className="additionalFileInput"></input>
                    </div>
                )}
                <button onClick={this.addFilePanel.bind(this)}>Add file +</button>
                <div>
                    <button onClick={this.getResultFile.bind(this)}>Get Combined File</button>
                </div>
            </div>
        );
    }
}