import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Homepage from './components/Homepage/Homepage'
import Signup from './components/Signup/Signup';
import Login from './components/Login/Login';
import Collection from './components/Collection/Collection';
import AddPost from './components/AddPost/AddPost';
import EditPost from './components/EditPost/EditPost';
import UserNav from './components/UserNav/UserNav';
import DailyPrompt from './components/DailyPrompt/DailyPrompt';
import DeletePost from './components/DeletePost/DeletePost';
import './App.css';
import AppContext from './AppContext';

class App extends Component {

  state = {
    users: [],
    posts: [],
    status: localStorage.status,
    error: null
  }

  setStatus = status => {
    this.setState({
      status
    })
  }

  setUsers = users => {
    this.setState({
      users
    })
  }

  setPosts = posts => {
    this.setState({
      posts
    })
  }

  addPost = post => {
    this.setState({
      posts: [ ...this.state.posts, post]
    })
  }

  deletePost = postId => {
    const newPosts = this.state.posts.filter(post =>
      post.id !== postId
    )
    this.setState({
      posts: newPosts
    })
  }

  editPost = (postId, newPost) => {
    const indexedPost = this.state.posts.findIndex(post =>
      post.id === parseInt(postId)
    )
    const updatedPosts = this.state.posts
    updatedPosts[indexedPost] = newPost
    this.setPosts({
      posts: updatedPosts
    })
  }

  render() {
    const contextValue = {
      users: this.state.users || [],
      posts: this.state.posts || [],
      status: this.state.status,
      setStatus: this.setStatus,
      addPost: this.addPost,
      editPost: this.editPost,
      deletePost: this.deletePost
    }
    return (
      <div className='App'>
        <main>
          <AppContext.Provider value={contextValue}>
            {this.state.status ? <UserNav /> : <Nav />}
            <Route exact path='/' component={Homepage} />
            <Route path='/signup' component={Signup} />
            <Route path='/login' component={Login} />
            <Route path='/collection' component={Collection} />
            <Route path='/dailyprompt' component={DailyPrompt}/>
            <Route path='/add-post' component={AddPost} />
            <Route path='/edit-post/:id' component={EditPost} />
            <Route path='/delete-post/:id' component={DeletePost} />
          </AppContext.Provider>
        </main>
        <footer>
          Prose + Poem = PROSM<br/>
          <a href="https://phinn.dev/">&copy; Phinn Sriployrung 2021</a>
        </footer>
      </div>
    )
  }
}

export default App;
