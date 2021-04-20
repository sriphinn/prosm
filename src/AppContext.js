import React from 'react';

const AppContext = React.createContext({
  users: [],
  posts: [],
  status: null,
  setUsers: () => {},
  setPosts: () => {},
  setStatus: () => {},
  addPost: () => {},
  deletePost: () => {},
  editPost: () => {}
})

export default AppContext