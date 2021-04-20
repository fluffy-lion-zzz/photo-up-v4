import React, { useState, useEffect } from 'react'
import "firebase/storage"
import './ViewPhotos.css'
import Loading from '../Loading/Loading'
import { animateScroll as scroll } from 'react-scroll'
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


    // const scroll = Scroll.animateScroll

    //  const scrollTop = () => {
    //      scroll.scrollToTop()
    //  }

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
            <button onClick={() => scroll.scrollToTop()}>top</button>
        </div>
    )
}

export default ViewPhotos