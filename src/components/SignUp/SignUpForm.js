import React , { useState } from 'react'
import './SignUp.css'
import { doRegister } from '../../services/userAccount'
// import { Redirect, Route } from 'react-router-dom'

const SignUpForm = () => {
    
    const [newEmail, setNewEmail] = useState("")
    const [newPassword, setNewPassword] = useState("")
    const [newPasswordTwo, setNewPasswordTwo] = useState("")

    const [newUser, setNewUser] = useState("")

    // const [error, setError] = useState(null)
    const reg = new RegExp("^[A-Za-z0-9._%+-]+@wearecodenation.com$")
    const isInvalid = 
        newPassword !== newPasswordTwo ||
        newPassword === "" ||
        newEmail === "" ||
        reg.test(newEmail) === false
        

    
    const handleSignUp = (event) => {
        event.preventDefault()
        console.log(newEmail, newPassword)
        doRegister(newEmail, newPassword)
        // let registerResult = doRegister
        // registerResult !== null ? <Redirect to="/home"/> : <Redirect to="/account" />
       
    }
        return (
            <div className="signUpFormCont">
                <form onSubmit={handleSignUp}>
                    {/* for username, not supported yet */}
                    {/* <div>
                        <input 
                        type="text"
                        value={newUser}
                        placeholder="your username"
                        onChange={(event) => {
                            setNewUser(event.target.value)
                        }}>
                        </input>
                        <p>{newUser}</p>
                    </div> */}
                    <div className="formSection">
                        <div className="formHeader">
                            <h2>enter your email...</h2>
                        </div>
                        <h4>"wearecodenation.com" only permitted</h4>
                        <input 
                        placeholder="enter your email"
                        type="text"
                        value={newEmail}
                        onChange={(event) => {
                            setNewEmail(event.target.value)
                        }}
                        ></input>
                        <div>
                            <p>signing up with...</p>
                            <h4>{newEmail}</h4>
                        </div>
                    </div>
                    <div className="formSection">
                        <div className="formHeader">
                            <h2>enter a password...</h2>
                        </div>
                        <p>password</p>
                        <input 
                        type="password"
                        value={newPassword}
                        onChange={(event) => {
                            setNewPassword(event.target.value)
                        }}
                        placeholder="password"
                        ></input>
                        
                    <p>confirm password</p>
                    <input 
                    type="password"
                    value={newPasswordTwo}
                    onChange={(event) => {
                        setNewPasswordTwo(event.target.value)
                    }}
                    placeholder="password two">
                    </input>
                    </div>
                    <div className="signUpSubmit">
                        <button disabled={isInvalid}>submit</button>
                    </div>
                </form>
            </div>
        )
}

export default SignUpForm