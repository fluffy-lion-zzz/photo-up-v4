import React, { useState, useEffect } from 'react'

const ImagePop = ({ handleImageFile, imageFile, setImageFile }) => {
    const [file, setFile] = useState(null)

    // const sender = (event) => {
    //     handleImageFile(event)
    //     setImageFile(file)
    // }
    // useEffect(()=> {
    //     setFile(null)
    // },[])
    console.log("image pop : ", imageFile)
 return(
     <div>
         <form 
         onSubmit={handleImageFile}
         >
          <input 
            name="file"
            type="file"
            accept="image/*"
            // onChange={(e)=> setFile(e.target.files[0])}
            onChange={(e)=> setImageFile(e.target.files[0])}
        />
        <button type="submit">submit</button>
        </form>
     </div>
 )   
}

export default ImagePop