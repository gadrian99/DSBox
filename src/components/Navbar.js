import React, { Component } from 'react';
import { Home, Folder, Film, Image, User , CornerRightUp } from 'react-feather';
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
            {/* <Link to="/">
              <li className={this.props.page === "home" ? "active" : " "} onClick={(e) => this.props.setPage("home")} >
                <Home className="nav-icon"/>
                <p className="nav-text">Home</p>
              </li>
            </Link> */}
            <Link to="/">
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
            <Link to="/upload">
              <li className={this.props.page === "upload" ? "active" : " "} onClick={(e) => this.props.setPage("upload")}>
                <CornerRightUp className="nav-icon"/>
                <p className="nav-text">Upload</p>
              </li>
            </Link>
          </ul>
        </div>
    );
  }
}

export default Navbar;