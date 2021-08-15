import React, { Component } from 'react';
import { Folder, Film, Image, CornerRightUp, Settings } from 'react-feather';
import {
  Link
} from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <div className="navigation">
        <img alt="logo" src="/assets/Logo.svg" style={{ height: 'auto', width: '3.5rem'}} className="logo"></img>
        <Settings color="white" size={40} className="nav-icon" />
      </div>
    );
  }
}

export default Navbar;