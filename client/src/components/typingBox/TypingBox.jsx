import React, { useEffect, useRef, useState } from "react";
import styles from "./TypingBox.module.css";
import rightSound from "../sound/files/right.wav";
import { playSound } from "../sound/Playaudio";
import wrongSound from "../sound/files/wrong.wav";

export default function TypingBox({
  text,
  setCount,
  setTypedText,
  setCurrentIndex,
  typedText,
  currIndex,
  setActiveKey,
  setCorrect,
}) {
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  function handleInputs(e) {
    const inputValue = e.target.value;
    const matchingPart = text.slice(0, currIndex + 1);
    if (matchingPart === inputValue.slice(0, currIndex + 1)) {
      setCount((prevCount) => prevCount + 1);
      setCurrentIndex((prevIndex) => prevIndex + 1);
      setCorrect((pre) => pre + 1);
      setTypedText(inputValue);
      playSound(rightSound);
    } else {
      setCount((prevCount) => prevCount + 1);
      playSound(wrongSound);
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
          ref={inputRef}
          value={typedText}
          onChange={handleInputs}
          onKeyPress={handleKeyPress}
        />
      </div>
    </div>
  );
}
