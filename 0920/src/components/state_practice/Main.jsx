import { useState } from "react";

const Main = () => {
  const [count, setCount] = useState(0);
  const onIncrease = (e) => setCount((prev) => prev + 1);
  // TODO: compare
  //   const onIncrease = (e) => {
  //     console.log(e.target.value, count);
  //     setCount(count + 1);
  //   };
  const onDecrease = () => setCount((prev) => Math.max(0, prev - 1));

  const [input, setInput] = useState({ userId: "", userPW: "" });
  const { userId, userPW } = input;
  const onChange = (e) => {
    const { name, value } = e.target;
    setInput({
      ...input,
      [name]: value,
    });
  };

  const onReset = () => setInput({ userId: "", userPW: "" });

  return (
    <div className="container">
      <h1>카운트</h1>
      <div className="main flexCol">
        <p className="countNum">{count}</p>
        <button className="countBtn" onClick={onIncrease}>
          증가
        </button>
        <button className="countBtn" onClick={onDecrease}>
          감소
        </button>
      </div>
      <div className="main flexCol">
        <div className="inputColContainer">
          <input
            className="input"
            name="userId"
            onChange={onChange}
            value={userId}
          />
          <input
            className="input"
            name="userPW"
            onChange={onChange}
            value={userPW}
          />
        </div>
        <button className="resetBtn" name="btnReset" onClick={onReset}>
          초기화
        </button>
      </div>
      <p>
        userId: {userId} userPW: {userPW}
      </p>
    </div>
  );
};

export default Main;
