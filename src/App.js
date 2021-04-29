import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Navigation from './components/Navigation/Navigation'
import Login from './components//Login/Login'
import * as ROUTES from './services/routes'
import SignUp from './components/SignUp/SignUp'
import Home from './components/Home/Home'
import Landing from './components/Landing/Landing'
import './App.css';
import  { UserProvider } from './services/AuthContext'
import Account from './components/Account/Account'
import 'firebase/auth'
import app from 'firebase/app'
import PrivateRoute from './services/PrivateRoute'
import Uploader from './components/Uploader/Uploader'
import MetaSearch from './components/MetaSearch/MetaSearch'
import HowTo from './components/HowTo/HowTo'
import logo from './css-images/logo.png'
import 'bootstrap/dist/css/bootstrap.min.css'

const onAuthStateChange = (callback) => {
  return app.auth().onAuthStateChanged(user => {
    if(user) {
      callback({loggedIn: true, email: user.email})
    } else {
      callback({loggedIn: false})
    }
  })
}

const App = () => {
  const [user, setUser] = useState({loggedIn: false})
  const [storageRef, setStorageRef] = useState()
  const [storage, setStorage] = useState()

    const loadStorage = async () => {
        const storageConnect = await app.storage()
        setStorage(storageConnect)
        setStorageRef(storageConnect.ref())
    }
  useEffect(() => {
      loadStorage()
      const unsubscribe = onAuthStateChange(setUser)
      return () => {
          unsubscribe()
          
      }
      
  }, [])

  return (
    <div id="app">
      <UserProvider value={user}>
          <Router> 
            <div id="contents">
            <div className="navContainer">
              <div className="navComponentWrap">
                <Navigation  />
              </div>
              <div className="topImageWrap">
                <img  src={logo}/>
              </div>
            </div>
              <div id="mainBody">
                <h1 id="titleHead">photo-up</h1>
                <Route exact path="/" render={() => <Landing />} />
                <Route exact path={ROUTES.LANDING} componet={Landing}/>
                <Route path={ROUTES.LOG_IN} component={Login}/>
                <Route path={ROUTES.SIGN_UP} component={SignUp} />
                <Route path={ROUTES.HOWTO} component={HowTo} />
                <PrivateRoute  
                  exact path={ROUTES.HOME}
                  component={() => <Home 
                    storage={storage}
                    storageRef={storageRef}/>}
                />
                <PrivateRoute 
                  path={ROUTES.UPLOAD} 
                  component={() => <Uploader storageRef={storageRef} />}
                />
                <PrivateRoute
                  path={ROUTES.SEARCH}
                  component={() => <MetaSearch storage={storage} />}
                />
                <PrivateRoute path={ROUTES.ACCOUNT} component={Account} />
              </div>  
            </div>
          </Router>
      </UserProvider>
    </div>
  );
}

export default App;
