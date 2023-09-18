import "./App.css";
import Conditional from "./components/Conditional";
import ArrayLoop from "./components/ArrayLoop";
import Loop from "./components/Loop";
import List from "./components/List";
import Menu from "./components/Menu";
import DummyText from "./components/DummyText";

function App() {
  return (
    <div className="App">
      <Menu />
      <List />
      <ArrayLoop />
      <Conditional />
      <Loop />
      <DummyText />
    </div>
  );
}

export default App;
