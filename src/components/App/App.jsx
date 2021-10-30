import React, { useState } from 'react';
import './App.css';
import Body from './Body/Body';


function App() {
   const [moments, setMoments] = useState([{
    location: 'images/chicago.jpeg',
    description: 'Picture of me in Chicago',
    likes: 0},
    {
      location: 'images/vatican.jpeg',
      description: 'Picture of me in the Vatican',
      likes: 0
  },
  {
    location: 'images/graduation.jpeg',
    description: 'Picture of me after graduation',
    likes: 0
}
  ]);
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <p>Gallery goes here</p>
        <Body moments={moments}/>
      </div>
    );
}

export default App;
