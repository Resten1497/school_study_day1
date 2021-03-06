import React, { useState, useEffect } from "react";
import Content from "./Component/Content";
import Header from "./Component/Header";
function App() {
  const [message, setMessage] = useState(0);
  const [color, setColor] = useState("black");
  const onClickListener = () => setMessage(message + 1);
  // useEffect의 1번째 용도, 랜더링이 발생하면 실행
  // useEffect(() => {
  //   console.log("rendering!");
  // });

  // useEffect의 2번째 용도, 최초 렌더링에 실행
  // useEffect(() => {
  //   console.log("rendering!");
  // }, []);

  // useEffect의 3번째 용도, 특정 state 변경시 실행
  useEffect(() => {
    console.log("rendering!");
  }, [message]);

  return (
    <div>
      <Header></Header>
      <Content content={"안녕하세용"} name={"정상현"}></Content>
      <button onClick={onClickListener}>State 변경</button>
      <button style={{ color: "red" }} onClick={() => setColor("red")}>
        red
      </button>
      <button style={{ color: "blue" }} onClick={() => setColor("blue")}>
        blue
      </button>
      <button style={{ color: "green" }} onClick={() => setColor("green")}>
        green
      </button>

      <p style={{ color }}>현재 색은 {color} 입니다</p>
    </div>
  );
}

export default App;
