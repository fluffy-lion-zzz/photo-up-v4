import React from 'react'
import './ImagePop.css'
const ImagePop = ({ 
    handleImageFile, 
    imageFile, 
    setImageFile, 
    reset,
    setShowImageInfo
    }) => {
    let isInvalid = imageFile === "" || imageFile === null

    const handleEvent = (e) => {
        setImageFile(e.target.files[0])
        
    }
 
    console.log("image pop : ", imageFile)
 return(
     <div className="imagePopCont">
         <label for="file">select an image</label>
         <form 
         onSubmit={handleImageFile}

         >
        {reset === false ? 
        <div className="inputCont">
            
             <input 
            name="file"
            type="file"
            accept="image/*"
            // onChange={(e)=> setFile(e.target.files[0])}
            onChange={handleEvent}
            /> 
        </div>
        :
        <div>
            <input 
            name="file"
            type="file"
            accept="image/*"
            // onChange={(e)=> setFile(e.target.files[0])}
            onChange={handleEvent}
            /> 
        </div>
         }
         <div>
        {imageFile !== "" || imageFile ? 
        <p>submit to use this image</p>
        :
        <></>
        }
        <button disabled={isInvalid} type="submit">submit</button>
        </div>
        </form>
     </div>
 )   
}

export default ImagePop