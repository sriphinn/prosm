import React, { Component } from 'react';
import './Login.css';
import AppContext from '../../AppContext';
import config from '../../config';

class Login extends Component {
  static contextType = AppContext;

  state = {
    error: null
  };

  handleSubmit = e => {
    e.preventDefault()
    const { email, password } = e.target
    const post = {
      email: email.value,
      password: password.value
    }
    this.setState({ error: null})
    fetch(config.API_ENDPOINT + '/auth/login', {
      method: 'POST',
      body: JSON.stringify(post),
      headers: {
        'content-type': 'application/json',
      }
    })
      .then (res => {
        if (!res.ok){
          return res.json().then(error => {
            throw error 
          })
        }
        return res.json()
      })
      .then(data => {
        localStorage.status = 'valid'
        localStorage.authToken = data.authToken
        this.context.setStatus('valid')
        this.props.history.push('/collection')
      })
      .catch(error => {
        this.setState({ error })
      })
  };

  handleClickCancel = () => {
    this.props.history.push('/')
  };

  render() {
    return (
      <div className='login'>
        <form className="login-form" onSubmit={this.handleSubmit}>
          <div>
            <label for="email">Email</label>
            <input placeholder='email' type="text" name='email' id='email' />
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