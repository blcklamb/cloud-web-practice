import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  increment,
  decrement,
  incrementByAmount,
  incrementAsync,
} from "./counterSlice";

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const [amount, setAmount] = useState(1);

  const dispatch = useDispatch();

  const handleIncrement = () => dispatch(increment());
  const handleDecrement = () => dispatch(decrement());

  const handleAmountIncrement = () => dispatch(incrementByAmount(+amount));
  const handleAmountDecrement = () => dispatch(incrementByAmount(-1 * amount));

  const handleAsyncIncrement = () => dispatch(incrementAsync(+amount));
  const handleAsyncDecrement = () => dispatch(incrementAsync(-1 * amount));

  return (
    <div className="counter">
      <h1>Count: {count}</h1>
      <div className="progress-container">
        <div className="progress">
          <div className="progress-bar2" />
        </div>
      </div>
      <div>
        <button onClick={handleIncrement} type="button">
          + 1
        </button>
        <button onClick={handleDecrement} type="button">
          - 1
        </button>
      </div>
      <div>
        <input value={amount} onChange={(e) => setAmount(e.target.value)} />
        <button onClick={handleAmountIncrement} type="button">
          증가
        </button>
        <button onClick={handleAmountDecrement} type="button">
          감소
        </button>
      </div>
      <div>
        <button onClick={handleAsyncIncrement} type="button">
          1초 후 증가
        </button>
        <button onClick={handleAsyncDecrement} type="button">
          1초 후 감소
        </button>
      </div>
    </div>
  );
};

export default Counter;
