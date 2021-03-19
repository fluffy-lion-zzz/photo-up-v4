import React, { useState }from 'react'
import './AddMeta.css'
import app from'firebase/app'
import 'firebase/storage'
import MainMetaTags from '../MainMetaTags/MainMetaTags'


const AddMeta = ({ photoRef, setShowAddMeta, viewReset }) => {
    photoRef !== "" ?
    console.log("photp ref: ", photoRef.fullPath) :
    console.log("not photo ref")
    const [oneDisplay, setOneDisplay] = useState(true)
    const [twoDisplay, setTwoDisplay] = useState(false)
    const [threeDisplay, setThreeDisplay] = useState(false)
    const [fourDisplay, setFourDisplay] = useState(false)
    const [fiveDisplay, setFiveDisplay] = useState(false)

    const [meta, setMeta] = useState({
        
        customMetadata: {
            customMetaOne: "",
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

    const oneHandler = () => {
        addCustomMeta()
        setOneDisplay(false)
        setTwoDisplay(true)
    }
    const twoHandler = () => {
        addCustomMeta()
        setTwoDisplay(false)
        setThreeDisplay(true)
    }
    const threeHandler = () => {
        addCustomMeta()
        setThreeDisplay(false)
        setFourDisplay(true)
    }
    const fourHandler = () => {
        addCustomMeta()
        setFourDisplay(false)
        setFiveDisplay(true)
    }
    const fiveHandler = () => {
        addCustomMeta()
        setFiveDisplay(false)
        setShowAddMeta(false)
        viewReset()
    }
    return (
        <div>
        <h1>add meta</h1>
        <MainMetaTags />
        { oneDisplay ? 
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
            <button onClick={oneHandler}>confirm</button>
        <p>meta1= {meta.customMetadata.customMetaOne}</p>
        </div>
        :
        <><p>first tag set</p></>
        }
        { twoDisplay ?
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
            <button onClick={twoHandler}>confirm</button>
        <p>meta2= {meta.customMetadata.customMetaTwo}</p>
        </div>
        :
        <><p>2nd tag set</p></>
        }
        { threeDisplay ?
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
            <button onClick={threeHandler}>confirm</button>
        <p>meta3= {meta.customMetadata.customMetaThree}</p>
        </div>
        :
        <><p>3rd set</p></>
        }
        { fourDisplay ?
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
            <button onClick={fourHandler}>confirm</button>
        <p>meta4= {meta.customMetadata.customMetaFour}</p>
        </div>
        :
        <><p>4th set</p></>
        }
        { fiveDisplay ?
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
            <button onClick={fiveHandler}>confirm</button>
        <p>meta5= {meta.customMetadata.customMetaFive}</p>
        </div>
        :
        <><p>5th set</p></>
        }
        <button onClick={addCustomMeta}>meta tester</button>

        <div>
            
        </div>
        </div>
    )
}

export default AddMeta