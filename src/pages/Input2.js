import React, { useState } from "react";

export default function Input2() {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    tel: "",
  });

  const onChange = (e) => {
    const value = e.target.value;
    const id = e.target.id;
  };

  return (
    <div>
      <div>
        <label>이름</label>
        <input type="text" id="name" value={name} onChange={onChange} />
      </div>
      <div>
        <label>이메일</label>
        <input type="email" id="email" value={email} onChange={onChange} />
      </div>
      <div>
        <label>전화번호</label>
        <input type="tel" id="tel" value={tel} onChange={onChange} />
      </div>
    </div>
  );
}
