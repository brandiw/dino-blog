import React from 'react';
import './App.css';

function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Dino Blog!</h1>
      </header>
      <main>
        <div className="blogpost">
          <h2>{props.post.title}</h2>
          <h3>By {props.post.author}</h3>
          <p>{props.post.body}</p>
        </div>
        <hr />
        <div>
          <h2>Comments</h2>
          <div className="comment">
            {props.post.comments[0]}
          </div>
          <div className="comment">
            {props.post.comments[1]}
          </div>
          <div className="comment">
            {props.post.comments[2]}
          </div>
          <div className="comment">
            {props.post.comments[3]}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
