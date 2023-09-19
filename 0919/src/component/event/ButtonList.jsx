import React from "react";

const ButtonList = ({ handleClick }) => {
  return (
    <div>
      <h3>Main</h3>
      <button name="btnOK" onClick={handleClick}>
        확인
      </button>
      <button name="btnCancel" onClick={handleClick}>
        취소
      </button>
    </div>
  );
};
export default ButtonList;
