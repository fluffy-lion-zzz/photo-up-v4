import React from 'react'

const ImagePop = ({ handleImageFile, imageFile, setImageFile, reset }) => {
    let isInvalid = imageFile === "" || imageFile === " null"

    const handleEvent = (e) => {
        setImageFile(e.target.files[0])
    }
 
    console.log("image pop : ", imageFile)
 return(
     <div>
         <label for="file">select an image</label>
         <form 
         onSubmit={handleImageFile}
         >
        {
             reset === false ? 
             <input 
            name="file"
            type="file"
            accept="image/*"
            // onChange={(e)=> setFile(e.target.files[0])}
            onChange={handleEvent}
            /> 
        :
        <div>
            <p>you just uploaded, select another?</p>
            <input 
            name="file"
            type="file"
            accept="image/*"
            // onChange={(e)=> setFile(e.target.files[0])}
            onChange={handleEvent}
            /> 
        </div>
         }
        {imageFile !== "" || imageFile ? 
        <p>submit to use this image</p>
        :
        <></>}
        <button disabled={isInvalid} type="submit">submit</button>
        </form>
     </div>
 )   
}

export default ImagePop