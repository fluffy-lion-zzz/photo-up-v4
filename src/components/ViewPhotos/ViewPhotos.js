import React, { useState, useEffect } from 'react'

import app from 'firebase/app'
import "firebase/storage"
// import { useState } from 'react'
import './ViewPhotos.css'

const ViewPhotos = () => {
    const [imgData, setImgData] = useState([])

    let getData = () => {
        const storage = app.storage()
        const storageRef = storage.ref('test/')
        const newImg = storageRef.list()
        newImg.then((res) => {
            res.items.map((item)=> {
                item.getDownloadURL().then((url) => {
                    setImgData([...imgData, url])
                })
                
            })
        })   
    }

    const ListDisplay = ({ url }) => {
        return (
            <div>
                <img src={url}/>
            </div>
        )
    }
    useEffect(() => {
            getData()
    },[])

        return(
            <div id="viewPhotos">
                <h3>view photos component</h3>
                <div>
                {imgData.map(url => {
                    return <ListDisplay url={url} />
                })}
                </div>
            </div>
        )
}

export default ViewPhotos