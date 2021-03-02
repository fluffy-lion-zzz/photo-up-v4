import React, { useState, useEffect } from 'react'
import './MetaSearch.css'
import app from 'firebase/app'
import 'firebase/storage'


const MetaSearch = () => {
    const [parentFolder, setParentFolder] = useState([])
    const [searchedImages, setSearchedImages] = useState([])
    const [meta, setMeta] = useState({
        customMetadata: {
            customMeta: ""
        }
    })

    const selectTags = () => {
        const metaTag = "metatest"
        //store tag
        const storage = app.storage()
        const storageRef = storage.ref()


        parentFolder.forEach(folderName => {
            storage.refFromURL(`${folderName}/`).listAll()
            .then((image) => {
                let item = image.items
                item.forEach(info => {
                    info.getMetadata()
                    .then((metadata) => {
                        if(!metadata.customMetadata){
                            console.log("no custom")
                        }
                        else if (metadata.customMetadata.custom === metaTag){
                            console.log(metadata.customMetadata.custom)
                            //FINE
                            storage.ref(metadata.fullPath).getDownloadURL()
                            .then((img) => {
                                    if (searchedImages.includes(img)){
                                        console.log("already in")
                                    }else{
                                        setSearchedImages(searchedImages => [...searchedImages, img])
                                    }
                                }
                            )
                        }else{
                            console.log("not found")
                        }
                    })
                    
                })
            })
        })
    }
    useEffect(() => {
        storage.ref().list().then((items)=>{
               setParentFolder(items.prefixes)
            })
            console.log(searchedImages)
    },[searchedImages])



    const storage = app.storage()
    const storageRef = storage.ref('test/akira.jpg')

    const getMeta = () => {
        storageRef.getMetadata()
        .then((metadata) => {
            console.log(metadata)
        })
    }

    const addCustomMeta = (event) => {
        event.preventDefault()
        storageRef.updateMetadata(meta)
        .then((metadata) => {
            console.log(metadata)
        }).catch((error) => {
            console.log("error: ", error)
        })
    }

    return(
        <div className="metaWrapper">
            <button onClick={getMeta}>get meta</button>
            <form onSubmit={addCustomMeta}>
                <input
                    onChange={((event) => {
                        setMeta({
                            customMetadata: {
                            custom: event.target.value
                        }})
                    })}
                ></input>
                <button type="submit">submit</button>
            </form>
            <button onClick={selectTags}>select</button>
        </div>
    )
}

export default MetaSearch
