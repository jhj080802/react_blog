## State

- 변수 대신 쓰는 데이터 저장공간
- useState()를 이용해야함
- 문자, 숫자, array, object 다 저장 가능

## state에 데이터 저장해놓는 이유

- 웹이 app처럼 동작하게 만들고 싶어서
- state 변경 -> html이 **자동으로 재렌더링**이 됨
- 새로고침 없이도 html에 렌더링 됨

## 유저의 의한 array이 수정

- **복사본을** 만들어 수정하기
- deep copy해서 수정해야함
  - [...array]
  - state는 직접 건들지 않기

```
let [title, setTitle] = useState([
    "남자 코트 추천",
    "강남 우동 맛집",
    "자바 독학",
  ]);

  function changeTitle() {
    var newArray = [...title]; // deep copy
    newArray[0] = "여자 코트 추천";
    setTitle(newArray);
  }
```
