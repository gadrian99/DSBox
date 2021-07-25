import React, { Component } from 'react';
import { convertBytes } from './helpers';
import moment from 'moment'

class Upload extends Component {

  render() {
    return (
      <div className="container-fluid mt-5 text-center">
        <form className="form-wrapper"onSubmit={(event) => {
            event.preventDefault()
            const description = this.fileDescription.value
            this.props.uploadFile(description)
            }} >
            <div className="form-group">
                <br></br>
                <input
                    id="fileDescription"
                    type="text"
                    ref={(input) => { this.fileDescription = input }}
                    className="form-control text-monospace"
                    placeholder="Title..."
                    required />
            </div>
            <input type="file" onChange={this.props.captureFile} className="text-white text-monospace"/>
            <button type="submit" className="form-button"><b>Upload</b></button>
        </form>
      </div>
    );
  }
}

export default Upload;