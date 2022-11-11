import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./login.js"

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// from "react-router-dom";   
function App() {
  return (
    <div className="app">
      <Header/>
        <Routes>
        {/* <Route path="/home" element={ <Home/> } />
        <Route path="/checkout" element={ <Checkout/> } />*/}
        <Route path="/login" element={<Login/>}/> 
        </Routes>
      </div>
  );
}

export default App;
