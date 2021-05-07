import React, { Component } from 'react';
import './Collection.css';
import PostItem from '../PostItem/PostItem';
import config from '../../config';

class Collection extends Component {
  state = {
    posts: [],
    error: null
  }

  componentDidMount() { 
    fetch(config.API_ENDPOINT + '/posts', {
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
      .then(posts => {
        this.setState({
          posts
        })
      })
      .catch(error => this.setState({ error }))
  }
  
  render() {
    return (
      <div className='collection'>
        <h2>
          YOUR COLLECTION
        </h2>
        <ul className='collection-list'>
          {this.state.posts.map(post =>
            <PostItem
              key={post.id}
              {...post}
              history={this.props.history}
            />
          )}
        </ul>
      </div>
    )
  }
}

export default Collection;