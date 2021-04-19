import React, { useState, useEffect } from 'react'
import './MetaSearch.css'
import 'firebase/storage'


const MetaSearch = ({ storage }) => {

    const [input, setInput] = useState("")
    // const [folders, setFolders] = useState([])
    const [itemRef, setItemRef] = useState([])
    const [urls , setUrls] = useState([])

    const loadFiles = () => {
        storage.ref().list().then(arr => {
            arr.prefixes.map((folder) => {
                folder.list().then((res) => {
                    res.items.map((item) => {
                        setItemRef(itemRef => [...itemRef, item.fullPath])
                    })
                })
            })
        })
    }

    useEffect(() => {
        loadFiles()
    },[])

    const handleSearch = (e) => {
        e.preventDefault()
        setUrls([])
        console.log("hit")
        itemRef.map((item) => {
            storage.ref(item).getMetadata()
            .then((metadata) => {
                console.log(metadata)
                let custom = metadata.customMetadata
                    if(custom === undefined){
                        console.log("no custom")
                    }else if (
                    input === custom.tag1 ||
                    input === custom.tag2 ||
                    input === custom.tag3 ||
                    input === custom.tag4 ||
                    input === custom.tag5 ){
                        let url = metadata.fullPath
                        console.log("match : ", url)
                        storage.ref(url).getDownloadURL().then((path) => {
                            setUrls(urls => [...urls, path])
                        })
                    } else {
                        console.log("no match")
                    }
            })
            .catch((error) =>{
                console.log(error)
            })
        })

        setInput("")
    }
    return (
        <div className="metaWrapper">
            <h1>tag search</h1>
            <form onSubmit={handleSearch}>
                <input 
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                />
                <button type="submit">search</button>
            </form>
            <div className="searchResCont">
                
                {urls.map((url) => {
                    return (
                        <div className="imageCont">
                            <img src={url} />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default MetaSearch
