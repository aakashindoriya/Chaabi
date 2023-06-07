import React from "react";
import style from "./KeyboardComponent.module.css";
const KeyboardComponent = ({ activeKey }) => {
  const keys = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
  return (
    <div className={style.keyboard}>
      {keys.map((key) => (
        <div
          key={key}
          style={{ backgroundColor: activeKey === key ? "green" : "white" }}
        >
          {key}
        </div>
      ))}
    </div>
  );
};

export default KeyboardComponent;
