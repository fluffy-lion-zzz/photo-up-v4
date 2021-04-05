import React from 'react'

const MetaSuggest = (props) => {
    let setOne = props.setMetaTagOne
    let setTwo = props.setMetaTagTwo
    let setThree = props.setMetaTagThree
    let setFour = props.setMetaTagFour
    let setFive = props.setMetaTagFive

    let add = props.addCustomMeta
    let setMeta = props.setMeta

    const oneHandler = (event) => {
        let value = event.target.value
        setOne(value)
        setMeta(prevState => ({       
            customMetadata: {
                ...prevState.meta,
                customMetaOne: value
            }
        }))
        add()
    }

    const twoHandler = (event) => {
        let value = event.target.value
        setTwo(value)
        setMeta(prevState => ({       
            customMetadata: {
                ...prevState.meta,
                customMetaTwo: value
            }
        }))
        add()
    }

    const threeHandler = (event) => {
        let value = event.target.value
        setThree(value)
        setMeta(prevState => ({       
            customMetadata: {
                ...prevState.meta,
                customMetaThree: value
            }
        }))
        add()
    }

    const fourHandler = (event) => {
        let value = event.target.value
        setFour(value)
        setMeta(prevState => ({       
            customMetadata: {
                ...prevState.meta,
                customMetaFour: value
            }
        }))
        add()
    }

    const fiveHandler = (event) => {
        let value = event.target.value
        setFive(value)
        setMeta(prevState => ({       
            customMetadata: {
                ...prevState.meta,
                customMetaFive: value
            }
        }))
        add()
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
            <div>
                <button
                value="classroom"
                onClick={twoHandler}
                >
                    classroom
                </button>
            </div>
            <div>
                <button
                value="event"
                onClick={threeHandler}
                >
                    event
                </button>
            </div>
            <div>
                <button
                value="virtual"
                onClick={fourHandler}
                >
                    virtual
                </button>
            </div>
            <div>
                <button
                value="group"
                onClick={fiveHandler}
                >
                    group
                </button>
            </div>
        </div>
    )
}

export default MetaSuggest