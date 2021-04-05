import React from 'react'

const MetaSuggest = (props) => {
    let setOne = props.setMetaTagOne
    let setTwo = props.setMetaTagTwo
    let setThree = props.setMetaTagThree
    let setFour = props.setMetaTagFour
    let setFive = props.setMetaTagFive

    const oneHandler = (event) => {
        console.log("button hit : ", event.target.value)
    }
    return (
        <div id="suggestContainer">
            <h3>meta suggest tags</h3>
            <div>
                
                    <button
                    value="student"
                    type="submit"
                    onClick={oneHandler}
                    >
                        student
                    </button>
                
            </div>
        </div>
    )
}

export default MetaSuggest