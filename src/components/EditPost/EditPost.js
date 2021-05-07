import React, { useState, useEffect } from 'react';
import config from '../../config';
import './EditPost.css';

function EditPost(props) {
  const [error, setError] = useState('')
  const [post, setPosts] = useState({})
  
  useEffect(() => {
    fetch(config.API_ENDPOINT + '/posts/' + props.match.params.id, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        'Authorization': `Bearer ${localStorage.authToken}`
      }
    })
      .then(res => {
        if (!res.ok) {
          throw new Error(res.status)
        }
        return res.json()
      })
      .then(data => {
        setPosts(data)
      })
      .catch(error => setError({ error }))
  }, [props.match.params.id])

  const handleSubmit = e => {
    e.preventDefault()
    const { title, content } = e.target
    const post = {
      title: title.value,
      content: content.value
    }
    setError(null)
    fetch(config.API_ENDPOINT + "/posts/" + props.match.params.id, {
      method: 'PATCH',
      body: JSON.stringify(post),
      headers: {
        'content-type': 'application/json',
        'Authorization': `Bearer ${localStorage.authToken}`
      }
    })
      .then(res => {
        if (!res.ok) {
          return res.json().then(error => {
            throw error
          })
        }
        return res.json()
      })
      .then(data => {
        title.value = ''
        content.value = ''
        props.history.push('/collection')
      })
      .catch(error => {
        setError(error)
      })
  }

  const handleClickCancel = () => {
    props.history.push('/collection')
  }

  return (
    <div className='edit-post'>
      <h2>Edit</h2>
      <form
        className='edit-post-form'
        onSubmit={handleSubmit}
      >
        <div className='edit-post-error' role='alert'>
          {error && <p>{error.message}</p>}
        </div>
        <div>
          <label htmlFor='title'>
            Title
              {' '}
          </label>
          <input type='text' name='title' id='title' defaultValue={post.title} />
        </div>
        <div>
          <label htmlFor='content'>
            Content
            </label>
          <textarea
            name='content'
            id='content'
            defaultValue={post.content}
          />
        </div>
        <div className='edit-post-buttons'>
          <button type='button' onClick={handleClickCancel}>
            Cancel
            </button>
          {' '}
          <button type='submit'>
            Save
            </button>
        </div>
      </form>
    </div>
  )
}

EditPost.defaultProps = {
  match: {
    params: {}
  }
}

export default EditPost;

