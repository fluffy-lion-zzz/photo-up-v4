import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import './Uploader.css'
// import app from 'firebase/app'
import 'firebase/storage'
import ChooseImage from './ChooseImage'
// import ImageInfo from './ImageInfo'
import ImageLocation from './ImageLocation'

import UpdateMeta from '../UpdateMeta/UpdateMeta'
import ImagePop from './ImagePop'


const Uploader = ({ storageRef }) => {
    const [imageName, setImageName] = useState("")
    const [imageFile, setImageFile] = useState("")
    const [metaUploadRef, setMetaUploadRef] = useState("")
    const [imagePreview, setImagePreview] = useState("")
    const [currentFolder, setCurrentFolder] = useState("")
    const [reset, setReset] = useState(false)
 
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
        setImageFile(null)
        setImageName("")
        setCurrentFolder("")
    }
    
    const handleImageFile = (event) => {

        event.preventDefault()

        const image = imageFile
        let reader = new FileReader()
        
        let url = reader.readAsDataURL(image)
        reader.onloadend = (e) => {
            setImagePreview(reader.result)
        }
        
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
            </div>
            <div>
                <h3>being saved in...</h3>
                <h2>{currentFolder}</h2>
            </div>
            <div>
                <ImagePop 
                handleImageFile={handleImageFile} 
                imageFile={imageFile} 
                setImageFile={setImageFile} 
                reset={reset}
                />
            </div>    
            <div>
                <ChooseImage 
                    imageFile={imageFile}
                    setImageFile={setImageFile}
                    setImageName={setImageName}
                    imageName={imageName}
                    handleUpload={handleUpload}
                    handleImageFile={handleImageFile}
                    imagePreview={imagePreview}
                    
                />
                <UpdateMeta metaUploadRef={metaUploadRef}
                setReset={setReset}
                setImagePreview={setImagePreview}
                reset={reset}
                />
            </div>
            </div>
        </Router>  
    )
}

export default Uploader