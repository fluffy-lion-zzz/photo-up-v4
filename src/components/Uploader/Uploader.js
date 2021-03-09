import React, { useState, useEffect } from 'react'
import './Uploader.css'
import app from 'firebase/app'
import 'firebase/storage'
import ChooseImage from './ChooseImage'
import ImageInfo from './ImageInfo'
import ImageLocation from './ImageLocation'
// import metaHandler from '../AddMeta/AddMeta'

const Uploader = () => {
    const storage = app.storage()
    const storageRef = storage.ref()
    const [newFolder, setNewFolder] = useState("")
    const [folder, setFolder] = useState([])
    const [folderOption, setFolderOption] = useState(false)
    const [imageName, setImageName] = useState("")
    const [imageFile, setImageFile] = useState("")
    const [folderSelected, setFolderSelected] = useState(false)
    //needed? \/ 
    const [folderDisplay, setFolderDisplay] = useState("")
    const [metaUploadRef, setMetaUploadRef] = useState("")

    // CAUTION CAUTION CAUTION
    //CHANGED TO FALSE FOR META TESTING
    //CAUTION CAUTION CAUTION
    const [step, setStep] = useState(true)

    const ViewFolder = () => {
        return( 
        <div>
            <h1>being stored in: {folderDisplay}</h1>
        </div>
        )
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
            console.log("complete")
        })
        .catch((error) => {
            console.log(error)
        })

    }

    const handleImageFile = (event) => {
        const image = event.target.files[0]
        setImageFile(imageFile => (image))
    }

    const handleFolderView = () => {
        folderOption ? setFolderOption(false) : setFolderOption(true)
    }

    //TESTING
    // ..TESTING
    // ....TESTING

    const AddMeta = () => {
        const [metaCounter, setMetaCounter] = useState("")
        const [items, setItems] = useState([])
        const [meta1, setMeta1] = useState("")

        const [meta, setMeta] = useState({
            customMetadata: {
                customMetaOne: "test",
                customMetaTwo: "",
                customMetaThree: "",
                customMetaFour: "",
                customMetaFive: ""
            }
        })
        const metaInput = (event) => {
            event.preventDefault()
            let metaOne = meta.customMetadata
            metaOne.customMetaOne = meta1
            console.log(metaOne)
            // setMeta({metaOne: meta1})
            // console.log(meta)
            metaUploadRef.updateMetadata(meta)
        }
        return (
            <div className="addMetaWrapper">
                <h2>meta wrapper</h2>
                <p>add up to 5 tags for people to search</p>
                {/* <button onClick={tester}>meta tester here</button> */}
                <input 
                    type="text"
                    // value={metaOne.customMetaOne}
                    onChange={(event) => {
                        setMeta1(event.target.value)
                        
                    }
                 } />
                 <p>{meta1}</p>
                 <button onClick={metaInput}>metatestet</button>
                 </div>
    )
}

    //TESTING
    // ..TESTING
    // ....TESTING

    useEffect(() => {
        getFolders()
        
    },[])
 
    
    return (
        <div className="uploaderWrapper">
            {step ? 
                <ImageLocation
                setStep={setStep}
                    setFolderDisplay={setFolderDisplay}
                    folderSelected={folderSelected} 
                    setFolderSelected={setFolderSelected}
                    folderOption={folderOption}
                    newFolder={newFolder}
                    setNewFolder={setNewFolder}
                    folder={folder}
                    handleFolderView={handleFolderView}
                    newFolderHandler={newFolderHandler}
                />
                :
                <div>
                <ViewFolder />
                 
                    <ChooseImage 
                        imageFile={imageFile}
                        setImageFile={setImageFile}
                    />
                <form 
                // onSubmit={handleUpload}
                >
                    <ImageInfo 
                    metaUploadRef={metaUploadRef}
                        funcTest={funcTest}
                        imageFile={imageFile}
                        imageName={imageName}
                        setImageName={setImageName}
                    />
                    <AddMeta />
                    <button onClick={() => setStep(true)}>go back</button>
                    <button type="submit">upload</button>
                </form>
                </div>
            }
            </div>
            
        // </div>
    )
}

export default Uploader