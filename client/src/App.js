import logo from './logo.svg';
import './App.css';
import TypingBox from './components/typingBox/TypingBox';
import TimerComponent from './components/timmer/TimmerComponent';
import { useEffect, useState } from 'react';
import AccuracyComponent from './components/accuracy/AccuracyComponent';
import KeyboardComponent from './components/keyboard/KeyboardComponent';
import Start from './components/startbutton/Start';
// const init = ["asd", "fdsa", "rad"]
const init = ["ask sad lad fad flask ads lad fads daks slak jas salk salad ska alfa flak jad alas sala jafas fajad lads ska laska dak falsa laka afal aja dak", "dsa fgs fasga jhkl lkjh kjfd kghf fassdsaf ssajkl sdfkjla hjasfshfdjf", "lkldsfkjljdfsj ldlkfdf lksakkdflsf dsfjkjdslfldhsf ldskfjsdklal dsfjlksjahfdj asdjfjhgfdkljsahsd askjdfhjdsk kaskk sdjfhdsf kldsfhfkjds sjdfhdjska"]
function App() {
  const [text, setText] = useState(init)
  const [index, setIndex] = useState(0)
  const [count, setCount] = useState(0);
  const [correct, setCorrect] = useState(0)
  const [typedText, setTypedText] = useState("");
  const [currIndex, setCurrentIndex] = useState(0);
  const [activeKey, setActiveKey] = useState("")
  const [isTimer, setTimer] = useState(false)
  useEffect(() => {
    if (currIndex == text[index].length) {
      if (index == 2) {
        setIndex(0)
        setCurrentIndex(0)
        setTypedText("")
      } else {
        setIndex(pre => pre + 1)
        setCurrentIndex(0)
        setTypedText("")
      }
    }
  }, [currIndex])
  return (
    <div className="App">
      <div id="stacks">
        {isTimer && <TimerComponent isTimer={isTimer} setIsTimer={setTimer} />}
        <AccuracyComponent correct={correct} total={count} />
      </div>
      {
        !isTimer && <Start
          setCurrentIndex={setCurrentIndex}
          setTypedText={setTypedText}
          setActiveKey={setActiveKey}
          setCount={setCount}
          setTimer={setTimer}
          setCorrect={setCorrect}
        />
      }
      {
        isTimer && <TypingBox
          text={text[index]}
          count={count}
          setCount={setCount}
          typedText={typedText}
          currIndex={currIndex}
          setCurrentIndex={setCurrentIndex}
          setTypedText={setTypedText}
          setActiveKey={setActiveKey}
          setCorrect={setCorrect}
        />
      }
      {
        isTimer && <KeyboardComponent activeKey={activeKey} />
      }
    </div>
  );
}

export default App;
