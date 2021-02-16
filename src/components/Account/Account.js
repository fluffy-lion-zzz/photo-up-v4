import React, { useState, useEffect } from 'react'
import './Account.css'
import 'firebase/auth'
import app from 'firebase'
import { getProfileData } from '../../services/userAccount'
import UpdateDisplayName from '../UpdateDisplayName/UpdateDisplayName'

const Account = () => {
    const [firebaseDisplayName, setFirebaseDisplayName] = useState("")
    const [update, setUpdate] = useState(false)
    const [show, setShow] = useState(true)
const profile = getProfileData()

const user = app.auth().currentUser

const flip = () => {
    if(show == false){
        setShow(true)
    }else {
        setShow(false)
    }
    if(update == true){
        setUpdate(false)
    }else{
        setUpdate(true)
    }
    
}
useEffect(() => {
    if(user.displayName == null){
      
        
        setFirebaseDisplayName("no display name...bit boring")
    }
}, [])

    return (
        <div className="accountWrapper">
            <h1>account</h1>
            <p>{profile.email}</p>
            <p>{firebaseDisplayName}</p>
            {show ? 
                <button 
                    onClick={
                        ()=>flip()
                    }
                    >update display name?</button>
                    : <></>
            }
            {update == false ? <p>not updating</p>
            : 
            
            <UpdateDisplayName flip={flip} setUpdate={setUpdate}/>
            }
        </div>
    )
}

export default Account