import logo from './logo.svg';
import './App.css';
import TypingBox from './components/typingBox/TypingBox';
import TimerComponent from './components/timmer/TimmerComponent';
import { useEffect, useState } from 'react';
import AccuracyComponent from './components/accuracy/AccuracyComponent';
import KeyboardComponent from './components/keyboard/KeyboardComponent';
import Start from './components/startbutton/Start';
const text = "ask sad lad fad flask ads lad fads daks slak jas salk salad ska alfa flak jad alas sala jafas fajad lads ska laska dak falsa laka afal aja dak"
function App() {
  const [count, setCount] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [currIndex, setCurrentIndex] = useState(0);
  const [activeKey, setActiveKey] = useState("")
  const [isTimer, setTimer] = useState(false)
  useEffect(() => {
    if (currIndex == text.length) {
      setTimer(false)
    }
  }, [currIndex])
  return (
    <div className="App">
      <div id="stacks">
        {isTimer && <TimerComponent isTimer={isTimer} setIsTimer={setTimer} />}
        <AccuracyComponent correct={currIndex} total={count} />
      </div>
      {
        !isTimer && <Start
          setCurrentIndex={setCurrentIndex}
          setTypedText={setTypedText}
          setActiveKey={setActiveKey}
          setCount={setCount}
          setTimer={setTimer}
        />
      }
      {
        isTimer && <TypingBox
          text={text}
          count={count}
          setCount={setCount}
          typedText={typedText}
          currIndex={currIndex}
          setCurrentIndex={setCurrentIndex}
          setTypedText={setTypedText}
          setActiveKey={setActiveKey}
        />
      }
      <KeyboardComponent activeKey={activeKey} />
    </div>
  );
}

export default App;
