import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("uppercase was clicked: " + text);
    let newText = text.toUpperCase();
    // setText("you have clicked on handleUpClick")
    setText(newText);
    props.showAlert("Converted to uppercase successfully!","success");
  };
  const handleLoClick = ()=>{
    let newText=text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase successfully!","success");
  }
  const handleClearClick =()=>{
    let newText='';
    setText(newText);
    props.showAlert("Text clear successfully!","success");
  }
  const handleOnChange = (event) => {
    // console.log("On change");
    setText(event.target.value);
  }
  const handleCopy=()=>{
    console.log('i am a copy');
    let text=document.getElementById('myBox');
    text.select(); 
    // text.setSelectionRange(0,9999); 
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text copied to clipboard successfully!","success");
  }
  const handleExtraSpaces=()=>{
    let newText=text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces has been removed successfully!","success");
  }

  // const [text, setText] = useState("Enter text here");
  const [text, setText] = useState("");
  return (
    <>
    <div className="container" style={{
      color:props.mode==='dark'?'white':'#042743'
    }}>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          value={text}
          onChange={handleOnChange}
          style={{
            backgroundColor:props.mode==='dark'?'gray':'white',
            color:props.mode==='dark'?'white':'#042743'
          }}
          className="form-control"
          id="myBox"
          rows="8"
        ></textarea>
      </div>
      <button className="btn btn-primary mx-1" onClick={handleUpClick}>
        Convert to Uppercase
      </button>
      <button className="btn btn-primary mx-1" onClick={handleLoClick}>
        Convert to Lowercase
      </button>
      <button className="btn btn-primary mx-1" onClick={handleClearClick}>
        Clear text
      </button>
      <button className="btn btn-primary mx-1" onClick={handleCopy}>
        Copy text
      </button>
      <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>
        Remove Extra Spaces
      </button>
    </div>

    <div className="container my-3" style={{
      color:props.mode==='dark'?'white':'#042743'
    }}>
      <h2>Your text Summary</h2>
      <p>{text==="" ? text.split(" ").length-1:text.split(" ").length} words and {text.length} characters</p>

      {/* <p>{text.split(" ").length} words and {text.length} characters</p> */}

      <p>{text===""?text.trim().split(".").filter((text)=>text!=="").length : text.split(".").length-1} no. of sentence</p>

      <p>{text===""?0:0.008 * text.split(" ").length} Minutes read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter Something in the textbox above to preview it here"}</p>
    </div>
    </>
    
  );
}
