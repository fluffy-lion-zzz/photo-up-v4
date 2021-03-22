import React, { useState, useEffect }from 'react'
import './AddMeta.css'
import app from'firebase/app'
import 'firebase/storage'
import MainMetaTags from '../MainMetaTags/MainMetaTags'


const AddMeta = ({ photoRef, setShowAddMeta, viewReset }) => {
    photoRef !== "" ?
    console.log("photp ref: ", photoRef.fullPath) :
    console.log("not photo ref")
    // const [oneDisplay, setOneDisplay] = useState(true)
    // const [twoDisplay, setTwoDisplay] = useState(false)
    // const [threeDisplay, setThreeDisplay] = useState(false)
    // const [fourDisplay, setFourDisplay] = useState(false)
    // const [fiveDisplay, setFiveDisplay] = useState(false)

    const [metaTagOne, setMetaTagOne] = useState("")
    const [metaTagTwo, setMetaTagTwo] = useState("")
    const [metaTagThree, setMetaTagThree] = useState("")
    const [metaTagFour, setMetaTagFour] = useState("")
    const [metaTagFive, setMetaTagFive] = useState("")
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
        let metaOne = meta.customMetadata.customMetaOne
        setMetaTagOne(metaOne)

        // setOneDisplay(false)
        // setTwoDisplay(true)

    }
    const twoHandler = () => {
        addCustomMeta()
        let metaTwo = meta.customMetadata.customMetaTwo
        setMetaTagTwo(metaTwo)

        // setTwoDisplay(false)
        // setThreeDisplay(true)

    }
    const threeHandler = () => {
        addCustomMeta()
        let metaThree = meta.customMetadata.customMetaThree
        setMetaTagThree(metaThree)

        // setThreeDisplay(false)
        // setFourDisplay(true)

    }
    const fourHandler = () => {
        addCustomMeta()
        let metaFour = meta.customMetadata.customMetaFour
        setMetaTagFour(metaFour)

        // setFourDisplay(false)
        // setFiveDisplay(true)

    }
    const fiveHandler = () => {
        addCustomMeta()
        let metaFive = meta.customMetadata.customMetaFive
        setMetaTagFive(metaFive)

        // setFiveDisplay(false)
        // setShowAddMeta(false)

        viewReset()
    }

    const Director = (props) => {
        console.log(props)
        let reset = props.stateReset("")
        return(
            <div>
                <button onClick={props.handler}>confirm</button>
                <button onClick={() => reset}>undo</button>
            </div>
        )
        
    }
    useEffect(() => {

    }, [])
    const AddedTags = () => {

        return (
            <div>
                <div>
                    <>{metaTagOne !== "" ?
                    <>{metaTagOne}</> :
                    <></>
                    }
                    </>
                </div>
                <div>
                    <>{metaTagTwo !== "" ?
                    <>{metaTagTwo}</> :
                    <></>
                    }
                    </>
                </div>

                <div>
                    <>{metaTagThree !== "" ?
                    <>{metaTagThree}</> :
                    <></>
                    }
                    </>
                </div>
                <div>
                    <>{metaTagFour !== "" ?
                    <>{metaTagFour}</> :
                    <></>
                    }
                    </>
                </div>
                <div>
                    <>{metaTagFive !== "" ?
                    <>{metaTagFive}</> :
                    <></>
                    }
                    </>
                </div>
            </div>
        )
    }
    return (
        <div>
        <h1>add meta</h1>
        <MainMetaTags />
        <AddedTags />

        {/* { oneDisplay ?  */}
        
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
            <Director 
                stateReset={setMetaTagOne}
                handler={oneHandler} 
            />
        <p>meta1= {meta.customMetadata.customMetaOne}</p>
        </div>
        {/* :
        <><p>first tag set</p></>
        }
        { twoDisplay ? */}
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
        {/* :
        <><p>2nd tag set</p></>
        }
        { threeDisplay ? */}
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
        {/* :
        <><p>3rd set</p></>
        }
        { fourDisplay ? */}
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
        {/* :
        <><p>4th set</p></>
        }
        { fiveDisplay ? */}
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
        {/* :
        <><p>5th set</p></>
        } */}
        <button onClick={addCustomMeta}>finish tags</button>

        <div>
            
        </div>
        </div>
    )
}

export default AddMeta