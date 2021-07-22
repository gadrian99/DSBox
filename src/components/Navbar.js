import React, { Component } from 'react';
import Identicon from 'identicon.js';
import { Home, Folder, Film, Image, Clock, Settings } from 'react-feather';
import {
  Link
} from "react-router-dom";

class Navbar extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    console.log(this.props.page)
    return (
      <div className="navigation">
        <img src="/assets/Logo.svg" style={{ height: '50px', width: 'auto'}} className="logo"></img>
          <ul className="navigation-icons">
            <Link to="/">
              <li className={this.props.page === "home" ? "active" : " "} onClick={(e) => this.props.setPage("home")} >
                <Home className="nav-icon"/>
                <p className="nav-text">Home</p>
              </li>
            </Link>
            <Link to="/all">
              <li className={this.props.page === "all" ? "active" : " "} onClick={(e) => this.props.setPage("all")}>
                <Folder className="nav-icon"/>
                <p className="nav-text">All Files</p>
              </li>
            </Link>
            <Link to="/videos">
              <li className={this.props.page === "videos" ? "active" : " "} onClick={(e) => this.props.setPage("videos")}>
                <Film className="nav-icon"/>
                <p className="nav-text">Videos</p>
              </li>
            </Link>
            <Link to="/photos">
              <li className={this.props.page === "photos" ? "active" : " "} onClick={(e) => this.props.setPage("photos")}>
                <Image className="nav-icon"/>
                <p className="nav-text">Photos</p>
              </li>
            </Link>
            <Link to="/recent">
              <li className={this.props.page === "recent" ? "active" : " "} onClick={(e) => this.props.setPage("recent")}>
                <Clock className="nav-icon"/>
                <p className="nav-text">Recent</p>
              </li>
            </Link>
            <Link to="/settings">
              <li className={this.props.page === "settings" ? "active" : " "} onClick={(e) => this.props.setPage("settings")}>
                <Settings className="nav-icon"/>
                <p className="nav-text">Settings</p>
              </li>
            </Link>



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