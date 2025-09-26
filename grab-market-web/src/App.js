import logo from "./logo.svg";
import "./App.css";
import ChildComponent from "./child.js";
import TimerComponent from "./timer.js";

function App() {
  const text = "안녕하세요, 월드";
  const sayHello = function () {
    return <h3>연습 함수를 적어봤습니다</h3>;
  };
  const sayHello2 = function () {
    alert("onClick 이벤트입니다");
  };
  return (
    <div>
      <h1>Hello, World!</h1>
      <h2>{text}</h2>
      {sayHello()}
      <div onClick={sayHello2}>Click me</div>
      <TimerComponent />
      <ChildComponent name="수민" age={30} />
      <ChildComponent name="재희" age={25} />
      <ChildComponent name="민수" age={28} />
      <ChildComponent name="정연" age={22} />
    </div>
  );
}

export default App;
