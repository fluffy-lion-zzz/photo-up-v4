import React, { useContext } from 'react'
import { Route, Redirect } from 'react-router-dom'
import UserContext  from './AuthContext'


const PrivateRoute = ({ component: RouteComponent, ...rest }) => {
    const user = useContext(UserContext)
    console.log(user)
    return (
        <Route
        {...rest}
        render={routeProps => 
            !user ? (
                <RouteComponent {...routeProps} />
        ) : (
            <Redirect to={'/login'} />
        )
        }

        />
        
    )
}

export default PrivateRoute