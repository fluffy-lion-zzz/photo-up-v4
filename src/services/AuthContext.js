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




// export const UserContext = createContext({ user: null })



// const UseProvider = (props) => {
//     const [user, setUser] = useState(null)

// useEffect(() => {
//     firebase.auth().onAuthStateChanged(userAuth => {
//         setUser({user: userAuth})
//         console.log(user)
//     })
// },[])

//     return (
//         <div>
//             <UserContext.Provider value={user}>
//                 {props.children}
//             </UserContext.Provider>
//         </div>
//     )

// }

// export default UseProvider

// const userContext = createContext({
//     user: null
// })

// export const useSession = () => {
//     const { user } = useContext(userContext)
//     return user
// }

// export const useAuth = () => {
//     const [state, setState] = useState(() => { const user = firebase.auth().currentUser
//          return { initializing: !user, user, } })
//     function onChange(user){
//         setState({initializing: false, user})
//     }

//     useEffect(() => {
//         const unsubscribe = firebase.auth().onAuthStateChanged(onChange)
//         return () => unsubscribe()
//     }, [])

//     return state
// }

// export const AuthContext = createContext({userPresent:false, user:null})
// export default function FirebaseAuthContext(props) {
//     let [state, changeState] = useState({
//         userDataPresent: false,

//         user: null,
//         listener: null
//     })

//     useEffect(() => {
//         if(state.listener == null){
//             changeState({...state, listener:auth.onAuthStateChanged((user) => {
//                 if(user){
//                     changeState(oldState => ({...oldState, userDataPresent: true, user: user}))
//                 }else {
//                     changeState(oldState => ({...oldState, userDataPresent: true, user: null}))
//                 }
//             })})
//         }
//         return () => {
//             if(state.listener)
//             state.listener()
//         }
//     }, [])

//     return(
//         <AuthContext.Provider value={state}>
//             {props.children}
//         </AuthContext.Provider>
//     )
// }