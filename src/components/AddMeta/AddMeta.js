import React, { useState }from 'react'
import './AddMeta.css'
import app from'firebase/app'
import 'firebase/storage'

const AddMeta = ({ photoRef }) => {
    photoRef !== "" ?
    console.log("photp ref: ", photoRef.fullPath) :
    console.log("not photo ref")
    const [amount, setAmount] = useState(0)
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
    const addCustomMeta = () => {
        storageRef.updateMetadata(meta)

        .then((metadata) => {
            console.log(metadata)
        }).catch((error) => {
            console.log("error: ", error)
        })
    }

    const TagInput = () => {

    }
    return (
        <div>
        <h1>add meta</h1>
        <div>
            <input
            type="text"
            onChange={(event) => {
                let metaOne = event.target.value
                setMeta(prevState => ({       
                    customMetadata: {
                        ...prevState.meta,
                        customMetaOne: metaOne
                    }
                }))
            }}
            >
            </input>
            <button onClick={addCustomMeta}>confirm</button>
        <p>meta1= {meta.customMetadata.customMetaOne}</p>
        </div>
        <div>
            <input
            type="text"
            onChange={(event) => {
                let metaTwo = event.target.value
                setMeta(prevState => ({       
                    customMetadata: {
                        ...prevState.meta,
                        customMetaTwo: metaTwo
                    }
                }))
            }}
            >
            </input>
            <button onClick={addCustomMeta}>confirm</button>
        <p>meta2= {meta.customMetadata.customMetaTwo}</p>
        </div>
        <div>
            <input
            type="text"
            onChange={(event) => {
                let metaThree = event.target.value
                setMeta(prevState => ({       
                    customMetadata: {
                        ...prevState.meta,
                        customMetaThree: metaThree
                    }
                }))
            }}
            >
            </input>
            <button onClick={addCustomMeta}>confirm</button>
        <p>meta3= {meta.customMetadata.customMetaThree}</p>
        </div>
        <div>
            <input
            type="text"
            onChange={(event) => {
                let metaFour = event.target.value
                setMeta(prevState => ({       
                    customMetadata: {
                        ...prevState.meta,
                        customMetaFour: metaFour
                    }
                }))
            }}
            >
            </input>
            <button onClick={addCustomMeta}>confirm</button>
        <p>meta4= {meta.customMetadata.customMetaFour}</p>
        </div>
        <div>
            <input
            type="text"
            onChange={(event) => {
                let metaFive = event.target.value
                setMeta(prevState => ({       
                    customMetadata: {
                        ...prevState.meta,
                        customMetaFive: metaFive
                    }
                }))
            }}
            >
            </input>
            <button onClick={addCustomMeta}>confirm</button>
        <p>meta5= {meta.customMetadata.customMetaFive}</p>
        </div>

        <button onClick={addCustomMeta}>meta tester</button>

        <div>
            
        </div>
        </div>
    )
}

export default AddMeta