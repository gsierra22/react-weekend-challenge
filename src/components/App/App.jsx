import React, { useState, useEffect } from 'react';
import './App.css';
import Body from './Body/Body';
import axios from 'axios';


function App() {
   const [moments, setMoments] = useState([
  ]);

  useEffect( ()=>{
    console.log( 'component loaded' );
    getGallery();
  }, []);

  const getGallery=()=>{
    axios.get( '/gallery' ).then( (response)=>{
      console.log(response.data);
      setMoments( response.data );
    }).catch((err)=>{
      alert('nope');
      console.log(err);
    })
  }
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Photos of my Life Moments</h1>
        </header>
        <p></p>
        <Body moments={moments} getGallery={getGallery}/>
      </div>
    );
}

export default App;
