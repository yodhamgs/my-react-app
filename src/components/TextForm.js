import React, { useState } from 'react';

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleUpClick = () => {
    const newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase!", "success");
  };

  const handleLowClick = () => {
    const newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase!", "success");
  };

  const handleClearClick = () => {
    setText("");
    props.showAlert("Text Cleared!", "success");
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Copied to Clipboard!", "success");
  };

  const handleExtraSpaces = () => {
    const newText = text.split(/[ ]+/).join(" ");
    setText(newText);
    props.showAlert("Extra Spaces Removed!", "success");
  };

  const handleReverseText = () => {
    const newText = text.split("").reverse().join("");
    setText(newText);
    props.showAlert("Text Reversed!", "success");
  };

  const handleCapitalizeWords = () => {
    const newText = text
      .toLowerCase()
      .split(" ")
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
    setText(newText);
    props.showAlert("Words Capitalized!", "success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  // Count words accurately by filtering out empty strings
  const wordCount = text.trim().split(/\s+/).filter((element) => element.length !== 0).length;

  return (
    <>
      <div className="container" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === 'dark' ? '#333' : 'white',
              color: props.mode === 'dark' ? 'white' : '#042743'
            }}
            id="myBox"
            rows="8"
            placeholder="Type your text here..."
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick} disabled={text.length === 0}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleLowClick} disabled={text.length === 0}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleClearClick} disabled={text.length === 0}>
          Clear Text
        </button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleCopy} disabled={text.length === 0}>
          Copy Text
        </button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces} disabled={text.length === 0}>
          Remove Extra Spaces
        </button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleReverseText} disabled={text.length === 0}>
          Reverse Text
        </button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleCapitalizeWords} disabled={text.length === 0}>
          Capitalize Words
        </button>
      </div>
      <div className="container my-4" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
        <h2>Your Text Summary</h2>
        <p>{wordCount} words and {text.length} characters</p>
        <p>{0.008 * wordCount} minutes required to read</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Enter some text above to preview it here."}</p>
      </div>
    </>
  );
}
