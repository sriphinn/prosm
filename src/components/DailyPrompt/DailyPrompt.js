import React, { Component } from 'react';
import './DailyPrompt.css';
import AddPost from '../AddPost/AddPost';
import prompts from './prompts-store';

const getRandom = Math.floor(Math.random() * prompts.length);
const randomPrompt = prompts[getRandom];

const giphyKey = 'bF6uAVhD0jSZnjjxQCktKLGZ7E8IKAgq';
const giphyURL = 'https://api.giphy.com/v1/gifs/search';

function formatQueryParams(paramsObject) {
  const queryItems = Object.keys(paramsObject)
  .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(paramsObject[key])}`)
  return queryItems.join('&');
};

class DailyPrompt extends Component {
  
  state = {
    gif: ""
  }

  componentDidMount() {
    this.getGiphy(randomPrompt)
  }
  
  getGiphy(keyword) {
    const giphyParams = {
        q: keyword,
        api_key: giphyKey,
        limit: 50,
        rating: 'g'
    };
    const queryString = formatQueryParams(giphyParams);
  
    const url = giphyURL + '?' + queryString;
  
    console.log(url);
  
    fetch(url)
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            throw new Error(response.statusText);
        })
        .then(responseJson => this.displayGiphyResults(responseJson))
        .catch(err => {
            console.log(err)
        });
  };
  
  displayGiphyResults(responseJson) {
    console.log("displayGiphyResults ran", responseJson)
    let gif = ""
    let k = Math.floor(Math.random()*responseJson.data.length)
        if (responseJson.data[k].images.original) {
          gif = `${responseJson.data[k].images.original.url}` 
          console.log('gif', gif)
    }
    this.setState({
      gif: gif 
    })
  }

  refreshPage() {
    window.location.reload(false);
  }

  render() {
    return (
      <div className='prompt'>
        <h2>Daily Prompt</h2>
        <h3>
          {randomPrompt}
          <br />
          <br />
          <img src={this.state.gif} alt='gif' />
        </h3>
        <button onClick={this.refreshPage}>
          I'm not feeling inspired. New prompt please!
        </button>
        <AddPost />
      </div>
    )
  }
}

export default DailyPrompt;