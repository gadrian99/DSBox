import React, { Component, useState } from 'react';
// import { convertBytes } from './helpers';
// import moment from 'moment'
import { Upload as UploadIcon, Plus } from 'react-feather'

import Modal from 'react-modal'

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    background: '#1a1a1a',
    border: 'none',
    borderRadius: '40px',
    padding: '50px 100px'
  },
  overlay: {
    backgroundColor: '#27262cc2'
  }
}
// Modal.setAppElement('#root');

function Upload(props) {
  let fileDescription;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.

  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <button className="add-button" onClick={openModal}><Plus size={40} /></button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Upload"
      >
        <div className="container-fluid mt-4 text-center">
        <form className="form-wrapper"onSubmit={(event) => {
            event.preventDefault()
            const description = fileDescription.value
            props.uploadFile(description)
            }} >
            <h3 style={{ color: 'white'}}>Upload File</h3>
            <div className="form-group">
                <div className="form-control-wrapper" >
                  <div style={{ textAlign: 'start', width: '350px', color: 'white'}}>
                    <small>Authorization Hash</small>
                    <input
                      type="text"
                      className="form-control mb-3"
                      placeholder={props.account}
                      disabled
                      required/>
                    <small>Name</small>
                    <input
                      type="text"
                      maxLength="30"
                      placeholder={props.fileName ? props.fileName : 'No file chosen'}
                      disabled
                      className="form-control mb-3"
                      required />
                    <small>Description <p>(130 max characters)</p></small>
                    <textarea
                      id="fileDescription"
                      ref={(input) => { fileDescription = input }}
                      style={{ maxHeight: '175px', minHeight: '45px'}}
                      type="text"
                      maxLength="130"
                      className="form-control"
                      placeholder="Description"
                      required />
                  </div>

                  <div  className="preview" style={{ width: '350px'}}>
                    <input type="file" onChange={props.captureFile} className="text-white preview-button"/>
                  </div>
                </div>
            </div>
            <button type="submit" className="form-button"><UploadIcon style={{ marginRight: '1rem', lineHeight: '2px' }} />Upload</button>
        </form>
      </div>
      </Modal>
    </div>
  );
}

export default Upload;