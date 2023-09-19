import React from "react";
import Header from "../../layout/Header";
import ButtonList from "./ButtonList";
import InputComp from "./InputComp";

const Event = () => {
  // Event Listener
  const showResponse = () => {
    console.log("네, 만나서 반갑습니다.");
  };
  const showMessage = () => {
    console.log("그동안 잘 지내셨죠?");
  };

  // Event Listener using Document
  let pEle = document.getElementById("greeting");
  let inputEle = document.getElementById("message");

  if (pEle) {
    pEle.addEventListener("dblclick", () =>
      console.log("addEventListener, 네 , 만나서 반갑습니다.")
    );
  }
  if (inputEle) {
    inputEle.addEventListener("click", () =>
      console.log("addEventListener, 그동안 잘 지내셨죠?")
    );
  }

  // checking Event Bubbling
  const handleEvent = (e) => {
    console.log(`handle_event target: ${e.target.id} 
    currentTarget: ${e.currentTarget.id}
    `);
  };

  const handleEventClick = () => {
    alert("h1 엘리먼트를 클릭했습니다");
  };

  const handleEventObjectClick = (e) => {
    console.log(e.target.name);
    console.log(e.target.textContent);
    console.log(e.target.innerText);
  };

  return (
    <>
      <h3>이벤트 리스너 실습</h3>
      <div>
        <p onDoubleClick={showResponse}>안녕하세요</p>
        <button onClick={showMessage}>확인</button>
        <p id="greeting">안녕하세요.</p>
        <input id="message" type="button" value="확인" />
      </div>
      <h3>이벤트 버블링 실습</h3>
      <div id="grand" onClick={(e) => handleEvent(e)}>
        grandParent
        <div id="parent" onClick={(e) => handleEvent(e)}>
          parent
          <button id="child" onClick={(e) => handleEvent(e)}>
            child
          </button>
        </div>
      </div>
      <h3>이벤트 alert/object 실습</h3>
      <div>
        <Header handleClick={handleEventClick} />
        <ButtonList handleClick={handleEventObjectClick} />
      </div>
      <h3>이벤트 onChange 실습</h3>
      <InputComp />
    </>
  );
};

export default Event;
