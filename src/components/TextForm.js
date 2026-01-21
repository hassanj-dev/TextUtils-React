import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase!", "success");
  };
  const handleOnChange = (event) => {
    console.log("On Change");
    setText(event.target.value);
    props.showAlert("Text Changed!", "success");
  };
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase!", "success");
  };
  const handleClearClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Text Cleared!", "success");
  };

  const handleCopyClick = () => {
    let newText = text;
    navigator.clipboard.writeText(newText);
    setText(newText);
    props.showAlert("Copied to Clipboard!", "success");
  };

  const [text, setText] = useState("Enter text here");
  return (
    <>
      <div
        className="container"
        style={{
    color: props.fallMode === "dark"
      ? "white"
      : props.mode === "dark"
      ? "white": "black",
  }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white",
              color: props.mode === "dark" ? "white" : "black",
              backgroundColor: props.fallMode === "dark" ? "blue" : "grey",
              color: props.fallMode === "dark" ? "white" : "black",
            }
          }
          
            id="myBox"
            rows="8"

            
          ></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-success mx-2" onClick={handleLoClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-danger" onClick={handleClearClick}>
          Clear Text
        </button>
        <button className="btn btn-secondary mx-2" onClick={handleCopyClick}>
          Copy All
        </button>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "black",props}}
        
      >
        <h2>Your Text Summary</h2>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>Read Time {0.008 * text.split(" ").length} Minutes</p>
        <h2>Preview</h2>
        <p>
          {text.length > 0
            ? text
            : "Enter something in the textbox above to preview it here"}
        </p>
      </div>
    </>
  );
}
