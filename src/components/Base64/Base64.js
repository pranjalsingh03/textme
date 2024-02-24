import React, { useState } from 'react';

function Base64() {
  const [text, setText] = useState('');
  const [base64, setBase64] = useState('');

  const convertToBase64 = () => {
    const base64String = btoa(text);
    setBase64(base64String);
  };
  const Base64ToText=()=>{
    const textString = atob(base64);
    setText(textString);
  }
  const handleCopytext=()=>{
    navigator.clipboard.writeText(text);
  }
  const handleclearText=()=>{
    setText('');
  }
  const handleCopyBase64=(e)=>{
    navigator.clipboard.writeText(base64);
    }

  return (
    <div>
      <h1>Enter the text:</h1>
      <textarea
        className="form-control"
        id="myBox"
        rows="8"
        value={text}
        onChange={(e) => setText(e.target.value)}>
      </textarea>
      <button disabled={text.length===0} className="btn btn-primary my-1" onClick={convertToBase64}>
        Encode to Base64
      </button>
      <button disabled={text.length===0} className="btn btn-primary my-1 mx-1" onClick={Base64ToText}>Decode from Base64</button>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopytext}>Copy text</button>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleclearText}>Clear</button>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopyBase64}>Copy Base64</button>
      {base64 && <p className='py-2'>Base64: {base64}</p>}
      {text && <p className='py-2'>Text: {text}</p>}
    </div>
  );
}

export default Base64;