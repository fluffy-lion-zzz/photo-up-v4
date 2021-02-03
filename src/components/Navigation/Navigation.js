import React from 'react'
import { Link } from 'react-router-dom'




const Navigation = () => {
    <div>
        <ul>
            <li>
                <Link to={ROUTES.HOME}>home</Link>
            </li>
            <li>
                <Link to={ROUTES.LOG_IN}>log in</Link>
            </li>
            <li>
                <Link to={ROUTES.SIGN_UP}>sign up</Link>
            </li>
            <li>
                <Link to={ROUTES.ACCOUNT}>account</Link>
            </li>
        </ul>
    </div>
}