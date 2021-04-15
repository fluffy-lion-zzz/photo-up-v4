import React from 'react'
import './HowTo.css'
import { Link } from 'react-router-dom'
import * as ROUTES from '../../services/routes'
const HowTo = () => {

    return(
        <div className="howToCont">
            <h2>how to</h2>
            <div>
                <h3>sign up</h3>
                <p>make sure you are signed up or logged in</p>
                <p>member of the team? not signed up yet...why? 
                    <br />
                    <Link to={ROUTES.SIGN_UP}>sign up</Link>
                </p>
            </div>
        </div>
    )
}

export default HowTo