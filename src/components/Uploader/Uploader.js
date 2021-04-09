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
import AddMetaV2 from '../AddMeta/AddMetaV2'
import UpdateMeta from '../UpdateMeta/UpdateMeta'
import ViewPhotos from '../ViewPhotos/ViewPhotos'
// import metaHandler from '../AddMeta/AddMeta'
// import AddMeta from '../AddMeta/AddMeta'

const Uploader = ({ storageRef }) => {
    const [newFolder, setNewFolder] = useState("")
    const [folder, setFolder] = useState([])
    const [folderOption, setFolderOption] = useState(false)
    const [imageName, setImageName] = useState("")
    const [imageFile, setImageFile] = useState("")
    const [folderDisplay, setFolderDisplay] = useState("")
    const [metaUploadRef, setMetaUploadRef] = useState("")


    // const [storageRef, setStorageRef] = useState()

    // useEffect(() => {
    //     loadStorage()
    // }, [])

    // const loadStorage = async () => {
    //     const storage = await app.storage()
    //     setStorageRef(storage.ref())
    // }

    // const ViewFolder = ({ setShowImageLoc }) => {
    //     // const stepper = () => {
    //     //     setShowImageLoc(false)
    //     //     setShowSelectImage(true)
    //     // }
        
    //     return( 
    //     <div>
    //         <h1>being stored in: {folderDisplay}</h1>
    //         {/* <button onClick={stepper}>confirm</button> */}
    //     </div>
    //     )
    // }
    // const selectStepper = () => {
    //     setShowSelectImage(false)
    //     setShowAddMeta(true)
    // }

    const newFolderHandler = (event) => {
        event.preventDefault()
        // view where use will be saving 
        setFolderDisplay("")
        storageRef.child(newFolder)

        setFolder(folder => [...folder, newFolder])
        setFolderDisplay(newFolder)
        setNewFolder("")
        // setFolderSelected(true)
    }

    // const getFolders = () => {
    //     storageRef.list().then(res => {
    //         res.prefixes.map((prefixes) => {
    //             folder.includes(prefixes.name) ?
    //             console.log("folder name already included") :
    //             setFolder(folder => [...folder, prefixes.name])
    //         })
    //     })
    // }

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
    // const viewReset = () => {
    //     setShowImageLoc(true)
    //     setShowSelectImage(false)
    //     setShowAddMeta(false)
    //     return(
    //         <Redirect push to="/login" />
    //     )
    // }

    const handleImageFile = (event) => {
        const image = event.target.files[0]
        setImageFile(imageFile => (image))
    }

    // const handleFolderView = () => {
    //     folderOption ? setFolderOption(false) : setFolderOption(true)
    // }


    // useEffect(() => {
    //     getFolders()
        
    // },[])
 
    
    return (
        <Router>
        <div className="uploaderWrapper">
            <div>
                <ImageLocation
                    storageRef={storageRef}

                    
                    setFolderDisplay={setFolderDisplay}
                    folderOption={folderOption}
                    newFolder={newFolder}
                    setNewFolder={setNewFolder}
                    folder={folder}
                    // handleFolderView={handleFolderView}
                    newFolderHandler={newFolderHandler}
                />
                {/* <ViewFolder 
                // setShowImageLoc={setShowImageLoc}
                /> */}
            </div>
            
                <div>
                    {/* <ChooseImage 
                        imageFile={imageFile}
                        setImageFile={setImageFile}
                    /> */}

                {/* <form 
                onSubmit={handleUpload}
                > */}
                    {/* <ImageInfo 
                        metaUploadRef={metaUploadRef}
                        imageFile={imageFile}
                        imageName={imageName}
                        setImageName={setImageName}
                    /> */}
                    {/* <button type="submit" onClick={selectStepper}>upload</button> */}
                {/* </form> */}
                {/* <button type="submit">form handler</button> */}
                {/* </div> */}

                {/* <UpdateMeta metaUploadRef={metaUploadRef}/>
                <ViewPhotos 
                storageRef={storageRef}
                /> */}
            </div>
            </div>
        </Router>  
    )
}

export default Uploader