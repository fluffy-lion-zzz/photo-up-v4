import React , { useState } from 'react'
import './SignUp.css'
import { doRegister } from '../../services/userAccount'
import { Redirect, Route } from 'react-router-dom'

const SignUpForm = () => {
    
    const [newEmail, setNewEmail] = useState("")
    const [newPassword, setNewPassword] = useState("")
    const [newPasswordTwo, setNewPasswordTwo] = useState("")

    const [newUser, setNewUser] = useState("")

    const [error, setError] = useState(null)

    const isInvalid = 
        newPassword !== newPasswordTwo ||
        newPassword === "" ||
        newEmail === "" 


    const handleSignUp = (event) => {
        event.preventDefault()
        console.log(newEmail, newPassword)
        doRegister(newEmail, newPassword)
        let registerResult = doRegister
        // registerResult !== null ? <Redirect to="/home"/> : <Redirect to="/account" />
       
    }
        return (
                <form onSubmit={handleSignUp}>
                    <div>
                        <input 
                        type="text"
                        value={newUser}
                        placeholder="you username"
                        onChange={(event) => {
                            setNewUser(event.target.value)
                        }}>
                        </input>
                        <p>{newUser}</p>
                    </div>
                    <input 
                    type="text"
                    value={newEmail}
                    onChange={(event) => {
                        setNewEmail(event.target.value)
                    }}
                    ></input>
                    <div>
                        {newEmail}
                    </div>
                    <input 
                    type="text"
                    value={newPassword}
                    onChange={(event) => {
                        setNewPassword(event.target.value)
                    }}
                    placeholder="password"
                    ></input>
                    <div>
                        {newPassword}
                    </div>
                    <input 
                    type="text"
                    value={newPasswordTwo}
                    onChange={(event) => {
                        setNewPasswordTwo(event.target.value)
                    }}
                    placeholder="password two">
                    </input>
                    <button disabled={isInvalid}>submit</button>
                </form>
        )
}

export default SignUpForm