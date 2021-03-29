import React, { useState, useEffect } from 'react'
import './MainMetaTags.css'
import app from 'firebase/app'
import 'firebase/storage'

const MainMetaTags = (props) => {
    const [metaOne, setMetaOne] = useState("")
    const [metaTwo, setMetaTwo] = useState("")
    const [metaThree , setMetaThree] = useState("")
    const [metaFour, setMetaFour] = useState("")
    const [metaFive, setMetaFive] = useState("")
    
    const [metaTags, setMetaTags] = useState([])
    const storage = app.storage()
    // let path = props.photoRef.fullPath

    // HERE FOR TESTING
    let path = "test/akira.jpg"
    const storageRef = storage.ref(`${path}`)
    


    const getMeta = () => {
        storageRef.getMetadata()
        .then((metadata) => {
            let custom = metadata.customMetadata
            console.log("metadata : ", custom)
            setMetaOne(custom.customMetaOne)
            setMetaTwo(custom.customMetaTwo)
            setMetaThree(custom.customMetaThree)
            setMetaFour(custom.customMetaFour)
            setMetaFive(custom.customMetaFive)
           
        })
        // loadTags()

    }
    useEffect(() => {
        loadTags()
    }, [metaOne])
    const loadTags = () => {
        setMetaTags([...metaTags, metaOne])
        console.log("effect: ",metaTags)

    }

    const Tags = () => {
        let tags = getMeta()
        if(tags == false){
            console.log("not loaded")
            return <></>
        }else{
        // console.log("tags : ", tags.customMetadata)
        return (
            <div>
                <h3>tags component</h3>
                <p>one: {metaOne}</p>
                <p>two: {metaTwo}</p>
                <p>three: {metaThree}</p>
                <p>four: {metaFour}</p>
                <p>five: {metaFive}</p>
            </div>

        )
        }
    }
    storageRef.list().then(res => {
        //viewing folders in bucket
        console.log(res.prefixes)
    })
    return (
        <div id="tagDisplay">
            <h2>tag display</h2>
            <Tags />
        </div>
    )
}

export default MainMetaTags