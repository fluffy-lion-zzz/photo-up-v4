import React, { useState, useEffect } from 'react'

import app from 'firebase/app'
import "firebase/storage"
// import { useState } from 'react'
import './ViewPhotos.css'
import Loading from '../Loading/Loading'

const ViewPhotos = () => {
    const [imgData, setImgData] = useState([])
    const [loading, setLoading] = useState(true)
    const [folder, setFolder] = useState("")

    // const viewFolder = () => {
    //     const storage = app.storage()
    //     const storageRef = storage.ref().listAll()
    //     console.log(storageRef)
    // }
    let getData = () => {
        const storage = app.storage()
        const storageRef = storage.ref('test/')
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
    console.log(imgData)
    const ListDisplay = ({ url }) => {
        return (
            <div className="imgWrapper">
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