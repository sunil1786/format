import React, { useEffect, useState } from "react";
import axios from "axios";


const TextForm = (props) => {
  
  const [text, setText] = useState("Enter text here!");


// Changing upper case
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  //Changing lower case
  const handleLcClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  // const handleLcChange = (event) => {
  //   setText(event.target.value);
  // };



  return (
    <>
      <div className="container">
        <div className="mb-3">
          <textarea
            onChange={handleOnChange}
            className="form-control"
            id="myBox"
            rows="8"
            value={text}
          ></textarea>
          <br/>
          <button onClick={handleUpClick} className="btn btn-primary">
            Convert to Uppercase
          </button>
          <button  onClick={handleLcClick} style={{marginLeft:50}} className=" btn btn-primary" >
          Convert to Lowercase
          </button>
        </div>
      </div>
      <div className="container">
        <h2>Your text summary</h2>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes to read</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>

      

    </>
  );
}


export default TextForm;