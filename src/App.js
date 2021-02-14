import React, { useEffect, useState, userContext } from 'react'
import { BrowserRouter as Router, Route, } from 'react-router-dom'

import Navigation from './components/Navigation/Navigation'
import Login from './components//Login/Login'
import Account from  './components/Account/Account'
import * as ROUTES from './services/routes'
import SignUp from './components/SignUp/SignUp'
import Home from './components/Home/Home'
import Landing from './components/Landing/Landing'
import './App.css';
// import {auth} from 'firebase/firebase-auth'
import { FirebaseContext } from './components/Firebase'
// import { useAuth } from './services/AuthContext'
import AuthStatus from './services/UserStatus'
import { doSignOut } from './services/AuthContext'

// import UserProvider from './services/AuthContext'
// import UseProvider from './services/AuthContext'
const App = () => {

  // const { initializing, user } = useAuth()
  // if (initializing){
  //   return <div> loading </div>
  // }


  return (
    <Router>

      {/* <UseProvider> */}
      {/* <userContext.Provider value={{ user }}>
        <p>tester</p>
      </userContext.Provider> */}
      <div>
      <Navigation />
      <h1>photoUpV4</h1>
      <AuthStatus />
      <button onClick={doSignOut}>sign out</button>
      <Route exact path={ROUTES.LANDING} componet={Landing}/>
        
      <Route path={ROUTES.LOG_IN} component={Login}/>
      <Route path={ROUTES.SIGN_UP} component={SignUp} />
      <Route path={ROUTES.HOME} component={Home} />
      <Route path={ROUTES.ACCOUNT} component={Account} />
      </div>
      {/* <div>
        <FirebaseContext.Consumer>
          {firebase => {
            return <div>hello firebase</div>
          }}
        </FirebaseContext.Consumer>
      </div> */}
      {/* </UseProvider> */}
    </Router>
  );
}

export default App;
