import React, { useState, createContext, useEffect } from 'react'
import { onAuthStateChange, doSignOut } from './AuthContext'

import Logout from '../components/Logout/Logout'

const AuthStatus = () => {
    const [user, setUser] = useState({loggedIn: false})

    const defaultUser = { loggedIn: false, email: ""}
    const UserContext = createContext(defaultUser)
    const UserProvider = UserContext.Provider
    const UserConsumer = UserContext.Consumer

    useEffect(() => {
        const unsubscribe = onAuthStateChange(setUser)
        return () => {
            unsubscribe()
        }
    }, [])

    if(!user.loggedIn){
        return <span>user is logged out</span>
    }

    return (
        <UserProvider value={user}>
            <Logout user={user} />

        </UserProvider>
    )
}

export default AuthStatus