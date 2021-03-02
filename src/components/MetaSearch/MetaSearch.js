import React, { useState, useEffect } from 'react'
import './MetaSearch.css'
import app from 'firebase/app'
import 'firebase/storage'


const MetaSearch = () => {
    const [parentFolder, setParentFolder] = useState([])

    const selectTags = () => {
        const metaTag = "event"
        //store tag
        const storage = app.storage()
        const storageRef = storage.ref()
        //search files meta data for that tag
        // storageRef.list().then((items)=>{
        //     setParentFolder(parentFolder => [...parentFolder, items.prefixes])
        // }).then(()=> console.log(parentFolder))
        
        // MAY HAVE TO PUT IN USEEFFECT
        // storage.ref().list().then((items)=>{
        //     //    console.log(items.prefixes)
        //        setParentFolder(items.prefixes)
        //     //    console.log(parentFolder)
        //     })

        parentFolder.forEach(folderName => {
            console.log(folderName)
        //    let items =  storage.ref(`${folderName}`).listAll()
        //    console.log(`${folderName}`, items)
        })
        


        // storageRef.map((folders) => {
        //     console.log(folders)
        // })
       
    }
    useEffect(() => {
        storage.ref().list().then((items)=>{
            //    console.log(items.prefixes)
               setParentFolder(items.prefixes)
            //    console.log(parentFolder)
            })
    },[])


    

    const [meta, setMeta] = useState({
        customMetadata: {
            customMeta: ""
        }
    })

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
        // console.log(meta)
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
