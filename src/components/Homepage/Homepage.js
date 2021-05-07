import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Homepage.css';
import Image from '../../images/header-image.JPG'

class Homepage extends Component {
  render() {
    return (
      <div className='homepage'>

        <section className='header-container'>
          <img src={Image} alt='notebook and pen with refracted light' />
        </section>
        
        <section className="about">
          <h3>
            Let your creativity loose with PROSM!
          </h3>
          <p>
            PROSM is an app for poets, artists, copywriters and anyone who wants to form a daily writing practice.<br /> 
          </p>
        </section>

        <section className='howto'>
          <p>
            Each day you'll be given a prompt in the form of a random word and corresponding GIF.<br />
            Write to your heart's content - a poem, short story, free-flowing prose, marketing copy, or even a journal entry inspired by the prompt.<br />
          </p>
          <h3>
            Start building your own collection of writing now!
          </h3>
        </section>

        <section id='signin'>
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