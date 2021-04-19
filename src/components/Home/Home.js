import React, { useContext } from 'react'
import './Home.css'
import SomeComponent from '../SomeComponent'


// import {AuthContext} from '../../services/AuthContext'
import UserContext from '../../services/AuthContext'
import ViewPhotos from '../ViewPhotos/ViewPhotos'




const Home = ({ storageRef, storage }) => {
const user = useContext(UserContext)
// console.log(user)
    return (
        <div className="homeWrapper">
            <h1>home</h1>
                <p>{user.email}</p>
            <div>
            </div>
             <ViewPhotos storageRef={storageRef} storage={storage}/>
        </div>
    )
}


export default Home