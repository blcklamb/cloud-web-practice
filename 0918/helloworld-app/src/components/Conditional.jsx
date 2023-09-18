import React from "react";

function Conditional() {
  const isTrue = Math.round(Math.random());
  const name = isTrue ? "체르니" : "김창수";
  const greeting = isTrue
    ? "만나서 반갑습니다."
    : "새로운 멤버가 되신 것을 환영합니다.";
  let currentTime = new Date().toTimeString();
  const customerID = undefined;
  return (
    <div>
      <h2>AND OR TERNARY 연산자 실습</h2>
      {!!isTrue && <p>isTrue가 {(!!isTrue).toString()}입니다</p>}
      {!isTrue && <p>isTrue가 {String(!!isTrue)}입니다</p>}
      <h3>안녕하세요, {name}님!</h3>
      <div>
        <p>{greeting}</p>
        <p>{currentTime}</p>
      </div>
      {typeof name}
      <br></br>
      {typeof customerID}
      {customerID || <p>고객명: {name}</p>}
    </div>
  );
}

export default Conditional;
