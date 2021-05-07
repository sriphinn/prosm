import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import './UserNav.css';
import AppContext from '../../AppContext'
import Logo from '../../images/prosm_logo_black.png'

class UserNav extends Component {
  static contextType = AppContext;

  handleClickLogout = () => {
    this.context.setStatus(null)
    localStorage.clear()
  }

  render() {
    return (
      <nav className='navbar'>
        <Link to='/'>
          <img src={Logo} alt="PROSM logo" />
        </Link>
        <ul className="hamburger">
          <li className="line"></li>
          <li className="line"></li>
          <li className="line"></li>
        </ul>
        <ul className='nav'>
          <Link to='/dailyprompt'>
            <li className='nav-item'>Daily Prompt</li>
          </Link>
          <Link to='/collection'>
            <li className='nav-item'>Collection</li>
          </Link>
          <Link to='/'>
            <li onClick={this.handleClickLogout} className='nav-item'>Log Out</li>
          </Link>
        </ul>
      </nav>
    )
  }
}

export default withRouter(UserNav);