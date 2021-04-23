import React, { useContext } from 'react'
import { doLogOut } from '../../services/userAccount'
import UserContext from '../../services/AuthContext'
import Button from 'react-bootstrap/Button'

const Logout = () => {
    const user = useContext(UserContext)
    return(
        <div> 
            <Button size="lg" onClick={doLogOut}>Logout</Button>
        </div>
    )
}


export default Logout