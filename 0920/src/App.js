import "./App.css";
import Greet from "./components/Greet";
import People from "./components/People";
import Header from "./components/Layout/Header";
import Movies from "./components/Movies";
import ChildComponent from "./components/props_practice/ChildComponent";
import SpreadCity from "./components/SpreadCity";
import Main from "./components/state_practice/Main";
import Checkbox from "./components/state_practice/Checkbox";
import ContextCheckbox from "./components/context_practice/Checkbox";

function App() {
  return (
    <div className="App">
      <Header />
      <ContextCheckbox />
      <Checkbox />
      <Main />
      <SpreadCity />
      <ChildComponent />
      <Greet />
      <Movies />
      <People />
    </div>
  );
}

export default App;
