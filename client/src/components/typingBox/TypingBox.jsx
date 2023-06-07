import React, { useState } from "react";
import styles from "./TypingBox.module.css";

export default function TypingBox({
  text,
  setCount,
  setTypedText,
  setCurrentIndex,
  typedText,
  currIndex,
  setActiveKey,
}) {
  function handleInputs(e) {
    const inputValue = e.target.value;
    const matchingPart = text.slice(0, currIndex + 1);
    if (matchingPart === inputValue.slice(0, currIndex + 1)) {
      setCount((prevCount) => prevCount + 1);
      setCurrentIndex((prevIndex) => prevIndex + 1);
      setTypedText(inputValue);
    } else {
      setCount((prevCount) => prevCount + 1);
    }
  }
  const handleKeyPress = (event) => {
    const key = event.key.toUpperCase();
    if ((key >= "A" && key <= "L") || key == "S") {
      setActiveKey(key);
    }
  };
  const matchingPart = text.slice(0, currIndex);
  const remainingPart = text.slice(currIndex);
  return (
    <div className={styles.typingBox}>
      <div>
        <span style={{ color: "green" }}>{matchingPart}</span>
        <span style={{ color: "white" }}>{remainingPart}</span>
        {/* {Math.round((currIndex / count) * 100) || 100} % */}
      </div>
      <div>
        <input
          value={typedText}
          onChange={handleInputs}
          onKeyPress={handleKeyPress}
        />
      </div>
    </div>
  );
}
