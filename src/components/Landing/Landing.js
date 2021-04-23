import React, { useContext } from 'react'
import * as ROUTES from '../../services/routes'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
import './Landing.css'
import Button from 'react-bootstrap/Button'
import userEvent from '@testing-library/user-event'
import Home from '../Home/Home'
import UserContext from '../../services/AuthContext'
// import Login from './components/Login/Login'
// import  { UserProvider } from './services/AuthContext'

const Landing = () => {
    const user = useContext(UserContext)
    return (
        
        <div className="landingWrapper">
            <div id="landingHead">
                <h1>welcome to photo-up</h1>
            </div>
            <div id="landingButtons">
                <div className="landingBut">
                   {user ? <p>true</p> : <p>false</p>}
                    <Link to={ROUTES.LOG_IN}>
                        <Button size="lg">login</Button>
                    </Link>
                </div>
                <div className="landingBut">
                    <Link to={ROUTES.SIGN_UP}>
                        <Button size="lg">sign up</Button>
                    </Link>
                </div>
            </div>
            
        </div>
        
    )
}

export default Landing