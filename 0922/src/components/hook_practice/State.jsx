import { useState } from "react";

export const State = () => {
  const [departureTime, setDepartureTime] = useState(0);
  const alarm = () => {
    departureTime >= 300
      ? setDepartureTime(0)
      : setDepartureTime((prev) => prev + 300);
    alert("파리행 탑승 수속을 시작합니다.");
  };

  const [users, setUsers] = useState([]);
  const [inputData, setInputData] = useState("");
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

  const [age, setAge] = useState(29);
  const increment = () => {
    setAge((prev) => prev + 1);
    console.log(age);
    setAge((prev) => prev + 1);
    console.log(age);
    setAge((prev) => prev + 1);
    console.log(age);
    setAge((prev) => prev + 1);
    console.log(age);
  };

  const createInitialTodos = () => {
    const initialTodos = [];
    for (let i = 0; i < 2; i++) {
      initialTodos.push({ id: i, text: "Item" + (i + 1) });
    }
    console.log("createInitialTodos 실행됨");
    return initialTodos;
  };

  // ! 함수를 넘겼을 때랑 실행값을 넘겼을 때랑 call 횟수가 다르다!
  // const [todos, setTodos] = useState(createInitialTodos());
  const [todos, setTodos] = useState(createInitialTodos);
  const [text, setText] = useState("");
  3;

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
      <div className="container">
        <div>{age}</div>
        <button onClick={increment}>나이에 5를 더하기</button>
      </div>
      <div className="container">
        <input value={text} onChange={(e) => setText(e.target.value)} />
        <button
          onClick={() => {
            setText("");
            setTodos([{ id: todos.length, text: text }, ...todos]);
          }}
        >
          아이템추가
        </button>
        <ul>
          {todos.map((item) => (
            <li key={item.id}>{item.text}</li>
          ))}
        </ul>
      </div>
    </>
  );
};
