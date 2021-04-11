import React, { useState, useEffect } from 'react'
import "firebase/storage"
import './ImageLocation.css'


const SelectFolder = ({ folders, setCurrentFolder, currentFolder }) => {
const [newFolder, setNewFolder] = useState("")
 const isInvalid = 
        newFolder === String ||
        newFolder === ""
        
    const newFolderHandler = (e) => {
        e.preventDefault()
        console.log(folders)
        if(folders.includes(newFolder)){
            console.log("hit")
        } else {
            setCurrentFolder(newFolder)
        }
        
    }

    return (
        <div>
            drop
            <select
                value={currentFolder}
                onChange={(e) => setCurrentFolder(e.target.value)}
            >
                {folders.map((folderNames)=> {
                    return <option>{folderNames}</option>
                    })
                }
            </select>
            <h2>new folder</h2>
            <form onSubmit={newFolderHandler}>
                <input
                    value={newFolder}
                    onChange={(e) => setNewFolder(e.target.value)}
                />
                <button type="submit"
                //  disabled={isInvalid}
                 >add folder</button>
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
    // console.log("fold array : ",folders)
    // const FolderName = () => {
    //     // event.preventDefault()
    //     console.log("selected: ", name)
    //     setNewFolder(name)
    //     // setFolderSelected(true)
    //     return (
    //         <div>
    //         {name === "" ||
    //         name === " " ||
    //         name === undefined ?
    //         <div><p>please select a folder</p></div> :
    //         <div><p>you selected {name}</p></div> 
    //         }
    //         </div>
    //     )
        
    // }

    // const FolderForm = () => {
    //     return (
    //     <form onSubmit={newFolderHandler}>
    //         <input
    //             value={newFolder}
    //             onChange={(event) => {
    //                 setNewFolder(event.target.value)
                    
    //             }}
    //             >
    //             </input>
    //             <h3>your creating a new folder called {newFolder}</h3>
    //                 {folder.includes(newFolder) ? 
    //                 <p>this folder has already been created</p> :
    //                 <></>
    //                 }
    //             <button  disabled={isInvalid}>create new folder</button>
    //             <p>or...</p><button onClick={handleFolderView}>add to existing folder</button>
    //         </form>
    //     )
    // }


    // const FolderArrItems = () => {
    //     return (
    //         <div onClick={(event) => {
    //             setName(event.target.value)
    //             setFolderDisplay(event.target.value)
    //         }} >{folder.map((item, index) => 
    //         <button type="text" value={item} key={index}>{item}</button>
    //         )}
    //     </div>
    //     )
    // }

    // const isInvalid = 
    //     newFolder === String ||
    //     newFolder === "" ||
    //     folder.includes(newFolder)

    return(


        <div>
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