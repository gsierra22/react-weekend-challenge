import React from 'react';
import './App.css';
import Body from './Body/Body';


function App() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <p>Gallery goes here</p>
        <Body />
        <img src="images/goat_small.jpg"/>
        <img src="images/chicken_sprint.jpeg"
        width="100"
        height="100"/>
      </div>
    );
}

export default App;
