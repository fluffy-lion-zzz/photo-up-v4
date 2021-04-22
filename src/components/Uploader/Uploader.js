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
import Button from 'react-bootstrap/Button'


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
    const [showImageInfo, setShowImageInfo] = useState(false)
 
    const reseter = () => {
        setShowLocation(true)
        setShowAddMeta(false)
        setShowAddMeta(false)
    }

    const locationImageViewer = () => {
        setShowLocation(true)
        setShowImage(false)
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
        setShowImageInfo(true)
        
    }

    return (
        <Router>
        <div className="uploaderWrapper">
            <h1>upload</h1>
        { showLocation === true ? 
            <div className="imageLocationCont">
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
                <div id="selectImageHeaders">
                    <h3>being saved in...</h3>
                    <h2>{currentFolder}</h2>
                    <div>
                        <Button size="sm" onClick={() => locationImageViewer()}>select a new folder</Button>
                    </div>
                </div>
                {!showImageInfo ? 
                <div>
                    <ImagePop 
                    handleImageFile={handleImageFile} 
                    imageFile={imageFile} 
                    setImageFile={setImageFile} 
                    reset={reset}
                    setShowImageInfo={setShowImageInfo}
                    />
                </div>
                :
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
                        setShowImageInfo={setShowImageInfo}
                    />
                </div>
                
                }
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