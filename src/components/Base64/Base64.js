import React, { useState } from 'react';

function Base64() {
  const [text, setText] = useState('');
  const [base64, setBase64] = useState('');

  const convertToBase64 = () => {
    const base64String = btoa(text);
    setBase64(base64String);
  };

  return (
    <div>
      <h1>Enter the text:</h1>
      <textarea
        className="form-control"
        id="myBox"
        rows="8"
        value={text}
        onChange={(e) => setText(e.target.value)}
      ></textarea>
      <button className="btn btn-primary my-1" onClick={convertToBase64}>
        Convert to Base64
      </button>
      {base64 && <p>Base64: {base64}</p>}
    </div>
  );
}

export default Base64;