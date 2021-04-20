import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import './UserNav.css';
import AppContext from '../../AppContext'

class UserNav extends Component {
  static contextType = AppContext;

  handleClickLogout = () => {
    this.context.setStatus(null)
    localStorage.clear()
    this.props.history.push('/')
  }

  render() {
    return (
      <nav>
        <Link to='/'>
          <h3>Prosm Logo</h3>
        </Link>
        <ul className='nav-links'>
          <Link to='/dailyprompt'>
            <li>Daily Prompt</li>
          </Link>
          <Link to='/collection'>
            <li>Collection</li>
          </Link>
          <button className='logout'>
            <li onClick={this.handleClickLogout}>Log Out</li>
          </button>
        </ul>
      </nav>
    )
  }
}

export default withRouter(UserNav);