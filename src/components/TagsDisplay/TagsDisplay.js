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

let displayOne = () => {
    if (props.metaTagOne !== "" ){
        setOne(props.metaTagOne)
        console.log("one>>>>>>>>> ", one)
    }
}

let displayTwo = () => {
    if (props.metaTagTwo !== ""){
        setTwo(props.metaTagTwo)
        console.log("two >>>>>>> ", two)
    }
}

let displayThree = () => {
    if (props.metaTagThree !== ""){
        setThree(props.metaTagThree)
        console.log("three>>>>>>>>>", three)
    }
}

let displayFour = () => {
    if (props.metaTagFour !== ""){
        setFour(props.metaTagFour)
        console.log("four>>>>>>>>>", four)
    }
}

let displayFive = () => {
    if (props.metaTagFive !== ""){
        setFive(props.metaTagFive)
        console.log("five>>>>>>>>", five)
    }
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
            <div>
                three:
                <br />
                {three ? <p>{three}</p> : <></>}
            </div>
            <div>
                four:
                <br />
                {four ? <p>{four}</p> : <></>}
            </div>
            <div>
                five:
                <br />
                {five ? <p>{five}</p> : <></>}
            </div>
        </div>
    )
}

useEffect(() => {
    displayOne()
    displayTwo()
    displayThree()
    displayFour()
    displayFive()
}, [data])

    return (
        <div className="displayCont">
            <h1>tags display</h1>
            <Display />

        </div>
    )
}

export default TagsDisplay