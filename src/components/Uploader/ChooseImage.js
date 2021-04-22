import React, { useState } from 'react'
import 'firebase/storage'
import './ChooseImage.css'
import ImageInfo from './ImageInfo'
import ImagePop from './ImagePop'
import Loading from '../Loading/Loading'
import Button from 'react-bootstrap/Button'


const ChooseImage = ({ 
    imageFile, 
    setImageFile, 
    setImageName,
    imageName, 
    handleUpload,
    // handleImageFile,
    storageRef,
    imagePreview,
    loading,
    currentFolder,
    setShowImageInfo
    }) => {
    
    const isInvalid = imageFile === "" || imageFile === null

    return (
        <div className="chooseImg">
            <div id="changeImg">
                <div id="changeImgText">
                    <p>select a differnt image?</p>
                    <Button size="sm" onClick={()=> setShowImageInfo(false)}>change image</Button>
                </div>
                <div id="previewCont">
                    { loading ?
                    <Loading /> :
                    <img id="imagePreview" src={imagePreview} />
                    }
                </div>
            </div>
            <form onSubmit={handleUpload}>
                
                {/* <ImageInfo imageFile={imageFile}/> */}
                <ImageInfo 
                    imageFile={imageFile}
                    setImageFile={setImageFile}
                    setImageName={setImageName}
                    imageName={imageName}
                    storageRef={storageRef}
                    currentFolder={currentFolder}
                />
                <div className="uploadCont">
                    <Button size="lg" disabled={isInvalid} type="submit">upload</Button>
                </div>
            </form>
        </div>
    )
}

export default ChooseImage