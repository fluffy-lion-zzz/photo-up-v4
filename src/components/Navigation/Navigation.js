import React from 'react'
import { Link } from 'react-router-dom'

import * as ROUTES from '../../services/routes'


const Navigation = () => {
    return (
    <div>
        {/* <NavAuthTest /> */}
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
    )
}

export default Navigation