import React, { useContext } from 'react'
import { Route, Redirect } from 'react-router-dom'
import UserContext  from './AuthContext'


const PrivateRoute = ({ component: RouteComponent, ...rest }) => {
    const user = useContext(UserContext)
    //WARNING DELETE LINE 9, HERE FOR TESTING
    user.loggedIn = true
    //WARNING DELETE LINE 9, HERE FOR TESTING
    return (
        <Route
        {...rest}
        render={routeProps => 
            user.loggedIn ? (
                <RouteComponent {...routeProps} />
        ) : (
            <Redirect to={'/login'} />
        )
        }
        />
    )
}

export default PrivateRoute