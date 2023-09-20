import _debounce from "debounce";

const InputComp = () => {
  return (
    <div>
      <label htmlFor="clientName">고객명 : </label>
      <input
        type="text"
        id="clientName"
        placeholder="고객 이름을 입력하세요."
        onChange={(e) => console.log(e)}
      />
      <input
        type="text"
        id="clientName"
        placeholder="(debounce) 고객 이름을 입력하세요."
        onChange={_debounce((e) => console.log(e), 2000)}
      />
    </div>
  );
};

export default InputComp;
