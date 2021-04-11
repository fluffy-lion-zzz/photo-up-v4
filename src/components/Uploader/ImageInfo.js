import React from 'react'
// import AddMeta from '../AddMeta/AddMeta'
import './ImageInfo.css'
const ImageInfo = ({ imageFile, imageName, setImageName }) => {


    return (
        <div className="imageInfo">
            <h1>image info</h1>
            <p>original name : {imageFile.name}</p>
            <p>do you want to rename?</p>
            <input 
                type="text"
                value={imageName}
                onChange={(event) => {
                    setImageName(event.target.value)
                    // .replace(/\s/g,'')
                }}
            />
            <p>new file name: {imageName}</p>
            {/* <AddMeta metaUploadRef={props.metaUploadRef} imageInfo={props.imageFile}/> */}
        </div>
    )
}

export default ImageInfo