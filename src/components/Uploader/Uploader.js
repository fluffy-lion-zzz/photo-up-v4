import React, { useState, useEffect } from 'react'
import './Uploader.css'
import app from 'firebase/app'
import 'firebase/storage'


const Uploader = () => {
    const storage = app.storage()
    const storageRef = storage.ref()
    const [newFolder, setNewFolder] = useState("")
    const [folder, setFolder] = useState([])
    const [folderSelect, setFolderSelect] = useState("")
    const [option, setOption] = useState(false)

    const isInvalid = 
        newFolder === String ||
        newFolder === "" 

    const [image, setImage] = useState({
        image: null,
        url: "",
        progress: 0 
    })
    const newFolderHandler = (event) => {
        event.preventDefault()
        storageRef.child(newFolder)
        setNewFolder("")
    }
    const getFolders = () => {
        storageRef.list().then(res => {
            res.prefixes.map((prefixes) => {
                folder.includes(prefixes.name) ?
                console.log("folder name already included") :
                setFolder(folder => [...folder, prefixes.name])
            })
        })
    }
    useEffect(() => {
        getFolders()
        
    },[])
    console.log(folder)
    return (
        <div className="uploaderWrapper">
            <form onSubmit={newFolderHandler}>
                <input
                value={newFolder}
                onChange={(event) => {
                    setNewFolder(event.target.value)
                }}
                >
                </input>
                <select>{folder.map((item, index) => <option key={index}>{item}</option>)}</select>
                <h3>your creating a new folder called {newFolder}</h3>
                <button disabled={isInvalid}>create new folder</button>
            </form>
        </div>
    )
}

export default Uploader