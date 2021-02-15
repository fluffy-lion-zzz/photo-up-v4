import React, { useContext, createContext } from 'react'
import AuthStatus from '../../services/UserStatus'
// import app from 'firebase/app'
// import 'firebase/auth'
// const UserContext = createContext({})
// const UserConsumer = UserContext.Consumer
// import {AuthContext} from '../../services/AuthContext'


const Logout = (props) => {
    // const value = useContext(AuthContext)
    // console.log(value)
    return(
        <div>
            <h3>logout</h3>
            <p></p>
            {/* <UserConsumer > */}
            {/* <p>logout</p>
            <p>{user}</p>
            <button onClick={onClick}>logout</button> */}
            {/* <p>{user}</p> */}

            {/* </UserConsumer> */}
        </div>
    )
}


export default Logout