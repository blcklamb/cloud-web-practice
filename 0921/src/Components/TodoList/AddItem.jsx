import { useState } from "react";

const AddItem = ({ onCreate }) => {
  const [input, setInput] = useState("");

  const onChangeInput = (e) => setInput(e.target.value);

  const onSubmit = (e) => {
    e.preventDefault();
    onCreate(input);
    setInput("");
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        className="input"
        type="text"
        placeholder="할 일을 추가해주세요"
        onChange={onChangeInput}
        value={input}
      />
      <button className="basic-btn" type="submit">
        추가하기
      </button>
    </form>
  );
};

export default AddItem;
