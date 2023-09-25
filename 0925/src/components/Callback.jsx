import { useCallback, useState } from "react";

const fnCount = new Set();

const Callback = () => {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(0);

  //   const incrementCount = () => setCount((prev) => prev + 1);
  //   const decrementCount = () => setCount((prev) => prev - 1);
  //   const incrementNumber = () => setNumber((prev) => prev + 1);

  const incrementCount = useCallback(
    () => setCount((prev) => prev + 1),
    [count]
  );
  const decrementCount = useCallback(
    () => setCount((prev) => prev - 1),
    [count]
  );
  const incrementNumber = useCallback(
    () => setNumber((prev) => prev + 1),
    [number]
  );

  fnCount.add(incrementCount);
  fnCount.add(decrementCount);
  fnCount.add(incrementNumber);
  //   alert(fnCount.size);

  return (
    <div className="container">
      <h3>Count: {count}</h3>
      <button onClick={incrementCount}>Count 증가</button>&nbsp;
      <button onClick={decrementCount}>Count 감소</button>&nbsp;
      <button onClick={incrementNumber}>Number 증가</button>
    </div>
  );
};

export default Callback;
