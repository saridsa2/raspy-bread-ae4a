// src/App.tsx
import React, { useState, useRef } from "react";
import "./App.css";

function App() {
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef(null);

  const allowedSequence = ["j", "a", "i"];

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.toLowerCase();
    let newValue = "";
    for (let i = 0; i < value.length && i < 3; i++) {
      if (value[i] === allowedSequence[i]) {
        newValue += value[i];
      } else {
        break;
      }
    }
    setInputValue(newValue.toUpperCase());
  };

  const handleKeyDown = () => {};

  const handleBlur = () => {};

  return (
    <div>
      <img src="/GqURL0BXUAApbgD.jpeg" alt="Operation Sindoor" className="fullscreen-image" />
      <div className="overlay-army">
        <div className="army-text">Operation Sindhoor Underway</div>
        <div className="army-subtext">
          Bharath Mata Ki..{' '}
          <input
            ref={inputRef}
            className="army-input"
            type="text"
            value={inputValue}
            onChange={handleInput}
            onKeyDown={handleKeyDown}
            onBlur={handleBlur}
            maxLength={3}
            autoComplete="off"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
