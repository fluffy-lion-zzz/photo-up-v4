import React, { useState, useEffect } from 'react'
import 'firebase/storage'
// import AddMeta from '../AddMeta/AddMeta'
import './ImageInfo.css'
const ImageInfo = ({ imageFile, imageName, setImageName, storageRef, currentFolder}) => {
    const [imageNames, setImageNames] = useState([])
    const [nameInput, setNameInput] = useState("")
    const [display, setDisplay] = useState("")

    const isInvalid = imageNames.includes(nameInput) || nameInput === ""
    const handleName = (e) => {
        e.preventDefault()
        setDisplay(nameInput)
        setImageName(nameInput)
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
            <h1>image info</h1>
            {imageFile ? 
            <p>original name : {imageFile.name}</p> :
            <></>
            }
            {imageNames.includes(imageFile.name) ?
            <div>
                <p>the original file name is taken</p>

            </div>
            :
            <></>
            }
            <p>do you want to enter a new name?</p>
            <p>if you dont the original file will be overwritten...just sayin</p>
            <input 
                type="text"
                value={nameInput}
                onChange={(e) => {setNameInput(e.target.value)}}
            />
            <button disabled={isInvalid} onClick={handleName}>submit new name</button>
            {display !== "" ?
            <div>
                <p>new file name: {display}</p>
            </div>
            :
            <div></div>
            }
        </div>
    )
}

export default ImageInfo