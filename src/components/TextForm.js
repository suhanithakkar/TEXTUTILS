import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        //console.log("Uppercase was clicked:" + text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("converted to uppercase","success");
    }
    const handleLoClick = () => {
        //console.log("Uppercase was clicked:" + text);
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("converted to lowercase","success");
    }
    const handleClearClick = () => {
        let newText = " ";
        setText(newText)
        props.showAlert("Text Cleared","success");
    }
    const handleOnChange = (event) => {
        //console.log("On change");
        setText(event.target.value);
    }
    const handleCopy = () => {
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied To Clipboard!","success");
    }
    const handleExtraSpaces = () =>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra Spaces Removed!","success");
    }
    const [text, setText] = useState("");
    //text = "new text";//wrong way to change the text
    //setText("new text");// correct way to change the state
    return (
        <>
            <div className='container' style={{color:props.mode==="dark"?"white":"#0e0d48"}}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==="dark"?"grey":"white",color:props.mode==="dark"?"white":"#0e0d48"}} id="myBox" rows="9"></textarea>
                </div>
                <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
                <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
                <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
                <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            </div>
            <div className='container m-3' style={{color:props.mode==="dark"?"white":"#0e0d48"}}>
                <h2>your text summery</h2>
                <p>{text.split(" ").length} words and {text.length}characters</p>
                <p>{0.008 * text.split(" ").length} Minutes read</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
            </div>
        </>
    )
}
