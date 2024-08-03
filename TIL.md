## react를 사용하는 이유

- 데이터 바인딩이 간편함
  - {} 사용

```
import logo from "./logo.svg";
import "./App.css";

function App() {
  let posts = "강남 고기 맛집";
  function 함수() {
    return 100;
  }

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 blog</div>
      </div>
      <img src={ logo } />
      <h4>{posts}</h4>
      <h4>{함수()}</h4>
    </div>
  );
}

export default App;
```

---

## styes 사용

오브젝트 형식으로 사용해야 한다.

```
import "./App.css";

function App() {
  let posts = "강남 고기 맛집";

  return (
    <div className="App">
      <div className="black-nav">
        <div style={{ color: "blue", fontSize: "30px" }}>개발 blog</div>
      </div>
      <h4>{posts}</h4>
    </div>
  );
}

export default App;
```
