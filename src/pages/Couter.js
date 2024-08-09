import React, { useState } from "react";

export default function Counter() {
  const [num, setNum] = useState(0);

  const increase = () => {
    setNum(num + 1);
  };

  const decrease = () => {
    setNum(num - 1);
  };

  return (
    <div>
      <div>Counter</div>
      <button onClick={increase}>+1</button>
      <button onClick={decrease}>-1</button>
      <p>{num}</p>
    </div>
  );
}
