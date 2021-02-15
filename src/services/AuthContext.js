// import React, { createContext, useContext, useState, useEffect } from 'react'
import React, { useState, createContext, useEffect } from 'react'

import app from '../components/Firebase'
import firebase from 'firebase'

export const onAuthStateChange = (callback) => {
    return firebase.auth().onAuthStateChanged(user => {
        if(user) {
            callback({loggedIn: true})
        } else {
            callback({loggedIn: false})
        }
    })
}


export const doSignOut = () => firebase.auth().signOut()

