import React, { useState } from 'react'
import './Login.css'

import { doLogIn } from '../../services/userAccount'

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleLogIn = (event) => {
        event.preventDefault()
        // doLogIn(email)
        
        console.log(email, password)
        doLogIn(email, password)
        setEmail("")
    }
    return (
        <div className="loginWrapper">
            <h1>login</h1>
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
        </div>
    )
}

export default Login