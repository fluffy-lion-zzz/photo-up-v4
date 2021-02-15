// import React, { useContext, useState, createContext, useEffect } from 'react'
// import { onAuthStateChange, AuthContext, doSignOut } from './AuthContext'

// import Logout from '../components/Logout/Logout'
//     const defaultUser = { loggedIn: false, email: ""}
//     const UserContext = createContext(AuthContext)
//     const UserProvider = UserContext.Provider
//     const UserConsumer = UserContext.Consumer

// const AuthStatus = () => {
//     const [user, setUser] = useState({loggedIn: false})

//     useEffect(() => {
//         const unsubscribe = onAuthStateChange(setUser)
//         return () => {
//             unsubscribe()
//         }
//     }, [])

//     if(!user.loggedIn){
//         return <span>user is logged out</span>
//     }

//     return (
//         <UserProvider value={user}>
//             <Logout onClick={doSignOut} />

//         </UserProvider>
//     )
// }

// export default AuthStatus