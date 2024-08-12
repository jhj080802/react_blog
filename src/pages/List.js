import React from "react";

export default function UserList() {
  const User = ({ userData }) => {
    return (
      <tr>
        <td>{userData.name}</td>
        <td>{userData.email}</td>
      </tr>
    );
  };

  const users = [
    { email: "h@gmail.com", name: "정효주" },
    { email: "y@gmail.com", name: "주여진" },
    { email: "s@gmail.com", name: "이서희" },
    { email: "e@gmail.com", name: "유은서" },
  ];
  return (
    <table>
      <thead>
        <tr>
          <th>이름</th>
          <th>이메일</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <User userData={user} />
        ))}
      </tbody>
    </table>
  );
}
