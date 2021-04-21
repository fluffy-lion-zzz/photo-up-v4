import React, { useState, useEffect, useRef } from 'react'
import "firebase/storage"
import './ViewPhotos.css'
import Loading from '../Loading/Loading'
import * as Scroll from 'react-scroll'
import Button from 'react-bootstrap/Button'
// import Modal from 'react-bootstrap/Modal'
// import ModalDialog from 'react-bootstrap/ModalDialog'
const Selecter = ({ currentFolder, setCurrentFolder, setFolders, folders, storageRef }) => {
    
    const collect = () => {
        storageRef.list().then(res => {
            res.prefixes.map(name => {
                setFolders(folders => [...folders, name.name])
            })
        })  
    }
    useEffect(() => {
        collect()
        setCurrentFolder("general")
    },[])
    return (
        <div>
            <select
                value={currentFolder}
                onChange={(e) => setCurrentFolder(e.target.value)}
            >
                {
                    folders.map(opt => {
                        return <option value={opt}>{opt}</option>
                    })
                }
            </select>
        </div>
    )
}
const ViewPhotos = ({ storageRef, storage }) => {
    const [imgData, setImgData] = useState([])
    const [loading, setLoading] = useState(true)
    const [folders, setFolders] = useState([])
    const [currentFolder, setCurrentFolder] = useState("")


    const myRef = useRef(null)
    const toTop = () => myRef.current.scrollIntoView()

    const loader = () => {
        setLoading(true)
        setImgData([])
        storage.ref(currentFolder+'/').list().then(res => {
            res.items.map((item) => {
                item.getDownloadURL().then((url) => {
                    setImgData(imgData => [...imgData, url])
                })
            })
            setLoading(false)
        })
        // setLoading(false)
    }
    useEffect(() => {
        loader()
        console.log(imgData.length)
    }, [currentFolder])

    return (
        <div className="imgWrapper">
            <h3>select a folder : </h3>
            <Selecter 
                currentFolder={currentFolder}
                folders={folders}
                setFolders={setFolders}
                setCurrentFolder={setCurrentFolder}
                storageRef={storageRef}
            />
            {/* <ViewImages /> */}
            <br/>
            <div id="viewImages">
                <div ref={myRef}></div>
                { 
                loading ?
                <Loading/> :
                
                imgData.map(url => {
                    
                return (
                    <div className="imagesContainer">
                        <img className="imageSep" src={url} />
                    </div>
                )
                })}
                <Button onClick={toTop}>to top</Button>
                {/* <Button onClick={() => scroll.scrollToTop()}>top</Button> */}
            </div>
        </div>
    )
}

export default ViewPhotos