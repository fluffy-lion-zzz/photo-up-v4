import React, { useState, useEffect } from 'react'

import app from 'firebase/app'
import "firebase/storage"
// import { useState } from 'react'
import './ViewPhotos.css'
import Loading from '../Loading/Loading'

const ViewPhotos = () => {
    const [imgData, setImgData] = useState([])
    const [loading, setLoading] = useState(true)
    const [folder, setFolder] = useState([])
    const [folderSelect, setFolderSelect] = useState("")

    const viewFolder = () => {
        const storage = app.storage()
        const storageRef = storage.ref()
        storageRef.list().then(res => {
            res.prefixes.map((prefixes) => {
                folder.includes(prefixes.name) ?
                console.log("folder name already included") :
                setFolder(folder => [...folder, prefixes.name])
            })
        })
    }
    let getData = () => {
        setImgData([])
        const storage = app.storage()
        const storageRef = storage.ref(folderSelect +'/')
        const newImg = storageRef.list()
        newImg.then((res) => {
            res.items.map((item)=> {
                item.getDownloadURL().then((url) => {
                    imgData.includes(url) ?
                        console.log('url already there') :
                        setImgData(imgData => [...imgData, url])
                })
            })
            setLoading(false)
        }) 
        
        
    }
    const ListDisplay = ({ url }) => {
        return (
            <div className="imgWrapper">
                <img src={url}/>
            </div>
        )
    }
    const folderHandler = (event) => {
        let selected = event.target.value
        setFolderSelect(selected)
        console.log(selected)
    }
    const SelectFolder = () => {
        return (
            <div>
                <form>
                    <label for="selectAFolder">select a folder</label>
                    <select onChange={folderHandler} name="selectAFolder">{folder.map((item, index) => <option key={index}>{item}</option>)}</select>

                </form>
            </div>
        )
    }
    
    useEffect(() => {
            getData()
            viewFolder()
            // console.log(folderSelect)
            
    },[folderSelect])

        return(
            <div id="viewPhotos">
                <h3>view photos component</h3>
                <SelectFolder />
                <div className="imagesContainer">
                    
                    {loading ? 
                    <Loading />
                    : (
                    imgData.map(url => {
                        return <ListDisplay url={url} />
                    })
                    )
                    }
                    
                
                </div>
            </div>
        )
}

export default ViewPhotos