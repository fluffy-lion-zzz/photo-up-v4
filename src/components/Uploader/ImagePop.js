import React from 'react'
import './ImagePop.css'
import Button from 'react-bootstrap/Button'
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
 
 return(
     <div className="imagePopCont">
         <div id="popWrapper">
            <label for="file"><h3>select an image</h3></label>
            <form 
            onSubmit={handleImageFile}
            >
            <div>
                {reset === false ? 
                <div className="inputCont">
                    
                    <input 
                    name="file"
                    type="file"
                    accept="image/*"
                    onChange={handleEvent}
                    /> 
                </div>
                :
                <div className="inputCont">
                    <input 
                    name="file"
                    type="file"
                    accept="image/*"
                    onChange={handleEvent}
                    /> 
                </div>
                }
            </div>
            <div id="imageSubmit">
                {imageFile !== "" || imageFile ? 
                <h3>submit to use this image</h3>
                :
                <></>
                }
                
                <Button disabled={isInvalid} type="submit">submit</Button>
            </div>
            </form>
        </div>
     </div>
 )   
}

export default ImagePop