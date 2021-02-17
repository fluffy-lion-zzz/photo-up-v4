import React, { useState } from 'react'
import app from 'firebase/app'
import "firebase/storage"
// import { useState } from 'react'

const ViewPhotos = () => {
const [imageUrl, setImageUrl] = useState("")

const tester = () => {
    app.storage().ref('prelude.jpg').getDownloadURL().then((url) => {
        setImageUrl(url)
    })
    
}

    return(
        <div>
            <h3>view photos component</h3>
            <img src={imageUrl} />
            <button onClick={tester}>test</button>
        </div>
    )
}

export default ViewPhotos