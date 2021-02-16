import React, { useEffect, useState, createContext, useContext } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

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
  console.log(user)
  useEffect(() => {
      const unsubscribe = onAuthStateChange(setUser)
      return () => {
          unsubscribe()
      }
  }, [])

  return (
    <div>
      
{/* <AuthProvider> */}
<UserProvider value={user}>
    <Router>
      
        <p>auth provider</p>
        
      

      <div>
        {user.loggedIn  ? <Logout /> : <></>}
        
      <Navigation />
      <h1>photoUpV4</h1>
      {/* <AuthStatus /> */}
      {/* <button onClick={doSignOut}>sign out</button> */}
      <Route exact path={ROUTES.LANDING} componet={Landing}/>
        {/* <UserConsumer> */}
            <Route path={ROUTES.LOG_IN} component={Login}/>
        {/* </UserConsumer> */}
      <Route path={ROUTES.SIGN_UP} component={SignUp} />
      {/* <Route path={ROUTES.HOME} component={Home} /> */}
      <PrivateRoute  exact path={ROUTES.HOME} component={Home}/>
      <PrivateRoute path={ROUTES.ACCOUNT} component={Account} />
      </div>
      
    </Router>
    
      
</UserProvider>
    {/* </AuthProvider> */}
    </div>
  );
}

export default App;
