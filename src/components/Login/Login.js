import React, { useState } from 'react'
import './Login.css'
import { Link, useHistory } from 'react-router-dom'
import app from 'firebase/app'
import 'firebase/auth'
import * as ROUTES from '../../services/routes'
import Button from 'react-bootstrap/Button'



const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const history = useHistory()

    const handleLogIn = (event) => {
        event.preventDefault()
        app.auth().signInWithEmailAndPassword(email, password)
        .then((user) => {
            history.push('/')
        }).catch((error) => {
            console.log(error)
        })
        setEmail("")
    }

    return (
        // <UserConsumer>
        <div className="loginWrapper">
            <div className="loginHeader">
                <h1>login...</h1>
            </div>
            {/* {props.value.user.email} */}
            
            <form onSubmit={handleLogIn}>
                <div className="inputSection">
                    <h3>email...</h3>
                    <input 
                    placeholder="enter email"
                    type="text"
                    value={email}
                    onChange={(event) => {
                        setEmail(event.target.value)
                    }}
                    >
                    </input>
                    <div>{email}</div>
                </div>
                <div className="inputSection">
                    <h3>password...</h3>
                    <input
                    placeholder="enter password"
                    type="password"
                    value={password}
                    onChange={(event) => {
                        setPassword(event.target.value)
                    }}
                    placeholder="password"
                    ></input>
                </div>
                <div className="submitCont">
                    <Button type="submit">login</Button>
                </div>
            </form>
            {/* <div>
                <button onClick={Logout}>log out</button>
            </div> */}
            <div className="loginSignUp">
                <p>member of the team but not signed up yet? <br/><Link to={ROUTES.SIGN_UP}>sign up</Link></p>
            </div>
        </div>
        // </UserConsumer>
    )
}

export default Login