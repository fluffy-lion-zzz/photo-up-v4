import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom'
import './Uploader.css'
// import app from 'firebase/app'
import 'firebase/storage'
import ChooseImage from './ChooseImage'
// import ImageInfo from './ImageInfo'
import ImageLocation from './ImageLocation'
// import AddMeta from '../AddMeta/AddMeta'

// import * as ROUTES from '../../services/routes'
// import AddMetaV2 from '../AddMeta/AddMetaV2'
import UpdateMeta from '../UpdateMeta/UpdateMeta'
// import ViewPhotos from '../ViewPhotos/ViewPhotos'
// import metaHandler from '../AddMeta/AddMeta'
// import AddMeta from '../AddMeta/AddMeta'

const Uploader = ({ storageRef }) => {
    const [imageName, setImageName] = useState("")
    const [imageFile, setImageFile] = useState("")
    const [metaUploadRef, setMetaUploadRef] = useState("")

    const [currentFolder, setCurrentFolder] = useState("--")

    const handleUpload = (event) => {
        event.preventDefault()
        let name = null
            imageName === "" ?
            name = imageFile.name :
            name = imageName
        const uploadRef = storageRef.child(`${currentFolder}/${name}`)
        setMetaUploadRef(uploadRef)
        uploadRef.put(imageFile).then((snapshot) => {
            console.log(imageFile)
        })
        
        .catch((error) => {
            console.log(error)
        })

    }

    const handleImageFile = (event) => {
        const image = event.target.files[0]
        setImageFile(imageFile => (image))
    }

    return (
        <Router>
        <div className="uploaderWrapper">
            <div>
                <ImageLocation
                    storageRef={storageRef}
                    currentFolder={currentFolder}
                    setCurrentFolder={setCurrentFolder}
                />
                <h1>{currentFolder}</h1>
            </div>
            
            <div>
                <ChooseImage 
                    imageFile={imageFile}
                    setImageFile={setImageFile}
                    setImageName={setImageName}
                    handleUpload={handleUpload}
                />
                <UpdateMeta metaUploadRef={metaUploadRef}/>
            </div>
            </div>
        </Router>  
    )
}

export default Uploader