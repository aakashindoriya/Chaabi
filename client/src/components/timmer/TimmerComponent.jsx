import React, { useState, useEffect } from "react";
import styles from "./TimmerComponent.module.css";
const TimerComponent = ({ isTimer, setIsTimer }) => {
  const [timer, setTimer] = useState(5 * 60); // 5 minutes in seconds
  useEffect(() => {
    let interval = null;

    if (isTimer) {
      interval = setInterval(() => {
        setTimer((prevTimer) => {
          if (prevTimer > 0) {
            return prevTimer - 1;
          } else {
            clearInterval(interval);
            setIsTimer(0);
          }
        });
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => {
      clearInterval(interval);
    };
  }, [isTimer]);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <div className={styles.timmer}>
      <h1>Countdown Timer</h1>
      <p>Time Remaining: {formatTime(timer)}</p>
    </div>
  );
};

export default TimerComponent;
