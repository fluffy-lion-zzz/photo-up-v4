import React, { useState } from 'react'
import './Login.css'
import { Link } from 'react-router-dom'
// import {AuthContext} from '../../services/AuthContext'
import app from 'firebase/app'
import 'firebase/auth'
// import { doLogIn, doLogOut } from '../../services/userAccount'
import * as ROUTES from '../../services/routes'



const Login = (props) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")


    const handleLogIn = (event) => {
        event.preventDefault()

        app.auth().signInWithEmailAndPassword(email, password)
        .then((user) => {
            console.log(user)
            
    
        }).catch((error) => {
            // alert("denied")
            console.log(error)
        })
        setEmail("")
    }

    return (
        // <UserConsumer>
        <div className="loginWrapper">

            <h1>login</h1>
            
            {/* {props.value.user.email} */}
            
            <form onSubmit={handleLogIn}>
                <input 
                type="text"
                value={email}
                onChange={(event) => {
                    setEmail(event.target.value)
                }}
                >
                </input>
                <div>{email}</div>
                
                <input
                type="text"
                value={password}
                onChange={(event) => {
                    setPassword(event.target.value)
                }}
                placeholder="password"
                ></input>
                <button>fire</button>
            </form>
            {/* <div>
                <button onClick={Logout}>log out</button>
            </div> */}
            <div>
                <p>member of the team but not signed up yet? <Link to={ROUTES.SIGN_UP}>sign up</Link></p>
            </div>
        </div>
        // </UserConsumer>
    )
}

export default Login