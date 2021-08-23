import React, { useState, useEffect } from 'react';
import Header from './Header'
import { convertBytes } from './helpers';
import moment from 'moment'
import ContentAlert from './ContentAlert';
import { useTrail } from 'react-spring';

import { Film, Image, Music, List, Grid, Download, Eye, Share } from 'react-feather';
import { ReactComponent as Icon } from '../formats/png-file-extension-interface-symbol.svg'

const Main = (props) => {
  const [view, setView] = useState('grid')
  const [filter, setFilter] = useState('')
  const [files, setFiles] = useState(props.files)

  // create function that renders specialicons instead of ugly images

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
      default:
        setFiles(props.files)
    }
  }

  function renderTable() {
    return(
      <div className="table-container">
        <table className="table-sm text-center" style={{ width: '100%', marginTop: '2rem' }}>
        <thead style={{ 'fontSize': '18px' }}>
          <tr className="bg-dark text-white">
            <th scope="col" style={{ width: '200px',  borderTopLeftRadius: '.5rem'}}>Name</th>
            {/* <th scope="col" style={{ width: '230px'}}>Description</th> */}
            <th scope="col" style={{ width: '120px'}}>Type</th>
            <th scope="col" style={{ width: '90px'}}>Size</th>
            <th scope="col" style={{ width: '90px'}}>Date</th>
            {/* <th scope="col" style={{ width: '120px'}}>Uploader/View</th> */}
            <th scope="col" style={{ width: '120px', borderTopRightRadius: '.5rem'}}>Actions</th>
          </tr>
        </thead>
        { files.map((file, key) => {
          return(
            <thead className="text-white" style={{ fontSize: '15px', height:'100px', width: '100%', cursor: 'pointer'  }} key={key}>
              <tr className="table-row">
                <td className="overflow" style={{ maxWidth: '200px'}}>{file.fileName}</td>
                {/* <td className="overflow" style={{ maxWidth: '230px'}}>{file.fileDescription}</td> */}
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
                <td className="overflow" style={{ maxWidth: '120px' }}>
                  {/* <a
                    href={"https://ipfs.infura.io/ipfs/" + file.fileHash}
                    rel="noopener noreferrer"
                    target="_blank">
                    {file.fileHash.substring(0,10)}...
                    <img alt="preview" style={{ height: '50px' }}src={"https://ipfs.infura.io/ipfs/" + file.fileHash} />
                  </a> */}
                  <Download />
                  <Eye style={{ margin: '0 .8rem' }}/>
                  <Share />
                </td>
              </tr>
            </thead>
            )
          })}
        </table>
      </div>
    )
  }

  function renderGrid() {
    return(
      <div className="grid-container">
        {files.map((file, key) => {
        return(
          <div className="card-container">
            <img alt="preview" style={{ height: '200px', maxWidth: '100%' }}src={"https://ipfs.infura.io/ipfs/" + file.fileHash} />
            {/* <Icon /> */}
            <div style={{ textAlign: 'center', height: '1rem'}}>
              <p className="overflow card-text">{file.fileName.substring(0,10)}...</p>
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
            <button className={view === 'list' && 'active'} onClick={() => setView('list')}><List size={30}/></button>
            <button className={view === 'grid' && 'active'} onClick={() => setView('grid')}><Grid size={30}/></button>
          </div>
          <div className="button-wrapper-right">
            <button type="button" className={filter === '' && 'active'} onClick={() =>filterFiles()}><List size={30}/></button>
            <button type="button" className={filter === 'video' && 'active'} onClick={() => filterFiles('video')}><Film size={30}/></button>
            <button type="button" className={filter === 'image' && 'active'} onClick={() => filterFiles('image')}><Image size={30}/></button>
            <button type="submit" className={filter === 'audio' && 'active'} onClick={() => filterFiles('audio')}><Music size={30}/></button>
          </div>
        </div>
        {view === 'list' ? renderTable() : renderGrid()}
      </>
    )
  }
    return(
        <>
          <Header account={props.account} files={props.files} captureFile={props.captureFile} uploadFile={props.uploadFile}/>
          {files.length < 1 ? <ContentAlert /> : renderView()}

        </>
    )
     // import files from blockchain to this component
}

export default Main