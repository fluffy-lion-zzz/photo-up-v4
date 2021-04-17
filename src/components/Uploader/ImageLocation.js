import React, { useState, useEffect } from 'react'
import "firebase/storage"
import './ImageLocation.css'


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
        <div>
            <select
                value={currentFolder}
                onChange={(e) => setCurrentFolder(e.target.value)}
            >
                <option>--</option>
                {folders.map((folderNames)=> {
                    return <option value={folderNames}>{folderNames}</option>
                    })
                }
            </select>
            <h2>new folder</h2>
            <form onSubmit={newFolderHandler}>
                <input
                    value={newFolder}
                    onChange={(e) => setNewFolder(e.target.value)}
                />
                <button type="submit" disabled={isInvalid}>
                add folder
                </button>
                {currentFolder === "" || currentFolder ==="--" ?
                    <p>you have to select a folder yo</p> :
                    <></>}
            </form>
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
            <h2>new folder</h2>
            <SelectFolder 
                folders={folders} 
                setCurrentFolder={setCurrentFolder}
                currentFolder={currentFolder}
                setShowLocation={setShowLocation}
            />
            <p>{currentFolder}</p>
            <h3>uploading to {currentFolder}</h3>
            <button disabled={isInvalid} onClick={() => next()}>next</button>
        </div>
    )
}

export default ImageLocation