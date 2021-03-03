import React, { useState, useEffect } from 'react'
import './Uploader.css'
import app from 'firebase/app'
import 'firebase/storage'
import ChooseImage from './ChooseImage'
import ImageInfo from './ImageInfo'
import ImageLocation from './ImageLocation'


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
    const funcTest = () => {
        console.log("hit funcTest")
    }
    //TAKEN
    const isInvalid = 
        newFolder === String ||
        newFolder === "" 
    //TAKEN
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
            console.log("complete")
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
        // setFolder(folder[Math.floor(Math.random()*folder.length)])
        console.log(folder)
        
    },[])
    console.log(newFolder)
    return (
        <div className="uploaderWrapper">
            <form onSubmit={newFolderHandler}>
                <ImageLocation 
                    folderOption={folderOption}
                    newFolder={newFolder}
                    setNewFolder={setNewFolder}
                    folder={folder}
                    handleFolderView={handleFolderView}
                />
            </form>
                <div>   
                    <ChooseImage 
                        imageFile={imageFile}
                        setImageFile={setImageFile}
                    />
                <form onSubmit={handleUpload}>
                    <ImageInfo 
                        funcTest={funcTest}
                        imageFile={imageFile}
                        imageName={imageName}
                        setImageName={setImageName}
                    />
                    <button type="submit">upload</button>
                </form>
            </div>
            
        </div>
    )
}

export default Uploader