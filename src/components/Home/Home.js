import React, { useContext } from 'react'
import './Home.css'
import SomeComponent from '../SomeComponent'

// import {AuthContext} from '../../services/AuthContext'

const Home = () => {

// console.log(user)
    return (
        <div className="homeWrapper">
            <h1>home</h1>
            <SomeComponent />
            <div>
           {/* {authValue.user == null ? <p>not logged</p> :
           <p>user logged in</p>} */}
            </div>
        </div>
    )
}


export default Home