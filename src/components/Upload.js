import React, { useState } from 'react';
// import { convertBytes } from './helpers';
// import moment from 'moment'
import { CheckCircle, Upload as UploadIcon } from 'react-feather'

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
    height: '70vh',
    width: '40rem',
    borderRadius: '40px',
  },
  overlay: {
    backgroundColor: '#27262cc2'
  }
}
// Modal.setAppElement('#root');

function Upload(props) {
  let fileDescription;
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.

  }

  function closeModal() {
    setIsOpen(false);
  }

  function firstStep() {
    return(
      <>
        <h3 style={{ color: 'white', paddingBottom: '1rem'}}>Upload File</h3>
        <div  className="preview" style={{ height: '100%', swidth: '350px'}}>
          <input type="file" onChange={props.captureFile} className="text-white preview-button"/>
        </div>
        <button className="form-button mt-4" onClick={(e) => {
          e.preventDefault()
          props.setStep('2')
        }}>Next</button>
      </>
    )
  }

  function secondStep() {
    return(
      <div className="container-fluid mt-4 text-center">
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
              disabled
              placeholder={props.fileName}
              className="form-control mb-3"
              required />
            <small>Description <p>(130 max characters)</p></small>
            <textarea
              id="fileDescription"
              ref={(input) => { fileDescription = input }}
              style={{ height: '145px', minHeight: '145px', maxHeight: '145px' }}
              type="text"
              maxLength="130"
              className="form-control"
              placeholder="Description"
              required />
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-evenly', marginTop: '2rem', width: '100%' }}>
          <button className="form-button" onClick={(e) => {
            e.preventDefault()
            props.setStep('1')
          }}>Previous</button>
          <button type="submit" className="form-button">Upload</button>
          {/* <button className="form-button" onClick={(e) => {
          e.preventDefault()
          props.setStep('3')
          }}>Confirm</button> */}
        </div>

      </div>
    )
  }

  function thirdStep() {
    return(
      <div className="confirmation-screen">
        <div className="loader-wrapper" style={{ height: '25vh' }}><div id="loader" className="loader"></div></div>
        <h4>File is being uploaded...</h4>
        <p>Transactions may take longer due to high transaction volumes</p>
        <p>You can view your transaction on Etherscan here</p>
      </div>
    )
  }

  function fourthStep() {
    return(
      <div className="confirmation-screen">
        <CheckCircle color='#ad6bff' size={150} className="mb-5"/>
        <h4>File uploaded successfully</h4>
        <p>You can view your transaction on Etherscan here </p>
        <div style={{ display: 'flex', justifyContent: 'space-evenly', marginTop: '2rem', width: '100%' }}>
          <button className="form-button" onClick={(e) => {
          e.preventDefault()
          setIsOpen(false)
          window.location.reload()
          props.setStep('1')
          }}>Confirm</button>
        </div>
      </div>
    )
  }

  function renderView() {
    switch(props.currentStep) {
      case '1':
        return firstStep()
        break;
      case '2':
        return secondStep()
        break;
      case '3':
        return thirdStep()
        break;
      case '4':
        return fourthStep()
    }
  }

  return (
    <div>
      <button className="add-button" onClick={openModal}><UploadIcon size={30} /></button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Upload"
      >
        <form className="form-wrapper" onSubmit={(event) => {
            event.preventDefault()
            const description = fileDescription.value
            props.uploadFile(description)
            props.setStep('3')
            }} >
            {renderView()}
        </form>
      </Modal>
    </div>
  );
}

export default Upload;