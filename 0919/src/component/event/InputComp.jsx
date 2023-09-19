import React from "react";

const InputComp = () => {
  return (
    <div>
      <label>고객명 : </label>
      <input
        type="text"
        name="clientName"
        placeholder="고객 이름을 입력하세요."
        onChange={(e) => console.log(e)}
      />
    </div>
  );
};

export default InputComp;
