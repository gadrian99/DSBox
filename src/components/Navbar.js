import React, { Component } from 'react';
import Identicon from 'identicon.js';
import { Home, Folder, Film, Image, Clock, Settings } from 'react-feather';

class Navbar extends Component {

  render() {
    return (
      <div className="navigation">
        <img src="/assets/Logo.svg" style={{ height: '50px', width: 'auto'}} className="logo"></img>
          <ul className="navigation-icons">
            <li>
              <Home className="nav-icon"/>
              <p className="nav-text">Home</p>
            </li>
            <li>
              <Folder className="nav-icon"/>
              <p className="nav-text">All Files</p>
            </li>
            <li>
              <Film className="nav-icon"/>
              <p className="nav-text">Videos</p>
            </li>
            <li>
              <Image className="nav-icon"/>
              <p className="nav-text">Photos</p>
            </li>
            <li>
              <Clock className="nav-icon"/>
              <p className="nav-text">Recent</p>
            </li>
            <li>
              <Settings className="nav-icon"/>
              <p className="nav-text">Settings</p>
            </li>
          </ul>
          {/* <ul className="profile">
            <li className="profile-address">
              <small id="account">
                <a target="_blank"
                  alt=""
                  className="text-white"
                  rel="noopener noreferrer"
                  href={"https://etherscan.io/address/" + this.props.account}>
                    {this.props.account ? this.props.account.substring(0,6) : '0x0'}...{this.props.account ? this.props.account.substring(38,42) : '0x0'}
                  </a>
              </small>
              {this.props.account
                ? <img
                    alt=""
                    className="profile-image"
                    width="30"
                    height="30"
                    src={`data:image/png;base64,${new Identicon(this.props.account, 30).toString()}`}
                  />
                : <span></span>
              }
            </li>
          </ul> */}
        </div>
    );
  }
}

export default Navbar;