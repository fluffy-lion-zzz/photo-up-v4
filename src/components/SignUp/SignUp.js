import React, { useState } from 'react'
import './SignUp.css'
import { FirebaseContext } from '../Firebase'
// import { Link, withRouter } from 'react-router-dom'
import SignUpForm from './SignUpForm'

// import { withFirebase } from '../Firebase'
// import * as ROUTES from '../../services/routes'
const SignUp = () => {


    
    return (
        <div className="signUpWrapper">
            <h1>sign up</h1>
            <FirebaseContext.Consumer>{firebase =>
                <SignUpForm  firebase={firebase} />
                 }
            </FirebaseContext.Consumer> 
            {/* {registerResult ?
            <div>successful</div>
            : <div>unable to process</div>
            } */}
        </div>
    )
        
}
// const SignUpLink = () => (
//     <p>
//         sign up now! <Link to={ROUTES.SIGN_UP}>SIGN UP</Link>
//     </p>
// )
// const SignUpPage = withRouter(withFirebase(SignUpForm))

export default SignUp