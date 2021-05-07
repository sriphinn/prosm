import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';
import Logo from '../../images/prosm_logo_black.png';

class Nav extends Component {
  render() {
    return (
      <nav className='navbar'>
        <Link to='/'>
          <img className="logo-image" src={Logo} alt="PROSM" />
        </Link>
        <ul className="hamburger">
          <li className="line"></li>
          <li className="line"></li>
          <li className="line"></li>
        </ul>
        <ul className='nav'>
          <Link to='/signup'>
            <li className='nav-item'>Sign Up</li>
          </Link>
          <Link to='/login'>
            <li className='nav-item'>Login</li>
          </Link>
        </ul>
      </nav>
    )
  }
}

export default Nav;