import React, { useState } from 'react'

import './ImageLocation.css'

const ImageLocation = ({ setFolderSelected, folderSelected,newFolderHandler, folderOption, newFolder, setNewFolder, handleFolderView, folder}) => {
    const [name, setName] = useState("")

    const FolderName = () => {
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
    const isInvalid = 
        newFolder === String ||
        newFolder === "" ||
        folder.includes(newFolder)

    return(
        <div>
            {/* {folderSelected ?  */}
            {/* <div>
            <p>folder has been selected</p>
            <p>{newFolder}</p>
            </div> : */}
        
            <div className="imageLocation">
            
                {/* <p>folder selected</p> */}
                
                {folderOption ?
                <div> 
                    <h1>image location</h1>
                    {/* {folderSelected ? */}
                    {/* <p>being save in {folder}</p> 
                : */}
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
                        {/* on this bit */}
                        {newFolder === "" ?
                        <p>no value</p> :
                        <p>{newFolder}</p>
                    }
                </div>
                :
                <div>
                    <div onClick={(event) => {
                            setName(event.target.value)
                        }} >{folder.map((item, index) => 
                        <button type="text" value={item} key={index}>{item}</button>
                        )}
                    </div>
                        
                        {/* {folderSelected ?  */}
                        <div>
                            {/* <p>being saved in {newFolder}</p> */}
                            <FolderName />
                        </div>
                        {/* : */}
                        <div>
                            
                            <p>or...</p>
                            <button onClick={handleFolderView}>create new folder</button>
                        </div>
                        {/* } */}
                        
                </div>
                }
            </div>
        {/* } */}
        </div>
    )
}

export default ImageLocation