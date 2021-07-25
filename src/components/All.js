import React from 'react';
import { convertBytes } from './helpers';
import moment from 'moment'

const All = (props) => {
    return(
        <table className="table-sm table-bordered text-monospace text-center" style={{ width: '100%', maxHeight: '450px', marginTop: '2rem'}}>
                <thead style={{ 'fontSize': '15px' }}>
                  <tr className="bg-dark text-white">
                    <th scope="col" style={{ width: '10px'}}>id</th>
                    <th scope="col" style={{ width: '200px'}}>name</th>
                    <th scope="col" style={{ width: '230px'}}>description</th>
                    <th scope="col" style={{ width: '120px'}}>type</th>
                    <th scope="col" style={{ width: '90px'}}>size</th>
                    <th scope="col" style={{ width: '90px'}}>date</th>
                    <th scope="col" style={{ width: '120px'}}>uploader/view</th>
                    <th scope="col" style={{ width: '120px'}}>preview</th>
                  </tr>
                </thead>
                { props.files.map((file, key) => {
                  return(
                    <thead className="text-white" style={{ 'fontSize': '15px' }} key={key}>
                      <tr>
                        <td className="overflow" style={{ maxWidth: '10px'}}>{file.fileId}</td>
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
                            <img style={{ height: '50px' }}src={"https://ipfs.infura.io/ipfs/" + file.fileHash} />
                          </a>

                        </td>
                      </tr>
                    </thead>
                  )
                })}
              </table>
    )
    // import files from blockchain to this component
}

export default All