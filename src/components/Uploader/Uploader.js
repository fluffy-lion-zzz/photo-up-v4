import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
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
import ImagePop from './ImagePop'
// import ViewPhotos from '../ViewPhotos/ViewPhotos'
// import metaHandler from '../AddMeta/AddMeta'
// import AddMeta from '../AddMeta/AddMeta'

const Uploader = ({ storageRef }) => {
    const [imageName, setImageName] = useState("")
    const [imageFile, setImageFile] = useState("")
    const [metaUploadRef, setMetaUploadRef] = useState("")
    const [imagePreview, setImagePreview] = useState("")
    const [currentFolder, setCurrentFolder] = useState("--")
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
        setCurrentFolder("--")
        setImagePreview("")
    }
    
    const handleImageFile = (event) => {
        // console.log("handleimagefile hit")
        event.preventDefault()
        // if(reset){
        //     return null
        // }
       
        const image = imageFile
        // console.log(image)
        let reader = new FileReader()
        
        let url = reader.readAsDataURL(image)
        reader.onloadend = (e) => {
            setImagePreview(reader.result)
        }
       
        // event.target.files[0] = null
        
        setImageFile(imageFile => (image))
    
        
    }
    // useEffect(() => {
        
    // },[uploaded])

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
                <UpdateMeta metaUploadRef={metaUploadRef}/>
            </div>
            </div>
        </Router>  
    )
}

export default Uploader