import React, { useState, useEffect }from 'react'
import './AddMeta.css'
import app from'firebase/app'
import 'firebase/storage'
import MainMetaTags from '../MainMetaTags/MainMetaTags'
import MetaSuggest from '../MetaSuggest/MetaSuggest'
import TagsDisplay from '../TagsDisplay/TagsDisplay'




const AddMetaV2 = ({ photoRef, setShowAddMeta, viewReset }) => {
    //testing
    // photoRef = "newfolder/akira.jpg"

    // console.log(photoRef)
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

    const oneHandler = ( reset ) => {
        console.log("ONE HANDLER>>>reset : ", reset)
        if (reset == true) {
            console.log("HANDLER RESET TRUE")
            setMeta(prevState => ({       
                customMetadata: {
                    ...prevState.meta,
                    customMetaOne: ""
                }
            }))
            setMetaTagOne("")
        } else {
            console.log("hit false")
        let metaOne = metaTagOne
        console.log("metaone : ",metaOne)
        setMeta(prevState => ({       
            customMetadata: {
                ...prevState.meta,
                customMetaOne: metaOne
            }
        }))
        setMetaTagOne("")
    }
    }
    const twoHandler = (reset) => {
        if (reset == true){
            setMeta(prevState => ({       
                customMetadata: {
                    ...prevState.meta,
                    customMetaTwo: ""
                }
            }))
            setMetaTagTwo("")
        } else {
        let metaTwo = metaTagTwo
        console.log("metaTwo : ", metaTwo)
        setMeta(prevState => ({       
            customMetadata: {
                ...prevState.meta,
                customMetaTwo: metaTwo
            }
        }))
        setMetaTagTwo("")
    }
    }
    const threeHandler = (reset) => {
        if (reset == true) {
            setMeta(prevState => ({       
                customMetadata: {
                    ...prevState.meta,
                    customMetaThree: ""
                }
            }))
            setMetaTagThree("")
        } else {
        let metaThree = metaTagThree
        console.log("metaThree : ", metaThree)
        setMeta(prevState => ({       
            customMetadata: {
                ...prevState.meta,
                customMetaThree: metaThree
            }
        }))
        setMetaTagThree("")
    }
    }
    const fourHandler = (reset) => {
        if (reset == true){
            setMeta(prevState => ({       
                customMetadata: {
                    ...prevState.meta,
                    customMetaFour: ""
                }
            }))
            setMetaTagFour("")
        } else {
        let metaFour = metaTagFour
        console.log("metaFour : ", metaFour)
        setMeta(prevState => ({       
            customMetadata: {
                ...prevState.meta,
                customMetaFour: metaFour
            }
        }))
        setMetaTagFour("")
    }
    }
    const fiveHandler = (reset) => {
        if (reset == true) {
            setMeta(prevState => ({       
                customMetadata: {
                    ...prevState.meta,
                    customMetaFive: ""
                }
            }))
            setMetaTagFive("")
        } else {
        let metaFive = metaTagFive
        console.log("metaFive : ", metaFive)
        setMeta(prevState => ({       
            customMetadata: {
                ...prevState.meta,
                customMetaFive: metaFive
            }
        }))
        setMetaTagFive("")
        viewReset()
    }
    }

    const Director = ({ handler, stateReset, customMeta}) => {
        // console.log("director props: ", props)
        let reset = false
        let undo = () => {
            console.log("undo hit")
            reset = true
            handler(reset)
       
    }
        return(
            <div>
                <button onClick={handler}>confirm</button>
                <button onClick={undo}>undo</button>
            </div>
        )
        
    }
    useEffect(() => {
        
        addCustomMeta()
        console.log("metaupdate")
    }, [meta])
    // const AddedTags = () => {

    //     return (
    //         <div>
    //             <div>
    //                 <>{metaTagOne !== "" ?
    //                 <>{metaTagOne}</> :
    //                 <></>
    //                 }
    //                 </>
    //             </div>
    //             <div>
    //                 <>{metaTagTwo !== "" ?
    //                 <>{metaTagTwo}</> :
    //                 <></>
    //                 }
    //                 </>
    //             </div>

    //             <div>
    //                 <>{metaTagThree !== "" ?
    //                 <>{metaTagThree}</> :
    //                 <></>
    //                 }
    //                 </>
    //             </div>
    //             <div>
    //                 <>{metaTagFour !== "" ?
    //                 <>{metaTagFour}</> :
    //                 <></>
    //                 }
    //                 </>
    //             </div>
    //             <div>
    //                 <>{metaTagFive !== "" ?
    //                 <>{metaTagFive}</> :
    //                 <></>
    //                 }
    //                 </>
    //             </div>
    //         </div>
    //     )
    // }
    return (
        <div>
        <h1>add meta</h1>
        {/* <MainMetaTags photoRef={photoRef} /> */}
        <MetaSuggest 
            setMetaTagOne={setMetaTagOne}
            setMetaTagTwo={setMetaTagTwo}
            setMetaTagThree={setMetaTagThree}
            setMetaTagFour={setMetaTagFour}
            setMetaTagFive={setMetaTagFive}
            addCustomMeta={addCustomMeta}
            setMeta={setMeta}
        />
        <TagsDisplay 
            metaTagOne={metaTagOne}
            meta={meta}
        />
        {/* <AddedTags /> */}

        {/* { oneDisplay ?  */}
        
        <div>
            <input
            type="text"
            value={metaTagOne}
            onChange={(event) => {
                setMetaTagOne(event.target.value)
            }}
            >
            </input>
            <Director 
                // stateReset={setMetaTagOne}
                handler={oneHandler} 
                // customMeta="customMetaOne"
            />
        <p>meta1= {metaTagOne}</p>
        </div>
        {/* :
        <><p>first tag set</p></>
        }
        { twoDisplay ? */}
        <div>
            <input
            type="text"
            value={metaTagTwo}
            onChange={(event) => {
                setMetaTagTwo(event.target.value)
            }}
            >
            </input>
            <Director
                handler={twoHandler}
            />
            {/* <button onClick={twoHandler}>confirm</button> */}
        <p>meta2= {metaTagTwo}</p>
        </div>
        {/* :
        <><p>2nd tag set</p></>
        }
        { threeDisplay ? */}
        <div>
        <input
            type="text"
            value={metaTagThree}
            onChange={(event) => {
                setMetaTagThree(event.target.value)
            }}
            >
            </input>
            <Director
                handler={threeHandler}
            />
        <p>meta3= {metaTagThree}</p>
        </div>
        {/* :
        <><p>3rd set</p></>
        }
        { fourDisplay ? */}
        <div>
        <input
            type="text"
            value={metaTagFour}
            onChange={(event) => {
                setMetaTagFour(event.target.value)
            }}
            >
            </input>
            <Director
                handler={fourHandler}
            />
        <p>meta4= {metaTagFour}</p>
        </div>
        {/* :
        <><p>4th set</p></>
        }
        { fiveDisplay ? */}
        <div>
        <input
            type="text"
            value={metaTagFive}
            onChange={(event) => {
                setMetaTagFive(event.target.value)
            }}
            >
            </input>
            <Director
                handler={fiveHandler}
            />
        <p>meta5= {metaTagFive}</p>
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

export default AddMetaV2