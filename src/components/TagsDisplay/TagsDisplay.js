import React, { useState } from 'react'
import './TagsDisplay.css'

const TagsDisplay = (props) => {

const [one, setOne] = useState("")
const [two, setTwo] = useState("")
const [three, setThree] = useState("")
const [four, setFour] = useState("")
const [five, setFive] = useState("")

let data = props.meta.customMetadata.customMetaOne
// setOne(data)
console.log("data frim tag display ", data)
    return (
        <div className="displayCont">
            <h1>tags display</h1>
            <p>{data}</p>

        </div>
    )
}

export default TagsDisplay