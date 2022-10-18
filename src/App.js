// import logo from './logo.svg';
import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
// import Hero from "./Hero"; 
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// import { Route, Routes } from "react-router-dom";

// import {BrowserRouter as Route }
// from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Header/>
        <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/checkout" element={ <Checkout/> } />
        </Routes>
      </div>
  );
}

export default App;
