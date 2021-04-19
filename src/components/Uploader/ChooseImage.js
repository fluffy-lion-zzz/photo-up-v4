import React, { useState } from 'react'
import 'firebase/storage'
import './ChooseImage.css'
import ImageInfo from './ImageInfo'
import ImagePop from './ImagePop'
import Loading from '../Loading/Loading'
// import ImageInfo from './ImageInfo'


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
    currentFolder
    }) => {
    
    const isInvalid = imageFile === "" || imageFile === null

    return (
        <div className="chooseImg">
            <form onSubmit={handleUpload}>
                <div>
                    { loading ?
                    <Loading /> :
                    <img id="imagePreview" src={imagePreview} />
                    }
                </div>
                {/* <ImageInfo imageFile={imageFile}/> */}
                <ImageInfo 
                    imageFile={imageFile}
                    setImageFile={setImageFile}
                    setImageName={setImageName}
                    imageName={imageName}
                    storageRef={storageRef}
                    currentFolder={currentFolder}
                />
                <button disabled={isInvalid} type="submit">upload</button>
            </form>
        </div>
    )
}

export default ChooseImage