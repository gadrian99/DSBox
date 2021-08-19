import React from 'react'
import Identicon from 'identicon.js';
import Modal from 'react-modal'
import { User } from 'react-feather';

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
    backgroundColor: '#27262ce9'
  }
}
Modal.setAppElement('#root');

function Profile(props) {
    const [modalIsOpen, setIsOpen] = React.useState(true);

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
            <button className="profile-button" onClick={openModal}><User color="white" size={40} /></button>
            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Upload"
            >
                <div className="profile">
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', paddingBottom: '2rem', borderBottom: '1px solid white' }}>
                        <div>
                            {props.account
                                ? <img
                                    alt=""
                                    className="profile-image"
                                    width="20"
                                    height="20"
                                    src={`data:image/png;base64,${new Identicon(props.account, 30).toString()}`}
                                />
                                : <span></span>
                            }
                            <a target="_blank"
                            alt=""
                            style={{ fontFamily: 'Oleo Script'}}
                            className="profile-address"
                            rel="noopener noreferrer"
                            href={"https://etherscan.io/address/" + props.account}>
                                {props.account ? props.account.substring(0,10) : '0x0'}...{props.account ? props.account.substring(35,42) : '0x0'}
                            </a>
                        </div>
                        <div>
                            <button>Toggler</button>
                        </div>
                    </div>
                    <div className="file-container">
                        <div className="file-container-left"></div>
                        <div className="file-container-right"></div>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-around', width: '100%', padding: '1rem 0', borderBottom: '1px solid white' }}>
                        <p>Total Files:</p>
                        <p>Used Space:</p>
                    </div>
                    <img src="/assets/Colored-black.svg" style={{ height: '2rem', marginTop: '1rem' }}/>
                </div>
            </Modal>
        </div>
    )
}

export default Profile
