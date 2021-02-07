import React, { useState } from 'react'
import './SignUp.css'
import { FirebaseContext } from '../Firebase'
import { doRegister } from '../../services/userAccount'

const SignUp = () => {

const [newEmail, setNewEmail] = useState("")
const [newPassword, setNewPassword] = useState("")
const [newPasswordTwo, setNewPasswordTwo] = useState("")
const [error, setError] = useState(null)

const isInvalid = 
    newPassword !== newPasswordTwo ||
    newPassword === "" ||
    newEmail === "" 


    const handleSignUp = (event) => {
        event.preventDefault()
        console.log(newEmail, newPassword)
        doRegister(newEmail, newPassword)
    }
    return (
        <div className="signUpWrapper">
            <h1>sign up</h1>
            <FirebaseContext.Consumer>{firebase =>
                <form onSubmit={handleSignUp}>
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
                }
            </FirebaseContext.Consumer>
        </div>
    )
}

export default SignUp