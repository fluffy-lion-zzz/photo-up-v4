import React, { useEffect, useState, createContext } from 'react'
import { BrowserRouter as Router, Route, } from 'react-router-dom'

import Navigation from './components/Navigation/Navigation'
import Login from './components//Login/Login'
import Account from  './components/Account/Account'
import * as ROUTES from './services/routes'
import SignUp from './components/SignUp/SignUp'
import Home from './components/Home/Home'
import Landing from './components/Landing/Landing'
import './App.css';

import AuthStatus from './services/UserStatus'
import { AuthProvider } from './services/AuthContext'
import PrivateRoute from './services/PrivateRoute'
import { doSignOut } from './services/AuthContext'
const App = () => {



  return (
    <div>
      <button onClick={doSignOut}>signout</button>
<AuthProvider>
    <Router>
      
        <p>auth provider</p>
        
      

      <div>
      <Navigation />
      <h1>photoUpV4</h1>
      {/* <AuthStatus /> */}
      {/* <button onClick={doSignOut}>sign out</button> */}
      <Route exact path={ROUTES.LANDING} componet={Landing}/>
        
      <Route path={ROUTES.LOG_IN} component={Login}/>
      <Route path={ROUTES.SIGN_UP} component={SignUp} />
      {/* <Route path={ROUTES.HOME} component={Home} /> */}
      <PrivateRoute  exact path={ROUTES.HOME} component={Home}/>
      <PrivateRoute path={ROUTES.ACCOUNT} component={Account} />
      </div>
      
    </Router>
    </AuthProvider>
    </div>
  );
}

export default App;
