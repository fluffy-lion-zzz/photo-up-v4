import React, { useState }from 'react'
import './AddMeta.css'
import app from'firebase/app'
import 'firebase/storage'

// export const metaHandler = () => {
    
// }
const AddMeta = (props) => {
    const [metaCounter, setMetaCounter] = useState("")
    const [items, setItems] = useState([])
    const [meta1, setMeta1] = useState("")
   
    const [meta, setMeta] = useState({
        customMetadata: {
            customMetaOne: "test",
            customMetaTwo: "",
            customMetaThree: "",
            customMetaFour: "",
            customMetaFive: ""
        }
    })

    
    // console.log(meta)
    const metaInput = (event) => {
        event.preventDefault()
        let metaOne = meta.customMetadata
        metaOne.customMetaOne = meta1
        console.log(metaOne)
        // setMeta({metaOne: meta1})
        // console.log(meta)
        props.metaUploadRef.updateMetadata(meta)
    }
// console.log(props)
    return (
        <div className="addMetaWrapper">
            <h2>meta wrapper</h2>
            <p>add up to 5 tags for people to search</p>
            {/* <button onClick={tester}>meta tester here</button> */}
            <input 
                type="text"
                // value={metaOne.customMetaOne}
                onChange={(event) => {
                    setMeta1(event.target.value)
                    
                }
             } />
             <p>{meta1}</p>
             <button onClick={metaInput}>metatestet</button>
            {/* <input type="text"
                
                value={meta.customMetadata.customMetaTwo}
                onChange={(event) => {
                    setMeta({customMetadata.customMetaOne: })
                } />
            <input type="text"
                
                value={meta.customMetadata.customMetaThree}
                onChange={(event) => {
                    setMeta({customMetadata.customMetaOne: event.target.value })
                }
            } />
            <input type="text"
                
                value={meta.customMetadata.customMetaFour}
                onChange={(event) => {
                    setMeta({customMetadata.customMetaOne: })
                } />
            <input type="text"
                
                value={meta.customMetadata.customMetaFive}
                onChange={(event) => {
                    setMeta({customMetadata.customMetaOne: })
                } /> */}
        </div>
    )
}

export default AddMeta