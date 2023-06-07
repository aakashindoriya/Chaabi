import logo from './logo.svg';
import './App.css';
import TypingBox from './components/typingBox/TypingBox';
import TimerComponent from './components/timmer/TimmerComponent';
import { useState } from 'react';
import AccuracyComponent from './components/accuracy/AccuracyComponent';
import KeyboardComponent from './components/keyboard/KeyboardComponent';

function App() {
  const [count, setCount] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [currIndex, setCurrentIndex] = useState(0);
  const [activeKey, setActiveKey] = useState("")
  const [running, setRunning] = useState(false)

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
        setActiveKey={setActiveKey}
      />
      <KeyboardComponent activeKey={activeKey} />
    </div>
  );
}

export default App;
