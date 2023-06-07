import React from "react";
import style from "./Start.module.css";
export default function Start({
  setCurrentIndex,
  setTypedText,
  setActiveKey,
  setCount,
  setTimer,
}) {
  function handleClick() {
    setCurrentIndex(0);
    setTypedText("");
    setActiveKey("");
    setCount(0);
    setTimer(true);
  }
  return (
    <div className={style.start}>
      <button onClick={handleClick}>Start</button>
    </div>
  );
}
