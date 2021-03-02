import React, { useState, useEffect } from 'react'
import './Uploader.css'
import app from 'firebase/app'
import 'firebase/storage'
import ChooseImage from './ChooseImage'


const Uploader = () => {
    const storage = app.storage()
    const storageRef = storage.ref()
    const [newFolder, setNewFolder] = useState("")
    const [folder, setFolder] = useState([])
    const [folderOption, setFolderOption] = useState(false)

    const [imageName, setImageName] = useState("")

    //taken
    const [imageFile, setImageFile] = useState("")
    //taken
    
    const isInvalid = 
        newFolder === String ||
        newFolder === "" 

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

    const handleUpload = (event) => {
        event.preventDefault()
        let name = null
            imageName === "" ?
            name = imageFile.name :
            name = imageName
        const uploadRef = storageRef.child(`${newFolder}/${name}`)
        uploadRef.put(imageFile).then((snapshot) => {
            return "complete"
        })
        .catch((error) => {
            console.log(error)
        })

    }
    //taken
    const handleImageFile = (event) => {
        const image = event.target.files[0]
        setImageFile(imageFile => (image))
    }
    //taken
    const handleFolderView = () => {
        folderOption ? setFolderOption(false) : setFolderOption(true)
    }
    useEffect(() => {
        getFolders()
        
    },[])
    return (
        <div className="uploaderWrapper">
            <form onSubmit={newFolderHandler}>
                <div>
                    {!folderOption ?
                    <>
                        <input
                        value={newFolder}
                        onChange={(event) => {
                            setNewFolder(event.target.value)
                        }}
                        >
                        </input>
                        <h3>your creating a new folder called {newFolder}</h3>
                        <button disabled={isInvalid}>create new folder</button>
                        <p>or...</p><button onClick={handleFolderView}>add to existing folder</button>
                    </>
                :
                <div>
                    <select onChange={(event) => {
                        setNewFolder(event.target.value)
                    }} >{folder.map((item, index) => <option key={index}>{item}</option>)}</select>
                    <p>or...</p><button onClick={handleFolderView}>create new folder</button>
                    </div>
            }
                
                {/* <input
                value={imageName}
                onChange={(event) => {
                    setImageName(event.target.value)
                }}> */}
                {/* </input> */}
                
                </div>
            </form>
                <div>   
                    <ChooseImage />
                <form onSubmit={handleUpload}>
                    {/* taken */}
                    <label for="file">choose image to upload</label>
                    <input

                    name="file"
                    type="file"
                    accept="image/*"
                    
                    onChange={handleImageFile}
                    >
                    </input>
                    {/* taken */}
                    <p>original name : {imageFile.name}</p>
                    <p>do you want to rename?</p>
                    <input
                    type="text"
                    value={imageName}
                    onChange={(event) => {
                        setImageName(event.target.value.replace(/\s/g,''))
                    }}
                    >
                    
                    </input>
                    <p>new file name: {imageName}</p>
                    <button>image</button>
                </form>
                </div>
            
        </div>
    )
}

export default Uploader