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
    const [imageName, setImageName] = useState("")

    const [imageFile, setImageFile] = useState("")

    const isInvalid = 
        newFolder === String ||
        newFolder === "" 

    // const [imageFile, setImageFile] = useState({
    //     image: null,
    //     url: "",
    //     progress: 0 
    // })
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

    const handleUpload = () => {
        const uploadTask = storageRef(`${folderSelect}/`)
    }
    const handleImageFile = (event) => {
        // event.preventDefault()
        const image = event.target.files[0]
        setImageFile(imageFile => (image))
        // console.log(image)
    }
    useEffect(() => {
        getFolders()
        
    },[])
    console.log("imageFile;" , imageFile)
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
                <input
                value={imageName}
                onChange={(event) => {
                    setImageName(event.target.value)
                }}>
                </input>
                <button disabled={isInvalid}>create new folder</button>
                </form>
                <div>    
                    <form >
                    <label for="file">choose image to upload</label>
                    <input

                    name="file"
                    type="file"
                    accept="image/*"
                    
                    onChange={handleImageFile}
                    >
                    </input>
                    <button>image</button>
                    </form>
                </div>
            
        </div>
    )
}

export default Uploader