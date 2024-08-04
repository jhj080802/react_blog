/*eslint-disable*/
import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  let [title, setTitle] = useState([
    "남자 코트 추천",
    "강남 우동 맛집",
    "자바 독학",
  ]);
  let [heart, setHeart] = useState(0);

  function changeTitle() {
    var newArray = [...title];
    newArray[0] = "여자 코트 추천";
    setTitle(newArray);
  }

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>
      <button onClick={changeTitle}>button</button>
      <div className="list">
        <h3>
          {title[0]}
          <span
            onClick={() => {
              setHeart(heart + 1);
            }}
          >
            👍
          </span>
          {heart}
        </h3>
        <p>2월 17일 발행</p>
        <hr />
      </div>
      <div className="list">
        <h3> {title[1]} </h3>
        <p>2월 18일 발행</p>
        <hr />
      </div>
      <div className="list">
        <h3> {title[2]} </h3>
        <p>2월 19일 발행</p>
        <hr />
      </div>

      <Modal></Modal>
    </div>
  );
}

function Modal() {
  return (
    <div className="modal">
      <h2>제목</h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
}

export default App;
