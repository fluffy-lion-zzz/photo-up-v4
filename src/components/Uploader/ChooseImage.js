import React, { useState } from 'react'
import 'firebase/storage'
import './ChooseImage.css'
import ImageInfo from './ImageInfo'
import ImagePop from './ImagePop'
// import ImageInfo from './ImageInfo'


const ChooseImage = ({ 
    imageFile, 
    setImageFile, 
    setImageName,
    imageName, 
    handleUpload,
    // handleImageFile,
    imagePreview,
    }) => {
    
    return (
        <div className="chooseImg">
            <form onSubmit={handleUpload}>
                <label for="file">select a new image</label>
                <img id="imagePreview" src={imagePreview} />
                {/* <ImageInfo imageFile={imageFile}/> */}
                <ImageInfo 
                    imageFile={imageFile}
                    setImageFile={setImageFile}
                    setImageName={setImageName}
                    imageName={imageName}
                />
                <button type="submit">upload</button>
            </form>
        </div>
    )
}

export default ChooseImage