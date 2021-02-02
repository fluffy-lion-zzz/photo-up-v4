import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import Login from './components//Login/Login'

import './App.css';

const App = () => {
  return (
    <>
      <h1>photoUpV4</h1>
      <Router>
        <Login />
      </Router>
    </>
  );
}

export default App;
