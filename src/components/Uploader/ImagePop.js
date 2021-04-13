import React from 'react'

const ImagePop = ({ handleImageFile, imageFile }) => {
 return(
     <div>
          <input 
            name="file"
            type="file"
            accept="image/*"
            onChange={handleImageFile}
            value={imageFile}
        />
     </div>
 )   
}

export default ImagePop