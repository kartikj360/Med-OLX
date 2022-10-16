// import logo from './logo.svg';  
import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import  Header from'./Header';
import  Home from'./Home';



function App() {
  return (
    <div className="app">
{/* 
      <h1>Building up the  MedOLX store :) 
      </h1> */}
      <div className='pageWrapper'>
      <Header />
      <Home/> 
      </div>






















      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
