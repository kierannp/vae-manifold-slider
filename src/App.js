import './App.css';
import DoubleSlider from './doubleSlider';
import React, { useState, useRef, useEffect} from 'react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <DoubleSlider></DoubleSlider>
      </header>
    </div>
  );
}

export default App;
