// import React, { createContext, useContext, useState, useEffect } from 'react'
import React, { useState, createContext, useEffect } from 'react'

import app from 'firebase/app'
import 'firebase/auth'

// import firebase from '../components/Firebase'

export const onAuthStateChange = (callback) => {
    return app.auth().onAuthStateChanged(user => {
        if(user) {
            callback({ loggedIn: true, email: user.email })
        } else {
            callback({ loggedIn: false })
        }
    })
}


export const doSignOut = () => app.auth().signOut()

