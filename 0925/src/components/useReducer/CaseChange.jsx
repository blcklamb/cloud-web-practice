import { useReducer } from "react";

const CaseChange = () => {
  const initialState = { text: "", isUpperCase: false };

  const reducerFn = (state, action) => {
    switch (action.type) {
      case "SET_TEXT":
        return { ...state, text: action.text };
      case "TOGGLE_UPPERCASE":
        return { text: state.text.toUpperCase(), isUpperCase: true };
      case "TOGGLE_LOWERCASE":
        return { text: state.text.toLowerCase(), isUpperCase: false };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducerFn, initialState);

  const handleChange = (e) => {
    dispatch({ type: "SET_TEXT", text: e.target.value });
  };

  return (
    <div className="container">
      <input value={state.text} onChange={handleChange} />
      <div>
        <button onClick={() => dispatch({ type: "TOGGLE_UPPERCASE" })}>
          대문자로 만들기
        </button>
        <button onClick={() => dispatch({ type: "TOGGLE_LOWERCASE" })}>
          소문자로 만들기
        </button>
      </div>
    </div>
  );
};

export default CaseChange;
