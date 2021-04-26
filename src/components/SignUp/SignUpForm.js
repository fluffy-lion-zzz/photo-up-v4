import React , { useState,  } from 'react'
import './SignUp.css'
import { doRegister } from '../../services/userAccount'
// import { Redirect, Route } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import { useHistory } from 'react-router'
// import 'bootstrap/dist/css/bootstrap.min.css'
const SignUpForm = () => {
    
    const [newEmail, setNewEmail] = useState("")
    const [newPassword, setNewPassword] = useState("")
    const [newPasswordTwo, setNewPasswordTwo] = useState("")

    const [newUser, setNewUser] = useState({})

    // const [error, setError] = useState(null)
    
    const reg = new RegExp("^[A-Za-z0-9._%+-]+@wearecodenation.com$")
    const isInvalid = 
        newPassword !== newPasswordTwo ||
        newPassword === "" ||
        newEmail === "" ||
        reg.test(newEmail) === false
        

    const history = useHistory()

    const handleSignUp = async (event) => {
        event.preventDefault()
        try {
            await doRegister(newEmail, newPassword, setNewUser)
            newUser  ?
            history.push("/") :
            console.log("error")
            } catch(error){
            alert(error)
        }
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
                            <h3>enter your email...</h3>
                        </div>
                        <h4>"wearecodenation.com" only permitted</h4>
                        <input 
                        className="signUpInput"
                        placeholder="enter your email"
                        type="text"
                        value={newEmail}
                        onChange={(event) => {
                            setNewEmail(event.target.value)
                        }}
                        ></input>
                        <div id="displayEmail">
                            <p>signing up with...</p>
                            <div id="emailEntry">
                                <h4>{newEmail}</h4>
                            </div>
                        </div>
                    </div>
                    <div className="formSection">
                        <div className="formHeader">
                            <h3>enter a password...</h3>
                        </div>
                        <h4>password</h4>
                        <input 
                        className="signUpInput"
                        type="password"
                        value={newPassword}
                        onChange={(event) => {
                            setNewPassword(event.target.value)
                        }}
                        placeholder="password"
                        ></input>
                        
                    <h4>confirm password</h4>
                    <input 
                    className="signUpInput"
                    type="password"
                    value={newPasswordTwo}
                    onChange={(event) => {
                        setNewPasswordTwo(event.target.value)
                    }}
                    placeholder="password two">
                    </input>
                    </div>
                    <div className="signUpSubmit">
                        <Button size="lg" type="submit" disabled={isInvalid}>submit</Button>
                    </div>
                </form>
            </div>
        )
}

export default SignUpForm