import React from 'react'
import { BrowserRouter as Router, Route, } from 'react-router-dom'

import Navigation from './components/Navigation/Navigation'
import Login from './components//Login/Login'
import * as ROUTES from '../../services/routes'
import './App.css';

const App = () => {
  return (
    <Router>
      <div>
      <Navigation />
      <h1>photoUpV4</h1>
      <Route exact path={ROUTES.LANDING} componet={LandingPage}/>
        
      <Route path={ROUTES.SIGN_IN} component={Login}/>
      </div>
    </Router>
  );
}

export default App;
