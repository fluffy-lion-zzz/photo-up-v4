import React, { useState, useEffect } from 'react'
import './TagsDisplay.css'
import app from'firebase/app'
import 'firebase/storage'
const TagsDisplay = (props) => {
let path = props.photoRef.fullPath

const storage = app.storage()
const storageRef = storage.ref(path)

const [one, setOne] = useState("")
const [two, setTwo] = useState("")
const [three, setThree] = useState("")
const [four, setFour] = useState("")
const [five, setFive] = useState("")


let data = props.meta

// const getMeta = () => {
//         storageRef.getMetadata()
//         .then((metadata) => {
//             console.log(
//                 "metadata tag display", metadata)

//             }
            
//         )
  
// }

// setOne(data)
// let getOne = props.meta.customMetadata.customMetaOne
let displayOne = () => {
    if(props.metaTagOne !== "" ){
        setOne(props.metaTagOne)
        console.log("one>>>>>>>>> ", one)
    }
    // console.log(props.oneDisplay)
    // setOne(props.oneDisplay)
}

let getOne = props.metaTagOne
// let getTwo = props.meta.customMetadata.customMetaTwo
// let getTwo = props.metaTagTwo
// let getThree = props.meta.customMetadata.customMetaThree
// let getFour = props.meta.customMetadata.customMetaFour
// let getFive = props.meta.customMetadata.customMetaFive

const loader = () => {
    displayOne()
}

const Display = () => {
    return (
        <div>
            <div>
                one:
                <br />
                {one ? <p>{one}</p> : <></>}
            </div>
            <div>
                two:
                <br />
                {two ? <p>{two}</p> : <></>}
            </div>
            
            {/* {three ? <p>{three}</p> : <></>}
            {four ? <p>{four}</p> : <></>} */}
        </div>
    )
}

useEffect(() => {
    // const getMeta = () => {
    //     storageRef.getMetadata()
    //     .then((metadata) => {
    //         console.log(
    //             "metadata tag display", metadata)
    //         }
            
    //     ).then((metadata) => {
    //         setOne(metadata.customMetadata.customMetaOne)
    //         }
    //     ).catch((error) => {
    //         console.log(error)
    //     })
    
    // }
    // getMeta()
    // loader()
    displayOne()
}, [data])

    return (
        <div className="displayCont">
            <h1>tags display</h1>
            <Display />

        </div>
    )
}

export default TagsDisplay