import React from 'react'

import './ImageLocation.css'

const ImageLocation = ({folderOption, newFolder, setNewFolder, handleFolderView, folder}) => {

    const isInvalid = 
        newFolder === String ||
        newFolder === "" 

    return(
        <div className="imageLocation">
            {!folderOption ?
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
                <select onChange={(event) => {
                        setNewFolder(event.target.value)
                    }} >{folder.map((item, index) => <option key={index}>{item}</option>)}</select>
                    <p>or...</p><button onClick={handleFolderView}>create new folder</button>
                   

            </div>
            }
        </div>
    )
}

export default ImageLocation