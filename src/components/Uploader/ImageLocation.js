import React, { useState, useEffect } from 'react'
import "firebase/storage"
import './ImageLocation.css'
import Button from 'react-bootstrap/Button'


const SelectFolder = ({ folders, setCurrentFolder, currentFolder, setShowLocation }) => {
const [newFolder, setNewFolder] = useState("")
 const isInvalid = 
        newFolder === "" ||
        newFolder === "--" ||
        currentFolder === "--" ||
        currentFolder === ""
        
    const newFolderHandler = (e) => {
        e.preventDefault()
        console.log(folders)
        if(folders.includes(newFolder)){
            console.log("folder already exists")
        } else {
            setCurrentFolder(newFolder)
            
        }        
    }
    

    return (
        <div id="locationSelect">
            <div>
                <select id="locationDropDown"
                    value={currentFolder}
                    onChange={(e) => setCurrentFolder(e.target.value)}
                >
                    <option>--</option>
                    {folders.map((folderNames)=> {
                        return <option value={folderNames}>{folderNames}</option>
                        })
                    }
                </select>
            </div>
            <div>
                <h3>create a new folder</h3>
                <form onSubmit={newFolderHandler}>
                    <input
                        value={newFolder}
                        onChange={(e) => setNewFolder(e.target.value)}
                    />
                    <button type="submit" disabled={isInvalid}>
                    add folder
                    </button>
                    {currentFolder === "" || currentFolder ==="--" ?
                        <p className="locationText">you have to select a folder yo</p> :
                        <div>
                        <br />
                        <br />
                        </div>}
                </form>
            </div>
        </div>
    )
}
const ImageLocation = ({ storageRef, currentFolder, setCurrentFolder, setShowLocation, setShowImage }) => {
    const [name, setName] = useState("")
    const [folders, setFolders] = useState([])

    const collect = () => {
        storageRef.list().then(res => {
            res.prefixes.map(name => {
                setFolders(folders => [...folders, name.name])
                // console.log(name)
            })
        
        })
    }
    useEffect(()=> {
        collect()
    },[])
    const next = () => {
        setShowLocation(false)
        setShowImage(true)
    }
    const isInvalid = 
    currentFolder === "--" ||
    currentFolder === ""

    return(


        <div className="imageLocation">
            <div id="locationHeaders">
                <h2>what folder...</h2>
                <h4>where do you want to store your image?</h4>
            </div>
            <SelectFolder 
                folders={folders} 
                setCurrentFolder={setCurrentFolder}
                currentFolder={currentFolder}
                setShowLocation={setShowLocation}
            />
            <div id="locationTo">
                <h3>uploading to {currentFolder}</h3>
                <Button disabled={isInvalid} onClick={() => next()}>next</Button>
            </div>
        </div>
    )
}

export default ImageLocation