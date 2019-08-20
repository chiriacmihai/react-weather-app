import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          My First React Project
        </p>
        <a
          className="App-link"
          href="https://www.accuweather.com/en/md/chiinu/242405/weather-forecast/242405"
          target="_blank"
          rel="noopener noreferrer"
        >
          Weather
        </a>
      </header>
    </div>
  );
}

export default App;
