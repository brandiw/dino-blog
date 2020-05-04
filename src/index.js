import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let post = {
  title: 'Particularly Large Shooting Star Sighted Over Pangaea',
  author: 'T-Rex',
  body: 'Alright, so I don\'t wanna panic anyone, but there I was sitting on my volcano eating a roasted triceratops leg and lo and behold there was this like greenish orangish redish... bluish light! I saw it go over the horizan and then heard a big boom. I was so shocked that I dropped my Triceratops leg! Which I could not pick up again. Can someone help me out with that? Promise not eat you. Pinky swear!',
  comments: ['Should I be worried?', 'I saw it too!', 'Fake News!', 'Guys this is serious!']
}

ReactDOM.render(
  <React.StrictMode>
    <App post={post} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
