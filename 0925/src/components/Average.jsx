import { useState, useMemo } from "react";

const getAverage = (numbers) => {
  console.log("평균 계산");
  if (numbers.length === 0) return 0;
  return numbers.reduce((a, b) => a + b) / numbers.length;
};

const Average = () => {
  const [numberList, setNumberList] = useState([]);
  //! input의 data는 문자열
  const [numberValue, setNumberValue] = useState("");

  const memoAverage = useMemo(() => getAverage(numberList), [numberList]);

  const onChange = (e) => setNumberValue(e.target.value);

  const onInsert = () => {
    const nextList = numberList.concat(parseInt(numberValue));
    setNumberList(nextList);
    setNumberValue("");
  };

  return (
    <div>
      <input value={numberValue} onChange={onChange} />
      <button onClick={onInsert}>값 등록</button>
      <hr />
      <ul>
        {numberList.map((ele, idx) => (
          <li key={idx}>입력된 값: {ele}</li>
        ))}
      </ul>
      <p>평균(average): {memoAverage}</p>
    </div>
  );
};

export default Average;
