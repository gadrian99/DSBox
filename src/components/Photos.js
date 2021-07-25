import React from 'react';
import { convertBytes } from './helpers';
import moment from 'moment'

const Photos = (props) => {
    const filteredFiles = props.files.filter(file => file.fileType.substring(0,5) === "image")

    return(
        <table className="table-sm text-center" style={{ width: '100%', maxHeight: '450px', marginTop: '2rem'}}>
                <thead style={{ 'fontSize': '18px' }}>
                  <tr className="bg-dark text-white">
                    {/* <th scope="col" style={{ width: '10px'}}>ID</th> */}
                    <th scope="col" style={{ width: '200px'}}>Name</th>
                    <th scope="col" style={{ width: '230px'}}>Description</th>
                    <th scope="col" style={{ width: '120px'}}>Type</th>
                    <th scope="col" style={{ width: '90px'}}>Size</th>
                    <th scope="col" style={{ width: '90px'}}>Date</th>
                    <th scope="col" style={{ width: '120px'}}>Uploader/View</th>
                    <th scope="col" style={{ width: '120px'}}>Preview</th>
                  </tr>
                </thead>
                { filteredFiles.map((file, key) => {
                  return(
                    <thead className="text-white" style={{ 'fontSize': '15px' }} key={key}>
                      <tr className="table-row">
                        {/* <td className="overflow" style={{ maxWidth: '10px'}}>{file.fileId}</td> */}
                        <td className="overflow" style={{ maxWidth: '200px', borderTopLeftRadius: '.2rem'}}>{file.fileName}</td>
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
                            <img style={{ height: '50px' }}src={"https://ipfs.infura.io/ipfs/" + file.fileHash} />
                          </a>

                        </td>
                      </tr>
                    </thead>
                  )
                })}
              </table>
    )
}

export default Photos