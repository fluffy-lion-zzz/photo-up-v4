import React from 'react'
// import AddMeta from '../AddMeta/AddMeta'
import './ImageInfo.css'
const ImageInfo = (props) => {


    return (
        <div className="imageInfo">
            <h1>image info</h1>
            <p>original name : {props.imageFile.name}</p>
            <p>do you want to rename?</p>
            <input 
                type="text"
                value={props.imageName}
                onChange={(event) => {
                    props.setImageName(event.target.value.replace(/\s/g,''))
                }}
            />
            <p>new file name: {props.imageName}</p>
            {/* <AddMeta metaUploadRef={props.metaUploadRef} imageInfo={props.imageFile}/> */}
        </div>
    )
}

export default ImageInfo