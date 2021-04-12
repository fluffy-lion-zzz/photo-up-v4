import React from 'react'

const ImagePop = ({ handleImageFile }) => {
 return(
     <div>
          <input 
            name="file"
            type="file"
            accept="image/*"
            onChange={handleImageFile}
        />
     </div>
 )   
}

export default ImagePop