import React, { useState, useEffect, useRef } from 'react'
import './MetaSearch.css'
import 'firebase/storage'
import Button from 'react-bootstrap/Button'

const MetaSearch = ({ storage }) => {
    
    const [input, setInput] = useState("")
    const [itemRef, setItemRef] = useState([])
    const [urls , setUrls] = useState([])
    const myRef = useRef(null)
    const toTop = () => myRef.current.scrollIntoView()

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
                    <div id="searchInput">
                        <input 
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        />
                        <Button type="submit">search</Button>
                    </div>
                </form>
                    <div className="searchResCont">
                    <div ref={myRef}></div>
                        {urls.map((url) => {
                            return (
                                <div className="imageCont">
                                    <img id="imageRes"src={url} />
                                </div>
                            )
                        })}
                        {urls.length > 3 ?
                    <div id="toTopCont">
                        <Button onClick={toTop}>to top</Button>
                    </div>
                    :
                    <></>}
                    </div>
        </div>
    )
}

export default MetaSearch
