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

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>
      <button
        onClick={() => {
          setTitle(["여자코드 추천", "강남 우동 맛집", "자바 독학"]);
        }}
      >
        button
      </button>
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
    </div>
  );
}

export default App;
