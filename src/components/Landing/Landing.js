import React from 'react'
import * as ROUTES from '../../services/routes'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
import './Landing.css'
import Button from 'react-bootstrap/Button'
// import Login from './components/Login/Login'

const Landing = () => {
    return (
        <div className="landingWrapper">
            <div id="landingHead">
                <h1>welcome to photo-up</h1>
            </div>
            <div id="landingButtons">
                <div className="landingBut">
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