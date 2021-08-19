import React, { Component } from 'react';
import Profile from './Profile'

class Navbar extends Component {
  render() {
    return (
      <div className="navigation">
        <img alt="logo" src="/assets/Logo.svg" style={{ height: 'auto', width: '3.5rem'}} className="logo"></img>
        <Profile account={this.props.account} />
      </div>
    );
  }
}

export default Navbar;