import React, { useState }from 'react'
import './AddMeta.css'
import app from'firebase/app'
import 'firebase/storage'

const AddMeta = ({ photoRef }) => {
    photoRef !== "" ?
    console.log("photp ref: ", photoRef.fullPath) :
    console.log("not photo ref")

    const [meta, setMeta] = useState({
        
        customMetadata: {
            customMetaOne: "testing",
            customMetaTwo: "",
            customMetaThree: "",
            customMetaFour: "",
            customMetaFive: ""
        }
    })

    const storage = app.storage()
    const storageRef = storage.ref(photoRef.fullPath)

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

    
    const manageMeta = (...params) => {
        console.log(params[0])
        console.log(params[1])
        // setMeta(prevState => ({
        //     customMetadata: {
        //         ...prevState.meta,
        //         customMetaOne: params[0],
        //         customMetaTwo: params[1]
        //     }
        // }))
        // console.log(meta.customMetadata.customMetaOne)
    }
    let userMeta1
    let userMeta2
    return (
        <div>
        <h1>add meta</h1>
        <div>
            <input
            type="text"
            onChange={(event) => {
                event.preventDefault()
                userMeta1 = event.target.value
                manageMeta(userMeta1)
            }}
            >
            </input>
        <p>meta1= {meta.customMetadata.customMetaOne}</p>
        </div>
        <div>
            <input
            type="text"
            onChange={(event) => {
                event.preventDefault()
                userMeta2 = event.target.value
                manageMeta(userMeta2)

                //works
                //works
                //works
                //works
                // setMeta(prevState => ({
                //     customMetadata: {
                //         ...prevState.meta,
                //         customMetaTwo: event.target.value
                //     }
                // }))
            }}
            >
            </input>
        <p>meta2= {meta.customMetadata.customMetaTwo}</p>
        </div>
        <button onClick={addCustomMeta}>meta tester</button>
        </div>
    )
}

export default AddMeta