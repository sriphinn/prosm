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
        <h2>LOGIN</h2>
        <form className="login-form" onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="email">Email</label>
            <input type="text" name='email' id='email' />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input type="password" name='password' id='password' />
          </div>
          <button type='submit'>
            Login
          </button>
          <button type='cancel-button' onClick={this.handleClickCancel}>
            Cancel
          </button>
        </form>
        <div>
          <p>
            Use the login info below to demo the app:<br/>
            Email: sally@prosm.dev<br/>
            Password: Password123!
          </p>
        </div>
      </div>
    )
  }
}

export default Login;