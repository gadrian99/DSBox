import React, { Component } from 'react';
import Profile from './Profile'

class Navbar extends Component {
  render() {
    return (
      <div className="navigation">
        <img alt="logo" src="/assets/Logo.svg" className="logo"></img>
        <Profile account={this.props.account} files={this.props.files}/>
      </div>
    );
  }
}

export default Navbar;