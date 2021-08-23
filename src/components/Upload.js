import React, { Component, useState } from 'react';
// import { convertBytes } from './helpers';
// import moment from 'moment'
import Header from './Header';
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
            <div className="form-group">
                <br></br>
                <input
                    id="fileDescription"
                    type="text"
                    maxLength="30"
                    ref={(input) => { fileDescription = input }}
                    className="form-control"
                    placeholder="Title..."
                    required />
            </div>
            <div className="preview">
              <input type="file" onChange={props.captureFile} className="text-white preview-button"/>
            </div>
            <button type="submit" className="form-button"><UploadIcon style={{ marginRight: '1rem', lineHeight: '2px' }} />Upload</button>
        </form>
      </div>
      </Modal>
    </div>
  );
}

export default Upload;