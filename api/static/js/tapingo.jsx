import React from 'react';
import ReactDOM from 'react-dom';
import TweetList from './tweet_list';


// get root element and render React component
document.addEventListener('DOMContentLoaded', () => {

  const root = document.getElementById('root');
  ReactDOM.render(<TweetList url='/api/' />, root);
  
});