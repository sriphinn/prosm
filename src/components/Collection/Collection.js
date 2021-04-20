import React, { Component } from 'react';
import './Collection.css';
import dummyPosts from '../../dummy-posts';
import PostItem from '../PostItem/PostItem';

class Collection extends Component {
  render() {
    return (
      <div className='collection'>
        <h2>
          Your Collection
        </h2>
        <ul className='collection-list'>
          {dummyPosts.map(post =>
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