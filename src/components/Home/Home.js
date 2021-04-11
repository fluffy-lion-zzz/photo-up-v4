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
            <SomeComponent />
                <p>{user.email}</p>
            <div>
           {/* {authValue.user == null ? <p>not logged</p> :
           <p>user logged in</p>} */}
            </div>
            {/* <Uploader /> */}
             <ViewPhotos storageRef={storageRef} storage={storage}/>
           {/* <MetaSearch /> */}
        </div>
    )
}


export default Home