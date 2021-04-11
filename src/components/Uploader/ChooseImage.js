import React, { useState, useEffect } from 'react'
import app from 'firebase/app'
import 'firebase/storage'
import './ChooseImage.css'
import ImageInfo from './ImageInfo'
// import ImageInfo from './ImageInfo'


const ChooseImage = ({ imageFile, setImageFile, setImageName, handleUpload}) => {
    // const [imageFile, setImageFile] = useState("")
    const [imagePreview, setImagePreview] = useState("")

    const handleImageFile = (event) => {
        const image = event.target.files[0]
        let reader = new FileReader()
        let url = reader.readAsDataURL(image)
        reader.onloadend = (e) => {
            setImagePreview(reader.result)
        }
        setImageFile(imageFile => (image))
    }
    
    return (
        <div className="chooseImg">
            <form onSubmit={handleUpload}>
            <label for="file">choose image to upload</label>
                <input

                name="file"
                type="file"
                accept="image/*"
                
                onChange={handleImageFile}
                >
                    
                </input>
                <p>image</p>
                <img id="imagePreview" src={imagePreview} />
                {/* <ImageInfo imageFile={imageFile}/> */}
                <ImageInfo 
                    imageFile={imageFile}
                    setImageFile={setImageFile}
                    setImageName={setImageName}
                />
                <button type="submit">upload</button>
            </form>
        </div>
    )
}

export default ChooseImage