import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './AddPost.css';
import AppContext from '../../AppContext';
import config from '../../config';
import TextareaAutosize from 'react-textarea-autosize';


class AddPost extends Component {
  static contextType = AppContext;

  state = {
    error: null,
  };

  handleSubmit = e => {
    e.preventDefault()
    const { title, content } = e.target
    const post = {
      title: title.value,
      content: content.value
    }
    this.setState({ error: null})
    fetch(config.API_ENDPOINT + '/posts', {
      method: 'POST',
      body: JSON.stringify(post),
      headers: {
        'content-type': 'application/json',
        'Authorization': `Bearer ${localStorage.authToken}`
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
        title.value = ''
        title.content = ''
        this.context.addPost(data)
        this.props.history.push('/collection')
      })
      .catch(error => {
        this.setState({ error })
      })
  }


  handleClickCancel = () => {
    this.props.history.push('/collection')
  };

  render() {
    const { error } = this.state
    return (
      <section className='AddPost'>
        <p>Let your creativity run wild!
          <br/>
          Write a poem, a short story, free flowing prose, whatever you like.
        </p>
        <form
          className='AddPost__form'
          onSubmit={this.handleSubmit}
        >
          <div className='AddPost__error' role='alert'>
            {error && <p>{error.message}</p>}
          </div>
          <div>
            <label htmlFor='title'>
              Title
            </label>
            <input
              type='text'
              name='title'
              id='title'
              placeholder='Give your work a title'
              required
            />
          </div>
          <div className='grow-wrap'>
            <TextareaAutosize
              name='content'
              id='content'
              placeholder='This is your space of infinite possibility. Let your creativity flow...'
            />
          </div>
          <div className='AddPost__buttons'>
            <button type='submit'>
              Save
            </button>
            <button type='button' onClick={this.handleClickCancel}>
              Cancel
            </button>
          </div>
        </form>
      </section>
    )
  }
}

export default withRouter(AddPost);