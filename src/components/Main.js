import React, { useState, useEffect } from 'react';
import { convertBytes } from './helpers';
import moment from 'moment'
import ContentAlert from './ContentAlert';
import { useTrail } from 'react-spring';
import Modal from 'react-modal'
import Upload from './Upload';
import Profile from './Profile';
import { Bell } from 'react-feather'
import { Search } from 'react-feather'


import { Film, Image, Music, List, Grid, Download, Eye, ExternalLink } from 'react-feather';
import { ReactComponent as Picture } from '../formats/png-file-extension-interface-symbol.svg'
import { ReactComponent as GridFilm } from '../formats/mp4-file-format-symbol.svg'
import { ReactComponent as GridMusic } from '../formats/mp3-file-format-variant.svg'
import { ReactComponent as GridDocument } from '../formats/7z-file-format-variant.svg'

Modal.setAppElement('#root');

const Main = (props) => {
  const [view, setView] = useState('list')
  const [filter, setFilter] = useState('')
  const [files, setFiles] = useState(props.files)
  const [searchField, setSearchField] = useState("")
  const [modalIsOpen, setIsOpen] = useState(false)
  const [currentFile, setCurrentFile] = useState({})


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

  function filterFiles(e) {
    switch(e) {
      case "video":
        setFiles(props.files.filter(file => file.fileType.substring(0,5) === "video"))
        setFilter("video")
        break
      case "image":
        setFiles(props.files.filter(file => file.fileType.substring(0,5) === "image"))
        setFilter("image")
        break
      case "audio":
        setFiles(props.files.filter(file => file.fileType.substring(0,5) === "audio"))
        setFilter("audio")
        break
      case '':
        setFiles(props.files)
        setFilter("")
        break
      default:
        setFiles(props.files)
    }
  }

  const filteredFiles = files.filter(
    file => {
    return (
        file
        .fileName
        .toLowerCase()
        .includes(searchField.toLowerCase()) ||
        file
        .fileDescription
        .toLowerCase()
        .includes(searchField.toLowerCase())
    );
    }
  );

  function handleChange(e) {
    setSearchField(e.target.value)
  }

  function openModal(file) {
    setCurrentFile(file)
    setIsOpen(true)
  }

  function afterOpenModal() {


  }

  function closeModal() {
    setIsOpen(false);
    setCurrentFile({})
  }

  function renderError() {
    return(
      <div>
        <Picture />
      </div>
    )
  }

  function renderTable() {
    return(
      <div className="table-container">
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Single File View"
        >
          <div className="table-modal">
            <h4>{currentFile.fileName}</h4>
            {modalIsOpen && console.log("https://ipfs.infura.io/ipfs/" + currentFile.fileHash)}
            {modalIsOpen && currentFile.fileType.split('/', 1) == "image" ? <img style={{ maxHeight: '20rem', width: 'auto'}} src={"https://ipfs.infura.io/ipfs/" + currentFile.fileHash} /> : <Picture />}
          </div>
        </Modal>
        <table className="table-sm text-center" style={{ width: '85vw', marginTop: '2rem' }}>
        <thead style={{ 'fontSize': '18px' }}>
          <tr className="bg-dark text-white">
            <th scope="col" style={{ width: '200px',  borderTopLeftRadius: '.5rem'}}>Name</th>
            <th scope="col" style={{ width: '230px'}}>Description</th>
            <th scope="col" style={{ width: '120px'}}>Type</th>
            <th scope="col" style={{ width: '90px'}}>Size</th>
            <th scope="col" style={{ width: '90px'}}>Date</th>
            {/* <th scope="col" style={{ width: '120px'}}>Uploader/View</th> */}
            {/* <th scope="col" style={{ width: '120px', borderTopRightRadius: '.5rem'}}>Actions</th> */}
          </tr>
        </thead>
        { filteredFiles.map((file, key) => {
          return(
            <thead className="text-white" style={{ fontSize: '15px', width: '100%', cursor: 'pointer', height: '75px' }} onClick={() => openModal(file)} key={key}>
              <tr className="table-row">
                <td className="overflow" style={{ maxWidth: '200px'}}>{file.fileName}</td>
                <td className="overflow" style={{ maxWidth: '230px'}}>{file.fileDescription}</td>
                <td className="overflow" style={{ maxWidth: '120px'}}>{file.fileType}</td>
                <td className="overflow" style={{ maxWidth: '90px'}}>{convertBytes(file.fileSize)}</td>
                <td className="overflow" style={{ maxWidth: '90px'}}>{moment.unix(file.uploadTime).format('h:mm:ss A M/D/Y')}</td>
                {/* <td className="overflow" style={{ maxWidth: '120px'}}>
                  <a
                    href={"https://etherscan.io/address/" + file.uploader}
                    rel="noopener noreferrer"
                    target="_blank">
                    {file.uploader.substring(0,10)}...
                  </a>
                  </td> */}
                {/* <td className="overflow" style={{ maxWidth: '120px' }}>
                  <a
                    href={"https://ipfs.infura.io/ipfs/" + file.fileHash}
                    rel="noopener noreferrer"
                    target="_blank">
                    {file.fileHash.substring(0,10)}...
                    <img alt="preview" style={{ height: '50px' }}src={"https://ipfs.infura.io/ipfs/" + file.fileHash} />
                  </a>
                  <Download />
                  <Eye style={{ margin: '0 1rem' }}/>
                  <ExternalLink />
                </td> */}
              </tr>
            </thead>
            )
          })}
        </table>
      </div>
    )
  }

  function renderGrid() {

    function renderImage(fileType) {
      switch(fileType) {
        case 'video':
          return <GridFilm style={{alignSelf: 'center'}}/>
          break
        case 'audio':
          return <GridMusic style={{alignSelf: 'center'}}/>
          break
        default:
          return <GridDocument style={{alignSelf: 'center'}} />
      }
    }

    return(
      <div className="grid-container">
        { filteredFiles.map((file, key) => {
        return(
          <div className="card-container" key={key}>
            { file.fileType.split('/', 1)[0] === "image"
              ? <img alt="preview" style={{ height: '200px', width: '200px', borderRadius: '1rem'}} src={"https://ipfs.infura.io/ipfs/" + file.fileHash} />
              : <div style={{ height: '200px', width: '200px', display: 'flex', justifyContent:'center', alignContent: 'center' }}>
                  {renderImage(file.fileType.split('/', 1)[0])}
                </div>
            }
            <div style={{ textAlign: 'center', height: '25%', display: 'flex', alignItems: 'center'}}>
              <p className="overflow card-text">{file.fileName.substring(0,20)}...</p>
            </div>
          </div>
        )
        })}
      </div>
    )
  }

  function renderView() {
    return(
      <>
        <div className="button-wrapper">
          <div className="button-wrapper-left">
            <button className={view === 'list' && 'active'} onClick={() => setView('list')}><List size={30} strokeWidth={1}/></button>
            <button className={view === 'grid' && 'active'} onClick={() => setView('grid')}><Grid size={30} strokeWidth={1}/></button>
          </div>
          <div className="button-wrapper-right">
            <button type="button" className={filter === '' && 'active'} onClick={() =>filterFiles('')}><List size={30} strokeWidth={1}/></button>
            <button type="button" className={filter === 'video' && 'active'} onClick={() => filterFiles('video')}><Film size={30} strokeWidth={1}/></button>
            <button type="button" className={filter === 'image' && 'active'} onClick={() => filterFiles('image')}><Image size={30} strokeWidth={1}/></button>
            <button type="submit" className={filter === 'audio' && 'active'} onClick={() => filterFiles('audio')}><Music size={30} strokeWidth={1}/></button>
          </div>
        </div>
        {view === 'list' ? renderTable() : renderGrid()}
      </>
    )
  }

  return(
      <>
        {/* <Header searchFiles={searchFiles} account={props.account} files={props.files} captureFile={props.captureFile} uploadFile={props.uploadFile}/> */}
        <div className="header">
          <img alt="logo" src="/assets/Logo.svg" className="logo"></img>
            <div style={{ width: '100%' }} className="search-bar">
              <Search className="search-icon" />
              <input className="search-input" placeholder="Search..." onChange={handleChange}/>
            </div>
            <div className="header-tools">
                {/* <a target="_blank"
                  alt=""
                  style={{ fontFamily: 'Oleo Script'}}
                  className="header-address"
                  rel="noopener noreferrer"
                  href={"https://etherscan.io/address/" + props.account}>
                    {props.account ? props.account.substring(0,10) : '0x0'}...{props.account ? props.account.substring(35,42) : '0x0'}
                </a> */}
                <Upload account={props.account} captureFile={props.captureFile} uploadFile={props.uploadFile} fileName={props.fileName} />
                {/* <Bell size={30} style={{ marginRight: '1rem'}} strokeWidth={1}/> */}
                {/* {props.account
                ? <img
                    alt=""
                    className="header-image"
                    width="30"
                    height="30"
                    src={`data:image/png;base64,${new Identicon(props.account, 30).toString()}`}
                  />
                : <span></span>
                } */}
                <Profile account={props.account} files={props.files} />
            </div>
        </div>
        {console.log(currentFile)}
        {filteredFiles.length < 1 ? <ContentAlert message={"Please check your account"}/> : renderView()}
        </>
  )
     // import files from blockchain to this component
}

export default Main