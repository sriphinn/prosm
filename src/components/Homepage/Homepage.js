import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Homepage.css';

class Homepage extends Component {
  render() {
    return (
      <div className='homepage'>

        <section id='hero'>
          <h1>PROSM</h1>
          <p>Poems, Poetry and Prose</p>
        </section>
        
        <section id="about">
          <p>PROSM is a 30-day challenge to get your creative juices flowing.</p> 
          <p>Every day you'll be given a prompt to get past the hurdle of a blank page.</p> 
          <p>Consider this your daily creative writing exercise!</p>
        </section>

        <section id='howto'>
          <ul id='menu'>
            <li>Each day you'll be given a prompt in the form of a word and an image.</li>
            <li>Write to your heart's content - a poem, short story or free-flowing prose inspired by the prompt.</li>
            <li>Add your post to your personal collection and share on social!</li>
          </ul>
        </section>

        <section id='sigin'>
          <button id='sign-in'>
            <Link to='/signup'>Sign Up</Link>
          </button>
          <button id='login'>
            <Link to='/login'>Login</Link>
          </button>
        </section>
      </div>
    )
  }
}

export default Homepage;