import React, { useState, useEffect } from 'react'
import './MetaSearch.css'
import app from 'firebase/app'
import 'firebase/storage'

const selectTags = () => {
    const metaTag = "event"
    //store tag
    const storage = app.storage()
    const storageRef = storage.ref()
    //search files meta data for that tag
    storageRef.map((folders) => {
        console.log(folders)
    })
}
// selectTags()

const MetaSearch = () => {
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
            
        </div>
    )
}

export default MetaSearch
