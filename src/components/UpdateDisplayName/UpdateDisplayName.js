import React, { useState } from 'react'
import app from 'firebase'

import 'firebase/auth'


const UpdateDisplayName = ({ flip, setFirebaseDisplayName }) => {
    const user = app.auth().currentUser
    const [inputDisplayName, setInputDisplayName] = useState("")
   
   
    const isInvalid = 
        inputDisplayName == "" ||
        inputDisplayName.length > 19 
       
    
    const updateName = (event) => {
        //why PD is needed?
        event.preventDefault()
        console.log(user)
        user.updateProfile({
            displayName: inputDisplayName
        })
        flip()
        setFirebaseDisplayName(inputDisplayName)
    }
    return (
        <>
            <p>update display name component</p>
            <form onSubmit={updateName}>
                <input 
                placeholder="new display name"
                value={inputDisplayName}
                type="text"
                onChange={(event) => {
                    setInputDisplayName(event.target.value)
                }}
                ></input>
                <h3> your new display name will be <b>{inputDisplayName}</b></h3>
                <button type="submit" disabled={isInvalid}>submit</button>
            </form>
            
        </>
    )
}

export default UpdateDisplayName