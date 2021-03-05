import React, { useState } from 'react'

import './ImageLocation.css'

const ImageLocation = ({ folderOption, newFolder, setNewFolder, handleFolderView, folder}) => {
    const [name, setName] = useState("")

    const FolderName = () => {
        console.log("selected: ", name)
        setNewFolder(name)
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
    const isInvalid = 
        newFolder === String ||
        newFolder === "" 

    return(
        <div className="imageLocation">
            {folderOption ?
            <div> 
                <h1>image location</h1>
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
            </div>
            :
            <div>
                <div onClick={(event) => {
                        setName(event.target.value)
                    }} >{folder.map((item, index) => 
                    <button type="text" value={item} key={index}>{item}</button>
                    )}
                </div>
                        <FolderName />
                    <p>or...</p><button onClick={handleFolderView}>create new folder</button>
            </div>
            }
        </div>
    )
}

export default ImageLocation