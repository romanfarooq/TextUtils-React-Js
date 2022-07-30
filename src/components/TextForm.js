import React, { useState } from 'react';

function TextForm(props) {

    const [text, setText] = useState("");

    const handleUpClick = () => {
        setText(text.toUpperCase());
        props.showAlert("Converted To Uppercase!", "success");
    }

    const handleLowerClick = () => {
        setText(text.toLowerCase());
        props.showAlert("Converted To Lowercase!", "success");
    }

    const handleClsClick = () => {
        setText("");
        props.showAlert("Cleared Text!", "success");
    }

    const handleExtraClick = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Removed Extra Spaces!", "success");
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const wordCount = (text) => {
        let count = text.trim().split(/\s+/).length;
        if (count === 1) {
            if (/[a-zA-Z]/.test(text)) {
                return 1;
            }
            else {
                return 0;
            }
        }
        else {
            return count;
        }
    }

    return (
        <>
            <div className="container my-3">
                <h1 style={{ color: props.mode === "dark" ? "white" : "black" }}>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"
                        style={{ color: props.mode === "dark" ? "white" : "black", backgroundColor: props.mode === "dark" ? "grey" : "white" }}></textarea>
                </div>
                <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert To UpperCase</button>
                <button className="btn btn-primary mx-1" onClick={handleLowerClick}>Convert To LowerCase</button>
                <button className="btn btn-primary mx-1" onClick={handleClsClick}>Clear Text</button>
                <button className="btn btn-primary mx-1" onClick={handleExtraClick}>Remove Extra Spaces</button>
            </div>
            <div className="container my-2" style={{ color: props.mode === "dark" ? "white" : "black" }}>
                <h1>Your Text Summary</h1>
                <p>{wordCount(text)} Words and {text.length} Characters</p>
                <p>{0.008 * wordCount(text)} Minutes To Read</p>
            </div>
        </>
    );
}

export default TextForm