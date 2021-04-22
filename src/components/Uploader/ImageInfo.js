import React, { useState, useEffect } from 'react'
import 'firebase/storage'
// import AddMeta from '../AddMeta/AddMeta'
import './ImageInfo.css'
import Button from 'react-bootstrap/Button'
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
            <h4>image info</h4>
            <div id="imageFileInfo">
            {imageFile ? 
            <p>original name : {imageFile.name}</p> :
            <></>
            }
            {imageNames.includes(imageFile.name) ?
            <div>
                <p>the original file name is taken, 
                if you dont the original file will be overwritten...just sayin</p>
            </div>
            :
            <></>
            }
            <p>enter a new name?</p>
            {/* <p>if you dont the original file will be overwritten...just sayin</p> */}
            <div id="infoInput">
                <input 
                    type="text"
                    value={nameInput}
                    onChange={(e) => {setNameInput(e.target.value)}}
                />
            
            <Button id="infoButton" disabled={isInvalid} onClick={handleName}>submit</Button>
            </div>
            {display !== "" ?
            <div>
                <h4>new file name: {display}</h4>
            </div>
            :
            <div></div>
            }
            </div>
        </div>
    )
}

export default ImageInfo