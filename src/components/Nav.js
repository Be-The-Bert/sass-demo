import React, { Component } from 'react';

import './Nav.css';

export default class Nav extends Component {
  render() {
    return (
      <div id='Nav'>
        <div className='nav_logo'></div>
        <div className='nav_menu'>
          <div className='nav_link'>Home</div>
          <div className='nav_link'>About</div>
          <div className='nav_link'>Store</div>
          <div className='nav_link'>Contact</div>
        </div>
      </div>
    );
  }
}