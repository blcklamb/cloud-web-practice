import "./App.css";
import Callback from "./components/Callback";
import Memo from "./components/Memo";
import Counter from "./components/useReducer/Counter";
import Input from "./components/useReducer/Input";
import CaseChange from "./components/useReducer/CaseChange";

function App() {
  return (
    <>
      <Memo />
      <Callback />
      <Counter />
      <Input />
      <CaseChange />
    </>
  );
}

export default App;
