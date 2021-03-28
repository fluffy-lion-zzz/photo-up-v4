import React, { useState, useEffect } from 'react'
import './MainMetaTags.css'
import app from 'firebase/app'
import 'firebase/storage'

const MainMetaTags = (props) => {
    console.log("main meta props : ", props)
    const storage = app.storage()
    const storageRef = storage.ref()


    const getMeta = () => {
        storageRef.getMetadata()
        .then((metadata) => {
            console.log(metadata)
        })
    }
    storageRef.list().then(res => {
        //viewing folders in bucket
        console.log(res.prefixes)
    })
    return (
        <div id="tagDisplay">
            <h2>tag display</h2>
        </div>
    )
}

export default MainMetaTags