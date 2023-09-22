import { useRef, useState, useEffect } from "react";

export const Reference = () => {
  console.log("App rendering");
  const refInput = useRef();

  const [users, setUsers] = useState([]);
  const [inputData, setInputData] = useState("");

  const count = useRef(1);

  // React 컴포넌트가 렌더링될 때마다 특정 작업을 진행하도록 할 때 사용
  useEffect(() => {
    count.current += 1;
  });

  const handleInputChange = (e) => {
    setInputData(e.target.value);
  };

  const addUser = () => {
    setUsers((prev) => [inputData, ...prev]);
    setInputData("");
    refInput.current.focus();
  };

  return (
    <div className="container">
      <h1>렌더링 되는 횟수: {count.current}</h1>
      <input
        ref={refInput}
        type="text"
        name="new"
        value={inputData}
        onChange={handleInputChange}
      />
      &nbsp;&nbsp;
      <button onClick={addUser}>사용자 추가</button>
      <hr />
      {users.map((ele, idx) => {
        return <p key={idx}>{ele}</p>;
      })}
    </div>
  );
};
