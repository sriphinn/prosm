import React, { Component } from 'react';
import './Signup.css';
import AppContext from '../../AppContext';
import config from '../../config';

class Signup extends Component {
  static contextType = AppContext;

  state = {
    error: null
  }

  handleSubmit = e => {
    e.preventDefault()
    const { first_name, last_name, email, password } = e.target
    const post = {
      first_name: first_name.value,
      last_name: last_name.value,
      email: email.value,
      password: password.value
    }
    this.setState({ error: null})
    fetch(config.API_ENDPOINT + '/users', {
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
        this.context.addPost(data)
        localStorage.status = 'valid'
    this.context.setStatus('valid')
        this.props.history.push('/collection')
      })
      .catch(error => {
        this.setState({ error })
      })
  }

  handleCancelClick = () => {
    this.props.history.push('/')
  }

  render() {
    return (
      <div className='signup'>
        <form className='signup-form' onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="first_name">First name</label>
            <input placeholder='First Name' type="text" name='first_name' id='first_name' />
          </div>
          <div>
            <label htmlFor="last_name">Last name</label>
            <input type="text" name='last_name' id='last_name' placeholder='Last Name' />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input type="text" name='email' id='email' />
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