import React, { useState, useEffect } from 'react'
import 'firebase/storage'
// import AddMeta from '../AddMeta/AddMeta'
import './ImageInfo.css'
const ImageInfo = ({ imageFile, imageName, setImageName, storageRef, currentFolder}) => {
    const [imageNames, setImageNames] = useState([])
    const [nameInput, setNameInput] = useState("")

    const handleName = (e) => {
        e.preventDefault()
        setImageName(nameInput)
        // setImageName(nameInput)
    }
    const collect = () => {
        storageRef.child(`${currentFolder}`)
        .list()
        .then(res => {
            res.items.map((item) => {
                setImageNames(imageNames => [...imageNames, item.name])
            })

        })
        
    }

    useEffect(()=> {
        setImageNames([])
        collect()
        
    },[currentFolder])

    return (
        <div className="imageInfo">
            {/* {imageNames.map(names => {
                return <p>{names}</p>
            })} */}
            <h1>image info</h1>
            {
                imageFile ? 
                <p>original name : {imageFile.name}</p> :
                <></>
            }
            
            <p>do you want to rename?</p>
           
                <input 
                    type="text"
                    value={nameInput}
                    onChange={(e) => {setNameInput(e.target.value)}}
                />
                <button onClick={handleName}>submit new name</button>
            
            {
            //    return <p>{name}</p>
                imageNames.includes(imageName) || imageNames.includes(imageFile.name)  ?
                
                <div>
                    <p>there's already an image with this name</p>
                    <p>if you upload with this name it with overwrite the original with that name image</p>
                    <p>are you gonna do it?</p>
                </div>
                
                :
                <p>huh?</p>

            }
            <p>new file name: {nameInput}</p>
            {/* <AddMeta metaUploadRef={props.metaUploadRef} imageInfo={props.imageFile}/> */}
        </div>
    )
}

export default ImageInfo