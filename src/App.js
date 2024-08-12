import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/About";
import Counter from "./pages/Couter";
// import List from "./pages/List";
import Input from "./pages/Input";

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link> |
        {/* <Link to="/list">List</Link> */}
        <Link to="/counter">Counter</Link> | <Link to="/input">Input</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/input" element={<Input />} />

        {/* <Route path="/list" element={<List />} /> */}
      </Routes>
    </div>
  );
}

export default App;
