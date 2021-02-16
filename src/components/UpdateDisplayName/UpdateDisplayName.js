import React, { useState } from 'react'
import app from 'firebase'

import 'firebase/auth'
const UpdateDisplayName = ({ flip }) => {
    
    const [displayName, setDisplayName] = useState("")
   
   
    const isInvalid = 
        displayName == "" ||
        displayName.length > 19 
       
    
    const updateName = () => {
        const user = app.auth().currentUser
        console.log(user)
    }
    return (
        <>
            <p>update display name component</p>
            <form onSubmit={updateName}>
                <input 
                placeholder="new display name"
                value={displayName}
                type="text"
                onChange={(event) => {
                    setDisplayName(event.target.value)
                }}
                ></input>
                <h3> your new display name will be <b>{displayName}</b></h3>
                <button onClick={flip} disabled={isInvalid}>submit</button>
            </form>
            
        </>
    )
}

export default UpdateDisplayName