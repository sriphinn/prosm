import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

class Nav extends Component {
  render() {
    return (
      <nav>
        <Link to='/'>
          <h3>Prosm Logo</h3>
        </Link>
        <ul className='nav-links'>
          <Link to='/signup'>
            <li>Sign Up</li>
          </Link>
          <Link to='/login'>
            <li>Login</li>
          </Link>
        </ul>
      </nav>
    )
  }
}

export default Nav;