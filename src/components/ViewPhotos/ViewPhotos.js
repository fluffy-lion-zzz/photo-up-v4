import React, { useState, useEffect } from 'react'

import app from 'firebase/app'
import "firebase/storage"
import './ViewPhotos.css'
import Loading from '../Loading/Loading'
const Selecter = ({ currentFolder, setCurrentFolder, folder }) => {

    // console.log(currentFolder)
    return (
        <div>
            <select
                value={currentFolder}
                onChange={(e) => setCurrentFolder(e.target.value)}
            >
                {
                    folder.map(opt => {
                        return <option value={opt}>{opt}</option>
                    })
                }
            </select>
        </div>
    )
}
const ViewPhotos = ({ storageRef }) => {
    const [imgData, setImgData] = useState([])
    const [loading, setLoading] = useState(true)
    const [folder, setFolder] = useState([])
    const [currentFolder, setCurrentFolder] = useState("--")
    // const [folderSelect, setFolderSelect] = useState("")
    

    storageRef && storageRef.list().then(res => {
        /* res.prefixes.map(item => {
            folder.includes(item.name) ?
                console.log("added") :
                setFolder([...folder, item.name])
        }) */
        console.log(res.prefixes)
    })
    console.log("folders : ", folder)

    

    // const ViewImages = () => {
    //     // storage.ref(folder + '/').list().then(res => {
    //     //     res.items.map((item) => {
    //     //         item.getDownloadURL().then((url) => {
    //     //             // console.log(url)
    //     //             return (
    //     //                 <div>
    //     //                     <img src={url}></img>
    //     //                 </div>
    //     //             )
    //     //         })
    //     //     })
    //     // })
    //     // >>>>>>>>
    //     // storage.ref(currentFolder + '/').list().then(res => {
    //     //     res.items.map((item) => {
    //     //         item.getDownloadURL().then((url) => {
    //     //             console.log(url)
    //     //             imgData.includes(url) ? 
    //     //             console.log("url already added") :
    //     //            setImgData(imgData => [...imgData, url])
    //     //         })
    //     //     })
    //     // })
    //     // >>>>>>>>

    //     storage.ref(currentFolder + '/').list().then(res => {
    //         res.items.map(item => {
    //             item.getDownloadURL().then((url) => {
    //                 setImgData([...imgData, url])
    //             })
    //         })
    //     })
    //     console.log(imgData)
    //     return (
    //         <div>
    //             {/* {imgData.map((url) => {
    //                 return <img src={url} />
    //             })} */}
    //             <p>new img</p>
    //         </div>
    //     )

    // }

    return (
        <div>
            {/* <Selecter 
            currentFolder={currentFolder}
            folder={folder}
            setCurrentFolder={setCurrentFolder}
            /> */}
            {/* <ViewImages /> */}
        </div>
    )
    // >>>>>>>>>>>>>>>>>>>>>>>>>>
    // const viewFolder = () => {
    //     const storage = app.storage()
    //     const storageRef = storage.ref()
    //     storageRef.list().then(res => {
    //         res.prefixes.map((prefixes) => {
    //             folder.includes(prefixes.name) ?
    //             console.log("folder name already included") :
    //             setFolder(folder => [...folder, prefixes.name])
    //         })
    //     })
    // }
    // let getData = () => {
    //     setImgData([])
    //     const storage = app.storage()
    //     const storageRef = storage.ref(folderSelect +'/')
    //     const newImg = storageRef.list()
    //     newImg.then((res) => {
    //         res.items.map((item)=> {
    //             item.getDownloadURL().then((url) => {
    //                 imgData.includes(url) ?
    //                     console.log('url already there') :
    //                     setImgData(imgData => [...imgData, url])
    //             })
    //         })
    //         setLoading(false)
    //     }) 


    // }
    // const ListDisplay = ({ url }) => {
    //     return (
    //         <div className="imgWrapper">
    //             <img src={url}/>
    //         </div>
    //     )
    // }
    // const folderHandler = (event) => {
    //     event.preventDefault()
    //     let selected = event.target.value
    //     setFolderSelect(selected)
    //     console.log(selected)
    // }
    // const SelectFolder = () => {
    //     return (
    //         <div>
    //             <form>
    //                 <label for="selectAFolder">select a folder</label>
    //                 <select onChange={folderHandler} name="selectAFolder">
    //                     {folder.map((item, index) => {
    //                     return <option key={index}>{item}</option>
    //                 })}
    //                 </select>

    //             </form>
    //         </div>
    //     )
    // }

    // useEffect(() => {
    //         getData()
    //         viewFolder()
    //         console.log("hit : ", folderSelect)

    // },[])

    // return(
    //     <div id="viewPhotos">
    //         <h3>view photos component</h3>
    //         <SelectFolder />
    //         <div className="imagesContainer">

    //             {loading ? 
    //             <Loading />
    //             : (
    //             imgData.map(url => {
    //                 return <ListDisplay url={url} />
    //             })
    //             )
    //             }


    //         </div>
    //     </div>
    // )
}

export default ViewPhotos