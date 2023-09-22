import { useState } from "react";

export const State = () => {
  const [departureTime, setDepartureTime] = useState(0);

  const [users, setUsers] = useState([]);
  const [inputData, setInputData] = useState("");

  const alarm = () => {
    departureTime >= 300
      ? setDepartureTime(0)
      : setDepartureTime((prev) => prev + 300);
    alert("파리행 탑승 수속을 시작합니다.");
  };

  const handleInputChange = (e) => {
    setInputData(e.target.value);
  };

  const addUser = () => {
    setUsers((prev) => {
      console.log("이전 데이터:", prev);
      return [inputData, ...prev];
    });
    setInputData("");
  };

  return (
    <>
      <div className="container">
        <p>{departureTime / 60}분 후 탑승수속 시작</p>
        <button onClick={alarm}>탑승 수속 시작 알림</button>
      </div>
      <div className="container">
        <input
          type="text"
          name="userName"
          value={inputData}
          onChange={handleInputChange}
          placeholder="추가할 사용자를 입력하세요."
        />
        &nbsp;&nbsp;
        <button onClick={addUser}>사용자 추가</button>
        <hr />
        {users.map((user) => {
          return <p key={user}>{user}</p>;
        })}
      </div>
    </>
  );
};
