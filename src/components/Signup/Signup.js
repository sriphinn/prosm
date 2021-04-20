import React, { Component } from 'react';
import './Signup.css';
import AppContext from '../../AppContext';

class Signup extends Component {
  static contextType = AppContext;

  state = {
    error: null
  }

  handleSubmit = e => {
    e.preventDefault()
    localStorage.status = 'valid'
    this.context.setStatus('valid')
    this.props.history.push('/collection')
  }

  handleCancelClick = () => {
    this.props.history.push('/')
  }

  render() {
    return (
      <div className='signup'>
        <form className='signup-form' onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="first-name">First name</label>
            <input placeholder='First Name' type="text" name='first-name' id='first-name' />
          </div>
          <div>
            <label htmlFor="password">Last name</label>
            <input type="text" name='last-name' id='last-name' placeholder='Last Name' />
          </div>
          <div>
            <label htmlFor="username">Email</label>
            <input type="text" name='username' id='username' />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input type="password" name='password' id='password' />
          </div>
          <button type='submit'>
            Sign Up
          </button>
          {''}
          <button type='cancel-button' onClick={this.handleCancelClick}>
            Cancel
          </button>
        </form>
      </div>
    )
  }
}

export default Signup;