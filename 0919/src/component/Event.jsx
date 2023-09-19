import React from "react";

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

  return (
    <>
      <h3>이벤트 리스너 실습</h3>
      <p onDoubleClick={showResponse}>안녕하세요</p>
      <button onClick={showMessage}>확인</button>
      <p id="greeting">안녕하세요.</p>
      <input id="message" type="button" value="확인" />
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
    </>
  );
};

export default Event;
