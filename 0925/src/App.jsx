import "./App.css";
import Callback from "./components/Callback";
import Memo from "./components/Memo";
import Counter from "./components/useReducer/Counter";
import Input from "./components/useReducer/Input";

function App() {
  return (
    <>
      <Memo />
      <Callback />
      <Counter />
      <Input />
    </>
  );
}

export default App;
