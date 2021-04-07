import React, { useState, useEffect } from 'react'
import './UpdateMeta.css'
const UpdateMeta = () => {
    const [metas, setMetas] = useState({
        meta1: "1",
        meta2: "2",
        meta3: "3",
        meta4: "4",
        meta5: "5",
      });
      const [currentMeta, setCurrentMeta] = useState("meta1");
      const [input, setInput] = useState("");
      useEffect(() => {}, [metas]);
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log(Object.keys(metas).length);
        if (currentMeta !== "meta6") {
          setMetas((prevState) => {
            return { ...prevState, [currentMeta]: input };
          });
          setInput("");
          let num = currentMeta.slice(-1);
          console.log(`meta${num++}`);
          setCurrentMeta(`meta${num++}`);
        } else {
          console.log("You have reach the maximum number of metas");
        }
      };
    return (
        <div className="updateCont">
            <select
        value={currentMeta}
        onChange={(e) => setCurrentMeta(e.target.value)}
      >
        <option value="meta1">meta 1</option>
        <option value="meta2">meta 2</option>
        <option value="meta3">meta 3</option>
        <option value="meta4">meta 4</option>
        <option value="meta5">meta 5</option>
      </select>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">Submit meta</button>
      </form>
      {metas &&
        Object.keys(metas).map((item) => (
          <li>
            {item} = {metas[item]}
          </li>
        ))}
        </div>
    )
}

export default UpdateMeta