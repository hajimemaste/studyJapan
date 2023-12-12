import { useState } from "react";
import "./App.css";
import {
  FaArrowCircleLeft,
  FaArrowCircleRight,
  FaRandom,
} from "react-icons/fa";

function App() {
  const Hiragana = [
    "あ",
    "い",
    "う",
    "え",
    "お",
    "か",
    "き",
    "く",
    "け",
    "こ",
    "さ",
    "し",
    "す",
    "せ",
    "そ",
    "た",
    "ち",
    "つ",
    "て",
    "と",
    "な",
    "に",
    "ぬ",
    "ね",
    "の",
    "は",
    "ひ",
    "ふ",
    "へ",
    "ほ",
    "ま",
    "み",
    "む",
    "め",
    "も",
    "や",
    "ゆ",
    "よ",
    "ら",
    "り",
    "る",
    "れ",
    "ろ",
    "わ",
    "を",
    "ん",
    "が",
    "ぎ",
    "ぐ",
    "げ",
    "ご",
    "ざ",
    "じ",
    "ず",
    "ぜ",
    "ぞ",
    "だ",
    "ぢ",
    "づ",
    "で",
    "ど",
    "ば",
    "び",
    "ぶ",
    "べ",
    "ぼ",
    "ぱ",
    "ぴ",
    "ぷ",
    "ぺ",
    "ぽ",
  ];
  const [text, setText] = useState(0);
  const [level, setLevel] = useState(1);

  const actionText = (action) => {
    switch (action) {
      case "up":
        if (text < level * 5 - 1) {
          setText(text + 1);
        }
        break;
      case "random":
        if (text != Math.floor(Math.random() * (level * 5))) {
          setText(Math.floor(Math.random() * (level * 5)));
        }
        break;
      case "down":
        if (text > 0) {
          setText(text - 1);
        }
        break;
    }
  };
  const levelValue = (e) => {
    setLevel(parseInt(e.target.value));
  };
  return (
    <>
      <div className="container">
        <h1 className="title">Bảng Chữ Cái Hiragana</h1>
        <div className="box">
          <p>{Hiragana[text]}</p>
        </div>
        <div className="control">
          <div className="select-level">
            <p>Chọn mức độ: </p>
            <select name="level" id="level" onChange={(e) => levelValue(e)}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
            <button onClick={() => setText(0)}>Start</button>
          </div>
          <div className="btn">
            <FaArrowCircleLeft onClick={() => actionText("down")} />
            <FaRandom onClick={() => actionText("random")} />
            <FaArrowCircleRight onClick={() => actionText("up")} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
