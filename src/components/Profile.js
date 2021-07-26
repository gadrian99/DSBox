import React from 'react';
import Header from './Header';
import Identicon from 'identicon.js';


function Profile(props) {
    console.log(props.account)
    return(
        <>
          <Header page="Profile" />
          <div className="profile">
              {props.account
                ? <img
                    alt=""
                    className="profile-image"
                    width="30"
                    height="30"
                    src={`data:image/png;base64,${new Identicon(props.account, 30).toString()}`}
                  />
                : <span></span>
              }
              <a target="_blank"
                  alt=""
                  className="profile-address"
                  rel="noopener noreferrer"
                  href={"https://etherscan.io/address/" + props.account}>
                    {props.account ? props.account.substring(0,6) : '0x0'}...{props.account ? props.account.substring(24,42) : '0x0'}
              </a>
          </div>
        </>
    )
}

export default Profile