import React, { Component } from 'react';
import AppContext from '../../AppContext';
import config from '../../config';
import './DeletePost.css';
import { withRouter } from 'react-router-dom';

class DeletePost extends Component {
  static contextType = AppContext;

  state = {
    error: null
  };

  handleSubmit = e => {
    e.preventDefault()
    
    fetch(config.API_ENDPOINT + "/posts/" + this.props.match.params.id, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${localStorage.authToken}`
      }
    })
      .then(data => {
        // callback(this.props.match.params.id)
        this.props.history.push('/collection')
      })
      .catch(error => {
        this.setState({ error })
      })
  }

  handleClickCancel = () => {
    this.props.history.push('/collection')
  }

  render() {
    const error = this.state.error
    return (
      <div className='delete-post'>
        <h2>Are you sure you want to delete this post?</h2>
        
          <div className='edit-post-error' role='alert'>
          { error && <p>{ error.message }</p>}
          </div>  
          <div className='delete-post-buttons'>
            <button type='button' onClick={this.handleClickCancel}>
              Cancel
            </button>
            {' '}
            <button type='submit' onClick={this.handleSubmit}>
              Delete
            </button>
          </div>
        
      </div>
    )
  }
}

export default withRouter(DeletePost);