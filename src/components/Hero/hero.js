import React, { useState } from 'react';

function Hero(props) {
  const [text, setText] = useState('');

  const handleInputChange = (e) => {
    setText(e.target.value);
  };

  const handleButtonClick = () => {
    setText(text.toUpperCase());
  };

  const handleclearText=()=>{
    setText('');
  }
  const handleLowerClick=()=>{
    setText(text.toLowerCase());
  }

  const handleCopytext=()=>{
    navigator.clipboard.writeText(text);
  }

  const handleExtraSpaces=()=>{
    let newText=text.split(/[ ]+/);
    setText(newText.join(" "));
  }

  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <textarea className="form-control my-3" id="myBox" rows="8" value={text} onChange={handleInputChange}></textarea>
        <button className="btn btn-primary mx-1" onClick={handleButtonClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleLowerClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-1" onClick={handleclearText}>Clear Text</button>
        <button className="btn btn-primary mx-1" onClick={handleCopytext}>Copy Text</button>
        <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
      </div>
      <div className="container my-3">
        <p className="text-3xl">Text Summary</p>
        <p className='my-3'>{text.split(" ").length} words and {text.length} characters</p>
        <p className="text-3xl">Preview</p>
        <div className="container">
          <p className='my-2'>{text}</p>
        </div>
      </div>
    </>
  );
}

export default Hero;