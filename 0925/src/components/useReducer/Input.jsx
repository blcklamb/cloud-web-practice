import { useReducer } from "react";

const Input = () => {
  const reducerFn = (state, action) => {
    return {
      ...state,
      [action.name]: action.value,
    };
  };
  const [state, dispatch] = useReducer(reducerFn, { name: "", password: "" });
  const { name, password } = state;

  const onChange = (e) => {
    dispatch(e.target);
  };

  return (
    <div className="container">
      <div>
        <input name="name" value={name} onChange={onChange} />
        <input name="password" value={password} onChange={onChange} />
      </div>
      <div>
        <p>이름: {name}</p>
        <p>비밀번호: {password}</p>
      </div>
    </div>
  );
};

export default Input;
