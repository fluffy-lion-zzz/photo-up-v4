import React from 'react'
// import app from 'firebase/app'
// import 'firebase/auth'
import { doSignOut } from '../../services/AuthContext'

const Logout = ({ user }) => {
    return(
        <div>
            <p>logout</p>
            <p>{user.email}</p>
            <button onClick={doSignOut}>logout</button>
        </div>
    )
}


export default Logout