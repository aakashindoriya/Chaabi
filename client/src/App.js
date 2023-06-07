import logo from './logo.svg';
import './App.css';
import TypingBox from './components/typingBox/TypingBox';
import TimerComponent from './components/timmer/TimmerComponent';
import { useState } from 'react';
import AccuracyComponent from './components/accuracy/AccuracyComponent';

function App() {
  const [count, setCount] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [currIndex, setCurrentIndex] = useState(0);

  return (
    <div className="App">
      <div id="stacks">
        <TimerComponent />
        <AccuracyComponent correct={currIndex} total={count} />
      </div>
      <TypingBox
        text={"you can feel the height"}
        count={count}
        setCount={setCount}
        typedText={typedText}
        currIndex={currIndex}
        setCurrentIndex={setCurrentIndex}
        setTypedText={setTypedText}
      />
    </div>
  );
}

export default App;
