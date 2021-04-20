import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './AddPost.css';
import AppContext from '../../AppContext';


class AddPost extends Component {
  static contextType = AppContext;

  state = {
    error: null,
  };

  handleClickCancel = () => {
    this.props.history.push('/collection')
  };

  render() {
    return (
      <section className='AddPost'>
        <h3>Let your creativity run wild!
          <br/>
          Write a poem, a short story, free flowing prose, whatever you like.</h3>
        <form
          className='AddPost__form'
          onSubmit={this.handleSubmit}
        >
          <div className='AddPost__error' role='alert'>
            {/* {error && <p>{error.message}</p>} */}
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
          <div>
            <textarea
              name='description'
              id='description'
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