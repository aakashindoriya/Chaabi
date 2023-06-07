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
      <img src="https://user-images.githubusercontent.com/37771235/244142559-7b99c850-1159-4571-a909-a561ac8fd299.png" />
    </div>
  );
}
