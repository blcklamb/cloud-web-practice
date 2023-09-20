import React from "react";
import { debounce, throttle } from "throttle-debounce";

const ThrottleComp = () => {
  return (
    <div>
      <input
        type="text"
        id="movieName"
        placeholder="검색할 영화를 입력해 주세요."
        onChange={debounce(2000, (e) => console.log(e.target.value))}
      ></input>
      <button onClick={throttle(2000, () => console.log("검색 요청"))}>
        검색
      </button>
    </div>
  );
};

export default ThrottleComp;
