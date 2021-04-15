import React, { useState, useEffect } from 'react'
import "firebase/storage"
import './ImageLocation.css'


const SelectFolder = ({ folders, setCurrentFolder, currentFolder }) => {
const [newFolder, setNewFolder] = useState("")
 const isInvalid = 
        newFolder === String ||
        newFolder === "" ||
        newFolder === "--" ||
        currentFolder === "--" ||
        currentFolder === ""
        
    const newFolderHandler = (e) => {
        e.preventDefault()
        console.log(folders)
        if(folders.includes(newFolder)){
            console.log("folder already exists")
        } else {
            setCurrentFolder(newFolder)
        }        
    }

    return (
        <div>
            <select
                value={currentFolder}
                onChange={(e) => setCurrentFolder(e.target.value)}
            >
                <option>--</option>
                {folders.map((folderNames)=> {
                    return <option value={folderNames}>{folderNames}</option>
                    })
                }
            </select>
            <h2>new folder</h2>
            <form onSubmit={newFolderHandler}>
                <input
                    value={newFolder}
                    onChange={(e) => setNewFolder(e.target.value)}
                />
                <button type="submit" disabled={isInvalid}>
                add folder
                </button>
                {currentFolder === "" ?
                    <p>you have to select a folder yo</p> :
                    <></>}
            </form>
        </div>
    )
}
const ImageLocation = ({ storageRef, currentFolder, setCurrentFolder }) => {
    const [name, setName] = useState("")
    const [folders, setFolders] = useState([])

    const collect = () => {
        storageRef.list().then(res => {
            res.prefixes.map(name => {
                setFolders(folders => [...folders, name.name])
                // console.log(name)
            })
        
        })
    }
    useEffect(()=> {
        collect()
    },[])

    return(


        <div className="imageLocation">
            <h2>new folder</h2>
            <SelectFolder 
                folders={folders} 
                setCurrentFolder={setCurrentFolder}
                currentFolder={currentFolder}
            />
            <p>{currentFolder}</p>
        </div>
        // <div>
            
        //     <div className="imageLocation">
        //     <h1>image location</h1>
        //         {folderOption ?
        //         <div> 
        //             <FolderForm />
        //             {newFolder === "" ?
        //             <p>no value</p> :
        //             <p>{newFolder}</p>
        //             }
        //         </div>
        //         :
        //         <div>
        //             <FolderArrItems />
        //             <FolderName />
        //             <div>
        //                 <p>or...</p>
        //                 <button onClick={handleFolderView}>create new folder</button>
        //             </div>
        //         </div>
        //         }
        //         {/* {name !== "" ?
        //         <FolderConfirm /> :
        //         <></>
        //         } */}

        //     </div>
        // </div>
    )
}

export default ImageLocation