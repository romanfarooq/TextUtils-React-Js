import React, { useState } from "react";

function TextForm(props) {

  const [text, setText] = useState("");

  const handleUpClick = () => {
    setText(text.toUpperCase());
    props.showAlert("Converted To Uppercase!", "success");
  };

  const handleLowerClick = () => {
    setText(text.toLowerCase());
    props.showAlert("Converted To Lowercase!", "success");
  };

  const handleClsClick = () => {
    setText("");
    props.showAlert("Cleared Text!", "success");
  };

  const handleCopyClick = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Copied To Clipboard", "success");
  };

  const handleExtraClick = () => {
    setText(text.replace(/\s+/g, " ").trim());
    props.showAlert("Removed Extra Spaces!", "success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  return (
    <>
      <div className="container my-3">
        <h1 style={{ color: props.mode === "dark" ? "white" : "black" }}>
          {props.heading}
        </h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
            style={{
              color: props.mode === "dark" ? "white" : "#042743",
              backgroundColor: props.mode === "dark" ? "#16466e" : "white"
            }}
          ></textarea>
        </div>
        <button
          disabled={text.replace(/\s/g, "").length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleUpClick}
        >
          Convert To UpperCase
        </button>
        <button
          disabled={text.replace(/\s/g, "").length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleLowerClick}
        >
          Convert To LowerCase
        </button>
        <button
          disabled={text.replace(/\s/g, "").length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleClsClick}
        >
          Clear Text
        </button>
        <button
          disabled={text.replace(/\s/g, "").length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleCopyClick}
        >
          Copy Text
        </button>
        <button
          disabled={text.replace(/\s/g, "").length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleExtraClick}
        >
          Remove Extra Spaces
        </button>
      </div>
      <div
        className="container my-2"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1>Your Text Summary</h1>
        <p>
          {text.split(/\s+/).filter((word) => word !== "").length} Words and {text.replace(/\s/g, "").length} Characters
        </p>
        <p>
          {0.008 * text.split(/\s+/).filter((word) => word !== "").length} Minutes To Read
        </p>
      </div>
    </>
  );
}

export default TextForm;
