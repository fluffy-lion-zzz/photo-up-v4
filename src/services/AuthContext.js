// import React, { createContext, useContext, useState, useEffect } from 'react'
import React, { useState, createContext, useEffect } from 'react'

import app from 'firebase/app'
import 'firebase/auth'


export const AuthContext  = createContext()

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null)

    useEffect(() => {
        app.auth().onAuthStateChanged(setCurrentUser)
    },[])

    return(
        <AuthContext.Provider value={{ currentUser }}>
            {children}
        </AuthContext.Provider>
    )
}

export const doSignOut = () => app.auth().signOut()


// import firebase from '../components/Firebase'

// export const onAuthStateChange = (callback) => {
//     return app.auth().onAuthStateChanged(user => {
//         if(user) {
//             callback({ loggedIn: true, email: user.email })
//         } else {
//             callback({ loggedIn: false })
//         }
//     })
// }

// export const AuthContext = createContext(onAuthStateChange)

