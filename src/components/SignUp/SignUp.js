import React, { useState } from 'react'
import './SignUp.css'
import { FirebaseContext } from '../Firebase'
import SignUpForm from './SignUpForm'

const SignUp = () => {


    
    return (
        <div className="signUpWrapper">
            <h1>sign up</h1>
            <FirebaseContext.Consumer>{firebase =>
                <SignUpForm />
                }
            </FirebaseContext.Consumer>
            {/* {registerResult ?
            <div>successful</div>
            : <div>unable to process</div>
            } */}
        </div>
    )
        
}

export default SignUp