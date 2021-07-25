import React, { Component } from 'react';
import { convertBytes } from './helpers';
import moment from 'moment'

class Upload extends Component {

  render() {
    return (
      <div className="container-fluid mt-4 text-center">
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
                    maxLength="30"
                    ref={(input) => { this.fileDescription = input }}
                    className="form-control"
                    placeholder="Title..."
                    required />
            </div>
            <div className="preview">
              <input type="file" onChange={this.props.captureFile} className="text-white preview-button"/>
            </div>
            <button type="submit" className="form-button"><b>Upload</b></button>
        </form>
      </div>
    );
  }
}

export default Upload;