import React, { useState, useEffect } from 'react'
import './TagsDisplay.css'

const TagsDisplay = (props) => {

const [one, setOne] = useState("")
const [two, setTwo] = useState("")
const [three, setThree] = useState("")
const [four, setFour] = useState("")
const [five, setFive] = useState("")

let data = props.meta.customMetadata
// setOne(data)
let getOne = props.meta.customMetadata.customMetaOne
const loader = () => {
    
    console.log("getone : ",getOne)
    console.log("one : ", one)
    if(getOne != ""){
        setOne(getOne)
    }else {
        return null
    }
}

useEffect(() => {
    loader()
 console.log("state >>>>>>> ", one)
}, [data])
console.log("data frim tag display ", data)
    return (
        <div className="displayCont">
            <h1>tags display</h1>
            <p>{one}</p>

        </div>
    )
}

export default TagsDisplay