import React from 'react'
// import AddMeta from '../AddMeta/AddMeta'
import './ImageInfo.css'
const ImageInfo = ({ imageFile, imageName, setImageName }) => {
    // const handleImageName = (e) => {
    //     e.preventDefault()

    // }

    return (
        <div className="imageInfo">
            <h1>image info</h1>
            {
                imageFile ? 
                <p>original name : {imageFile.name}</p> :
                <></>
            }
            
            <p>do you want to rename?</p>
            <input 
                type="text"
                value={imageName}
                onChange={(e) => {setImageName(e.target.value)}}
            />
            <p>new file name: {imageName}</p>
            {/* <AddMeta metaUploadRef={props.metaUploadRef} imageInfo={props.imageFile}/> */}
        </div>
    )
}

export default ImageInfo