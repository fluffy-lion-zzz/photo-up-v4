import React from 'react'
import { Link } from 'react-router-dom'

import * as ROUTES from '../../services/routes'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import 'bootstrap/dist/css/bootstrap.min.css'

const Navigation = () => {
    return (
    <div>
        {/* <NavAuthTest /> */}
        <Nav>
            <NavDropdown title="Menu" id="nav-dropdown">

                <NavDropdown.Item>
                    <Link to={ROUTES.HOME}>home</Link>
                </NavDropdown.Item>

                <NavDropdown.Item>
                    <Link to={ROUTES.LOG_IN}>log in</Link>
                </NavDropdown.Item>

                <NavDropdown.Item>
                    <Link to={ROUTES.SIGN_UP}>sign up</Link>
                </NavDropdown.Item>

                <NavDropdown.Item>
                    <Link to={ROUTES.UPLOAD}>upload</Link>
                </NavDropdown.Item>

                <NavDropdown.Item>
                    <Link to={ROUTES.SEARCH}>search</Link>
                </NavDropdown.Item>

                <NavDropdown.Item>
                    <Link to={ROUTES.HOWTO}>how to</Link>
                </NavDropdown.Item>

            </NavDropdown>
        </Nav>
    </div>
    )
}

export default Navigation

{/* <li>
                <Link to={ROUTES.ACCOUNT}>account</Link>
            </li> */}

// {/* <ul>
// <li>
//     <Link to={ROUTES.HOME}>home</Link>
// </li>
// <li>
//     <Link to={ROUTES.LOG_IN}>log in</Link>
// </li>
// <li>
//     <Link to={ROUTES.SIGN_UP}>sign up</Link>
// </li>
// {/* <li>
//     <Link to={ROUTES.ACCOUNT}>account</Link>
// </li> */}
// <li>
//     <Link to={ROUTES.UPLOAD}>upload</Link>
// </li>
// <li>
//     <Link to={ROUTES.SEARCH}>search</Link>
// </li>
// <li>
//     <Link to={ROUTES.HOWTO}>how to</Link>
// </li>
// </ul> */}