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
import Loading from '../Loading/Loading'


const Uploader = ({ storageRef }) => {
    const [imageName, setImageName] = useState("")
    const [imageFile, setImageFile] = useState("")
    const [metaUploadRef, setMetaUploadRef] = useState("")
    const [imagePreview, setImagePreview] = useState("")
    const [currentFolder, setCurrentFolder] = useState("")
    const [reset, setReset] = useState(false)

    const [loading, setLoading] = useState(false)
    const [uploadComplete, setUploadComplete] = useState(false)
    const [showLocation, setShowLocation] = useState(true)
    const [showImage, setShowImage] = useState(false)
    const [showAddMeta, setShowAddMeta] = useState(false)
 
    const reseter = () => {
        setShowLocation(true)
        setShowAddMeta(false)
    }
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
            setUploadComplete(true)
            
        })
        
        .catch((error) => {
            console.log(error)
        })
        setImageFile(null)
        setImageName("")
        setCurrentFolder("")
        setShowImage(false)
        setShowAddMeta(true)
        
    }
    // useEffect(()=> {
    //     setLoading(true)
    // },[imageFile])
    
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
        { showLocation === true ? 
            <div className="imageLocation">
                <ImageLocation
                    storageRef={storageRef}
                    currentFolder={currentFolder}
                    setCurrentFolder={setCurrentFolder}
                    setShowLocation={setShowLocation}
                    setShowImage={setShowImage}
                />
            </div> 
            
            
            :
            <></>
        }
        {
            showImage === true ?
        
            <div className="selectImage">
                <div>
                    <h3>being saved in...</h3>
                    <h2>{currentFolder}</h2>
                </div>
                <div>
                    <button onClick={() => setShowLocation(true)}>select a new folder</button>
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
                        loading={loading}
                        storageRef={storageRef}
                        currentFolder={currentFolder}
                    />
                </div>
            </div>  
            :
            <></>
        }

        
        { showAddMeta ?

        <div>
            {uploadComplete ?
                <div className="addMeta">
                    <UpdateMeta metaUploadRef={metaUploadRef}
                    setReset={setReset}
                    setImagePreview={setImagePreview}
                    reset={reset}
                    reseter={reseter}
                    imagePreview={imagePreview}
                    setShowAddMeta={setShowAddMeta}
                    setShowImage={setShowImage}
                    />
                </div>
                :
                <Loading />
            }

        </div>
            :
            <></>
        }
        </div>
        
        </Router>  
    )
}

export default Uploader