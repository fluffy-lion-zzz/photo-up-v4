import React, { useState, createContext, useEffect } from 'react'
import { onAuthStateChange } from './AuthContext'

const AuthStatus = () => {
    const [user, setUser] = useState({loggedIn: false})

    useEffect(() => {
        const unsubscribe = onAuthStateChange(setUser)
        return () => {
            unsubscribe()
        }
    }, [])

    if(!user.loggedIn){
        return <span>user is logged out</span>
    }

    return <span>user logged in</span>
}

export default AuthStatus