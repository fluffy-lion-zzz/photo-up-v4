import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'

import Navigation from './components/Navigation/Navigation'
import Login from './components//Login/Login'
import Logout from './components/Logout/Logout'
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
import ViewPhotos from './components/ViewPhotos/ViewPhotos'

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
  // console.log(user)

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
      
{/* <AuthProvider> */}
<UserProvider value={user}>
    <Router> 
      {/* <p>auth provider</p> */}
      <div>
        {user.loggedIn  ? <Logout /> : <></>}
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
          {/* {user.loggedIn ?
          <div>
          <Link to={ROUTES.LOG_IN}>login</Link>
          </div>:
          <div>
          <Link to={ROUTES.HOME}>home</Link>
          </div>
        } */}
        <Route exact path="/" render={() => <Landing />} />
          {/* <AuthStatus /> */}
          {/* <button onClick={doSignOut}>sign out</button> */}
          <Route exact path={ROUTES.LANDING} componet={Landing}/>
            {/* <UserConsumer> */}
          <Route path={ROUTES.LOG_IN} component={Login}/>
            {/* </UserConsumer> */}
          <Route path={ROUTES.SIGN_UP} component={SignUp} />
          {/* <Route path={ROUTES.HOME} component={Home} /> */}
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
          {/* <div className="appCnLogo">
            <img  src={logo}/>
          </div> */}
          
          </div>
          
      </div>
    </Router>
    
      
</UserProvider>
    {/* </AuthProvider> */}
    </div>
  );
}

export default App;
