import React, { Component } from 'react';
import './Login.css';
import AppContext from '../../AppContext';

class Login extends Component {
  static contextType = AppContext;

  state = {
    error: null
  };

  handleSubmit = e => {
    e.preventDefault()
    localStorage.status = 'valid'
    this.context.setStatus('valid')
    this.props.history.push('/collection')
  };

  handleClickCancel = () => {
    this.props.history.push('/')
  };

  render() {
    return (
      <div className='login'>
        <form className="login-form" onSubmit={this.handleSubmit}>
          <div>
            <label for="username">Username</label>
            <input placeholder='Username' type="text" name='username' id='username' />
          </div>
          <div>
            <label for="password">Password</label>
            <input type="text" name='password' id='password' placeholder='Password' />
          </div>
          <button type='submit'>
            Login
          </button>
          <button type='cancel-button' onClick={this.handleClickCancel}>
            Cancel
          </button>
        </form>
      </div>
    )
  }
}

export default Login;