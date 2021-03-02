import React, { useState, useEffect } from 'react'
import app from 'firebase/app'
import 'firebase/storage'
import './ChooseImage.css'

const ChooseImage = () => {
    const [imageFile, setImageFile] = useState("")
    const [imagePreview, setImagePreview] = useState("")

    const handleImageFile = (event) => {
        const image = event.target.files[0]
        
        
            let reader = new FileReader()
            let url = reader.readAsDataURL(image)
            reader.onloadend = (e) => {
                setImagePreview(reader.result)
            }
            
            // console.log(url)
    
        setImageFile(imageFile => (image))
    }
    return (
        <div>
            <h2>choose test component</h2>
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
            <h2>choose test component</h2>
        </div>
    )
}

export default ChooseImage