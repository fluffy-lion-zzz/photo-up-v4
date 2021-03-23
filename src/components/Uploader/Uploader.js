import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom'
import './Uploader.css'
import app from 'firebase/app'
import 'firebase/storage'
import ChooseImage from './ChooseImage'
import ImageInfo from './ImageInfo'
import ImageLocation from './ImageLocation'
import AddMeta from '../AddMeta/AddMeta'

import * as ROUTES from '../../services/routes'
// import metaHandler from '../AddMeta/AddMeta'
// import AddMeta from '../AddMeta/AddMeta'

const Uploader = () => {
    const storage = app.storage()
    const storageRef = storage.ref()
    const [newFolder, setNewFolder] = useState("")
    const [folder, setFolder] = useState([])
    const [folderOption, setFolderOption] = useState(false)
    const [imageName, setImageName] = useState("")
    const [imageFile, setImageFile] = useState("")
    const [folderSelected, setFolderSelected] = useState(false)
    const [folderDisplay, setFolderDisplay] = useState("")
    const [metaUploadRef, setMetaUploadRef] = useState("")
    const [showImageLoc, setShowImageLoc] = useState(true)
    const [showSelectImage, setShowSelectImage] = useState(false)
    const [showAddMeta, setShowAddMeta] = useState(false)

    const ViewFolder = ({ setShowImageLoc }) => {
        const stepper = () => {
            setShowImageLoc(false)
            setShowSelectImage(true)
        }
        
        return( 
        <div>
            <h1>being stored in: {folderDisplay}</h1>
            <button onClick={stepper}>confirm</button>
        </div>
        )
    }
    const selectStepper = () => {
        setShowSelectImage(false)
        setShowAddMeta(true)
    }
    const funcTest = () => {
        console.log("hit funcTest")
    }

    const newFolderHandler = (event) => {
        event.preventDefault()
        // view where use will be saving 
        setFolderDisplay("")
        storageRef.child(newFolder)

        setFolder(folder => [...folder, newFolder])
        setFolderDisplay(newFolder)
        setNewFolder("")
        setFolderSelected(true)
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
        setMetaUploadRef(uploadRef)
        uploadRef.put(imageFile).then((snapshot) => {
            console.log(imageFile)
        })
        
        .catch((error) => {
            console.log(error)
        })

    }
    const viewReset = () => {
        setShowImageLoc(true)
        setShowSelectImage(false)
        setShowAddMeta(false)
        return(
            <Redirect push to="/login" />
        )
    }

    const handleImageFile = (event) => {
        const image = event.target.files[0]
        setImageFile(imageFile => (image))
    }

    const handleFolderView = () => {
        folderOption ? setFolderOption(false) : setFolderOption(true)
    }


    useEffect(() => {
        getFolders()
        
    },[])
 
    
    return (
        <Router>
        <div className="uploaderWrapper">

            {/* commented out for testing */}

            {/* {showImageLoc ? */}

            {/* commented out for testing */}

            <div>
                <ImageLocation
                    setFolderDisplay={setFolderDisplay}
                    folderOption={folderOption}
                    newFolder={newFolder}
                    setNewFolder={setNewFolder}
                    folder={folder}
                    handleFolderView={handleFolderView}
                    newFolderHandler={newFolderHandler}
                />
                
                
                <ViewFolder setShowImageLoc={setShowImageLoc}/>
            </div>

                {/* commented out for testing */}

                 {/* :
                 <></>
                }
                {showSelectImage ?  */}

                {/* commented out for testing */}
                <div>
                    <ChooseImage 
                        imageFile={imageFile}
                        setImageFile={setImageFile}
                    />
                <form 
                onSubmit={handleUpload}
                >
                    <ImageInfo 
                    metaUploadRef={metaUploadRef}
                        funcTest={funcTest}
                        imageFile={imageFile}
                        imageName={imageName}
                        setImageName={setImageName}
                    />
                    <button type="submit" onClick={selectStepper}>upload</button>
                </form>
                

                <button type="submit">form handler</button>
                </div>

                {/* commented out for testing */}

                {/* :
                <></>
                }
                {showAddMeta ? */}

                {/* commented out for testing */}


                <AddMeta viewReset={viewReset} setShowAddMeta={setShowAddMeta} photoRef={metaUploadRef}/>

                {/* commented out for testing */}

                {/* :
                <></>
                } */}

                {/* commented out for testing */}
                
            </div>
        </Router>  
    )
}

export default Uploader