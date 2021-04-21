import React from 'react'
import './SignUp.css'
import { FirebaseContext } from '../Firebase'

import SignUpForm from './SignUpForm'

const SignUp = () => {


    
    return (
        <div className="signUpWrapper">
            <h1>sign up...</h1>
            <FirebaseContext.Consumer>{firebase =>
                <SignUpForm  firebase={firebase} />
                 }
            </FirebaseContext.Consumer> 

        </div>
    )
        
}


export default SignUp