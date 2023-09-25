import { useState } from "react";
import { useReducer } from "react";

const reducerFn = (state, action) => {
  switch (action.type) {
    case "increase":
      return state + 1;
    case "decrease":
      return state - 1;
    default:
      return state;
  }
};

const Counter = () => {
  // useState
  const [count, setCount] = useState(0);
  // useReducer
  const [state, dispatch] = useReducer(reducerFn, 0);

  return (
    <div className="container">
      <h3>Count: {count}</h3>
      <button onClick={() => setCount((prev) => prev + 1)} type="button">
        1 증가
      </button>
      <button onClick={() => setCount((prev) => prev - 1)} type="button">
        1 감소
      </button>
      <hr />
      <h3>Count: {state}</h3>
      <button onClick={() => dispatch({ type: "increase" })} type="button">
        1 증가
      </button>
      <button onClick={() => dispatch({ type: "decrease" })} type="button">
        1 감소
      </button>
    </div>
  );
};

export default Counter;
