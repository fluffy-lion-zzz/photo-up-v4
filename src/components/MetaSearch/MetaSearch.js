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
        // folders.forEach(folder => storage.ref(folder + "/akira.jpg")
        // folders.forEach(folder => storage.ref(folder)
        //     .list()
        //     .then((res)=> {
        //         res.items.map((item)=> {
        //         let path = folder+'/'+item.name
        //         setItemRef(itemRef => [...itemRef, path])
        //     })
          
        // })
        // .catch((error) => {
        //     console.log(error)
        // }))
        

        //     .getMetadata()
        //     .then((metadata) => {
        //         console.log(metadata)
        //     })
        //     .catch((error) => {
        //         console.log(error)
        //     })
        // )
        
        // .getMetadata()
        //     .then((metadata) => {
        //         console.log(metadata)
        //     })
        //     .catch((error) => {
        //         console.log(error)
        //     })
        setInput("")
    }
    return (
        <div className="metaWrapper">
            <h1>meta search</h1>
            <form onSubmit={handleSearch}>
                <input 
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                />
                <button type="submit">search</button>
            </form>
            {/* <div>
                <h2>folders</h2>
                {folders.map((item)=> {
                    return <p>{item}</p>
                })}
            </div> */}
            <div>
                <h2>files</h2>
                
                {urls.map((url) => {
                    return (
                        <div>
                            <img src={url} />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default MetaSearch

// const MetaSearch = () => {
//     const [parentFolder, setParentFolder] = useState([])
//     const [searchedImages, setSearchedImages] = useState([])
//     const [meta, setMeta] = useState({
//         customMetadata: {
//             customMetaOne: "",
//             customMetaTwo: "",
//             customMetaThree: "",
//             customMetaFour: "",
//             customMetaFive: ""
//         }
//     })

//     const selectTags = () => {
//         const metaTag = "metatest"
//         //store tag
//         const storage = app.storage()
//         const storageRef = storage.ref()


//         parentFolder.forEach(folderName => {
//             storage.refFromURL(`${folderName}/`).listAll()
//             .then((image) => {
//                 let item = image.items
//                 item.forEach(info => {
//                     info.getMetadata()
//                     .then((metadata) => {
//                         if(!metadata.customMetadata){
//                             console.log("no custom")
//                         }
//                         else if (
//                             //TESTING DELETE .CUSTOM
//                             metadata.customMetadata.custom === metaTag ||
//                             //TESTING DELETE .CUSTOM
//                             metadata.customMetadata.customMetaOne === metaTag ||
//                             metadata.customMetadata.customMetaTwo === metaTag ||
//                             metadata.customMetadata.customMetaThree === metaTag ||
//                             metadata.customMetadata.customMetaFour === metaTag ||
//                             metadata.customMetadata.customMetaFive === metaTag
//                             ){
//                             storage.ref(metadata.fullPath).getDownloadURL()
//                             .then((img) => {
//                                     if (searchedImages.includes(img)){
//                                         console.log("already in")
//                                     }else{
//                                         setSearchedImages(searchedImages => [...searchedImages, img])
//                                     }
//                                 }
//                             )
//                         }else{
//                             console.log("not found")
//                         }
//                     })
                    
//                 })
//             })
//         })
//     }
//     useEffect(() => {
//         const storage = app.storage()
        
//         storage.ref().list().then((items)=>{
//                setParentFolder(items.prefixes)
//             })
//             console.log(searchedImages)
            
//     },[searchedImages])



//     // WILL BE PART OF ADD META COMPONENT
//     // const storage = app.storage()
//     // const storageRef = storage.ref('akira/akira-bike.jpg')

//     // const getMeta = () => {
//     //     storageRef.getMetadata()
//     //     .then((metadata) => {
//     //         console.log(metadata)
//     //     })
       
//     // }

//     // const addCustomMeta = (event) => {
//     //     const storage = app.storage()
//     //     const storageRef = storage.ref()
//     //     event.preventDefault()
//     //     storageRef.updateMetadata(meta)
//     //     .then((metadata) => {
//     //         console.log(metadata)
//     //     }).catch((error) => {
//     //         console.log("error: ", error)
//     //     })
//     // }

//     return(
//         <div className="metaWrapper">
//             {/* <button onClick={getMeta}>get meta</button> */}
//             <form onSubmit={addCustomMeta}>
//                 <input
//                     onChange={((event) => {
//                         setMeta({
//                             customMetadata: {
//                             customMetaOne: event.target.value
//                         }})
//                     })}
//                 ></input>
//                 <button type="submit">submit</button>
//             </form>
//             <button onClick={selectTags}>select</button>
//         </div>
//     )
// }

// export default MetaSearch
