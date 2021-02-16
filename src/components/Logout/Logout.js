import React, { useContext, createContext } from 'react'
import { doLogOut } from '../../services/userAccount'
import UserContext from '../../services/AuthContext'


const Logout = () => {
    const user = useContext(UserContext)
    return(
        <div>
            <h3>logout</h3>       
            <button onClick={doLogOut}>logout of {user.email}</button>
        </div>
    )
}


export default Logout