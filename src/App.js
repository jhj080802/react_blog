import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  let [title, setTitle] = useState(["남자 코트 추천", "강남 우동 맛집"]);

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>
      <div className="list">
        <h3> {title} </h3>
        <p>2월 17일 발행</p>
        <hr />
      </div>
    </div>
  );
}

export default App;
