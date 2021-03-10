import React, { useState } from 'react'

import './ImageLocation.css'

const ImageLocation = ({ setStep, setFolderDisplay, newFolderHandler, folderOption, newFolder, setNewFolder, handleFolderView, folder}) => {
    const [name, setName] = useState("")

    const FolderName = () => {
        // event.preventDefault()
        console.log("selected: ", name)
        setNewFolder(name)
        // setFolderSelected(true)
        return (
            <div>
            {name === "" ||
            name === " " ||
            name === undefined ?
            <div><p>please select a folder</p></div> :
            <div><p>you selected {name}</p></div> 
            }
            </div>
        )
        
    }

    const FolderForm = () => {
        return (
        <form onSubmit={newFolderHandler}>
            <input
                value={newFolder}
                onChange={(event) => {
                    setNewFolder(event.target.value)
                    
                }}
                >
                </input>
                <h3>your creating a new folder called {newFolder}</h3>
                    {folder.includes(newFolder) ? 
                    <p>this folder has already been created</p> :
                    <></>
                    }
                <button  disabled={isInvalid}>create new folder</button>
                <p>or...</p><button onClick={handleFolderView}>add to existing folder</button>
            </form>
        )
    }

    const FolderConfirm = () => {
        return (
            <div>
                <button onClick={setStep(false)}>continue to upload</button>
            </div>
        )
    }

    const FolderArrItems = () => {
        return (
            <div onClick={(event) => {
                setName(event.target.value)
                setFolderDisplay(event.target.value)
            }} >{folder.map((item, index) => 
            <button type="text" value={item} key={index}>{item}</button>
            )}
        </div>
        )
    }
    const isInvalid = 
        newFolder === String ||
        newFolder === "" ||
        folder.includes(newFolder)

    return(
        <div>
            
            <div className="imageLocation">
            <h1>image location</h1>
                {folderOption ?
                <div> 
                    <FolderForm />
                    {newFolder === "" ?
                    <p>no value</p> :
                    <p>{newFolder}</p>
                    }
                </div>
                :
                <div>
                    <FolderArrItems />
                    <FolderName />
                    <div>
                        <p>or...</p>
                        <button onClick={handleFolderView}>create new folder</button>
                    </div>
                </div>
                }
                {/* {name !== "" ?
                <FolderConfirm /> :
                <></>
                } */}
            </div>
        </div>
    )
}

export default ImageLocation