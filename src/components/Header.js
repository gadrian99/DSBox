import React from 'react';
import Identicon from 'identicon.js';
import SearchBar from './SearchBar';
import Profile from './Profile';
import { Bell } from 'react-feather'

function Header(props) {
    return(
        <div className="header">
            <SearchBar />
            <div className="header-tools">
                {/* <a target="_blank"
                  alt=""
                  style={{ fontFamily: 'Oleo Script'}}
                  className="header-address"
                  rel="noopener noreferrer"
                  href={"https://etherscan.io/address/" + props.account}>
                    {props.account ? props.account.substring(0,10) : '0x0'}...{props.account ? props.account.substring(35,42) : '0x0'}
                </a> */}
                <Bell size={30} style={{ marginRight: '1rem'}}/>
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
    )
}

export default Header