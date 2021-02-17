import React, { useState } from 'react'

import app from 'firebase/app'
import "firebase/storage"
// import { useState } from 'react'
import './ViewPhotos.css'

const ViewPhotos = () => {
const [imageUrl, setImageUrl] = useState("")
const [collected, setCollected] = useState("")

const tester = () => {
    app.storage().ref('prelude.jpg').getDownloadURL().then((url) => {
        setImageUrl(url)
    })
}
const lister = () => {
    console.log(app.storage().ref('test/').listAll())
    
}
    return(
        <div id="viewPhotos">
            <h3>view photos component</h3>
            <div id="individualImgWrapper">
                <img id="individualImg" src={imageUrl} />
            </div>
            <div>
                
            </div>
            <button onClick={tester}>test</button>
            <button onClick={lister}>lister</button>
        </div>
    )
}

export default ViewPhotos