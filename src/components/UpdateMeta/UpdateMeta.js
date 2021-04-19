import React, { useState, useEffect } from 'react'
import './UpdateMeta.css'
import 'firebase/storage'
const UpdateMeta = (props) => {
    let ref = props.metaUploadRef
    
    const [metas, setMetas] = useState({
        tag1: "",
        tag2: "",
        tag3: "",
        tag4: "",
        tag5: "",
      });
      const [currentMeta, setCurrentMeta] = useState("tag1");
      const [input, setInput] = useState("");

      useEffect(() => {}, [metas]);

      const handleSubmit = () => {
        ref.updateMetadata({customMetadata: metas})
          .then((customMetadata) => {
              console.log(customMetadata)
          }).catch((error) => {
              console.log("error: ", error)
          })
          props.reset ? 
          props.setReset(false) :
          props.setReset(true)
          
          // props.setReset(true)
          props.setImagePreview("")
          setMetas({
            tag1: "",
            tag2: "",
            tag3: "",
            tag4: "",
            tag5: "",
          })
          setCurrentMeta("tag1")
          props.reseter()
      }

      const handleState = (e) => {
        e.preventDefault();
        console.log(Object.keys(metas).length);
        if (currentMeta !== "tag6") {
          setMetas((prevState) => {
            return { ...prevState, [currentMeta]: input };
          });
          // addCustomMeta()
          setInput("");
          let num = currentMeta.slice(-1);
          console.log(`tag${num++}`);
          setCurrentMeta(`tag${num++}`);
        } else {
          console.log("You have reach the maximum number of metas");
          setInput("")
        }
      };
      const backHandler = () => {
        props.setShowAddMeta(false)
        props.setShowImage(true)
      }
    return (
        <div className="updateCont">
          <div className="backCont">
            <button onClick={backHandler}>go back</button>
          </div>
          
          <div className="imageContainer">
            <img className="individualImages" src={props.imagePreview} />
          </div>
          <div>
            <div className="tagSelectCont">
                <select
                    value={currentMeta}
                    onChange={(e) => setCurrentMeta(e.target.value)}
                >
                    <option value="tag1">tag 1</option>
                    <option value="tag2">tag 2</option>
                    <option value="tag3">tag 3</option>
                    <option value="tag4">tag 4</option>
                    <option value="tag5">tag 5</option>
                </select>
              </div>
              <div className="metaContainer">
                <div className="formCont">
                  <form onSubmit={handleState}>
                      <input
                      type="text"
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      />
                      <button type="submit">Submit Tag</button>
                  </form>
                </div>
                  {metas &&
                      Object.keys(metas).map((item) => (
                      <li>
                          {item} = {metas[item]}
                      </li>
                      ))}
              </div>
              <div className="finishButtonCont">
                  <button onClick={handleSubmit}>finish</button>
              </div>
        </div>
        </div>
    )
}

export default UpdateMeta