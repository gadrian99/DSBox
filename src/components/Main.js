import React, {useState} from 'react';
import Header from './Header'
import { convertBytes } from './helpers';
import moment from 'moment'
import ContentAlert from './ContentAlert';
import { useTrail } from 'react-spring';

import { Film, Image, Music, List, Grid } from 'react-feather';

const Main = (props) => {
  const [filterType, setFilterType] = useState(null)
  const files = (
    filterType === 'video' ? props.files.filter(file => file.fileType.substring(0,5) === "video") :
    filterType === 'image' ? props.files.filter(file => file.fileType.substring(0,5) === "image") :
    filterType === 'audio' ? props.files.filter(file => file.fileType.substring(0,5) === "audio") :
    props.files
  )

  function renderTable() {
    return(
      <table className="table-sm text-center" style={{ width: '100%', maxHeight: '450px', marginTop: '2rem'}}>
        <thead style={{ 'fontSize': '18px' }}>
          <tr className="bg-dark text-white">
            <th scope="col" style={{ width: '200px',  borderTopLeftRadius: '.5rem'}}>Name</th>
            <th scope="col" style={{ width: '230px'}}>Description</th>
            <th scope="col" style={{ width: '120px'}}>Type</th>
            <th scope="col" style={{ width: '90px'}}>Size</th>
            <th scope="col" style={{ width: '90px'}}>Date</th>
            <th scope="col" style={{ width: '120px'}}>Uploader/View</th>
            <th scope="col" style={{ width: '120px', borderTopRightRadius: '.5rem'}}>Preview</th>
          </tr>
        </thead>
        { files.map((file, key) => {
          return(
            <thead className="text-white" style={{ fontSize: '15px', height:'100px'  }} key={key}>
              <tr className="table-row">
                <td className="overflow" style={{ maxWidth: '200px'}}>{file.fileName}</td>
                <td className="overflow" style={{ maxWidth: '230px'}}>{file.fileDescription}</td>
                <td className="overflow" style={{ maxWidth: '120px'}}>{file.fileType}</td>
                <td className="overflow" style={{ maxWidth: '90px'}}>{convertBytes(file.fileSize)}</td>
                <td className="overflow" style={{ maxWidth: '90px'}}>{moment.unix(file.uploadTime).format('h:mm:ss A M/D/Y')}</td>
                <td className="overflow" style={{ maxWidth: '120px'}}>
                  <a
                    href={"https://etherscan.io/address/" + file.uploader}
                    rel="noopener noreferrer"
                    target="_blank">
                    {file.uploader.substring(0,10)}...
                  </a>
                  </td>
                <td className="overflow" style={{ maxWidth: '120px'}}>
                  <a
                    href={"https://ipfs.infura.io/ipfs/" + file.fileHash}
                    rel="noopener noreferrer"
                    target="_blank">
                    {/* {file.fileHash.substring(0,10)}... */}
                    <img alt="preview" style={{ height: '50px' }}src={"https://ipfs.infura.io/ipfs/" + file.fileHash} />
                  </a>
                </td>
              </tr>
            </thead>
            )
          })}
        </table>
    )
  }
  function renderView() {
    // const files = (
    //   filterType === 'video' ? props.files.filter(file => file.fileType.substring(0,5) === "video") :
    //   filterType === 'image' ? props.files.filter(file => file.fileType.substring(0,5) === "image") :
    //   filterType === 'audio' ? props.files.filter(file => file.fileType.substring(0,5) === "audio") :
    //   props.files
    // )
    return(
      <>
        <div className="button-wrapper">
          <div className="button-wrapper-left">
            <button><List /></button>
            <button><Grid /></button>
          </div>
          <div className="button-wrapper-right">
            <button onClick={(e) => setFilterType(e.target.value)}><List size={30}/></button>
            <button value="video" onClick={(e) => setFilterType(e.target.value)}><Film size={30}/></button>
            <button value="image" onClick={(e) => setFilterType(e.target.value)}><Image size={30}/></button>
            <button value="audio" onClick={(e) => setFilterType(e.target.value)}><Music size={30}/></button>
          </div>
        </div>
        {renderTable()}
      </>
    )
  }
    return(
        <>
        {/* {console.log(files)} */}
          {/* <button onClick={filterImages}>Images</button> */}
          <Header account={props.account} />
          {renderView()}
          {/* {files.length < 1 ? <ContentAlert /> : } */}

        </>
    )
    // import files from blockchain to this component
}

export default Main