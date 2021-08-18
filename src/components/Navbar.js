import React, { Component } from 'react';
import { User } from 'react-feather';

class Navbar extends Component {
  render() {
    return (
      <div className="navigation">
        <img alt="logo" src="/assets/Logo.svg" style={{ height: 'auto', width: '3.5rem'}} className="logo"></img>
        <User color="white" size={40} className="nav-icon" />
      </div>
    );
  }
}

export default Navbar;