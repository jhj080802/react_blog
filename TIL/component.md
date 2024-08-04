## Coponent 만드는 법

1. 함수 만들고 이름 짓고
2. 축약을 원하는 html넣고
3. 원하는 곳에서 <함수명 />

```
function App(){
  return(
    <Modal /> // <Modal></Modal>
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
```

---

## 유의사항

1. 이름은 대문자로 시작
2. return()안에 있는 건 태그 하나로 묶어야 함

---

## Component로 만들면 좋은 것?

- 반복 되는 html 덩어리
- 자주 변경되는 html ui들
- 다른 페이지 만들 때도 컴포넌트로 만듦

---

## 많이 만들면 생기는 단점

- state 쓸 때 복잡해짐
  - 상위 component에서 만든 state 쓰려면 props 문법을 이용해야함
