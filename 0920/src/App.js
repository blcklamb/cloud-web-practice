import "./App.css";
import Greet from "./components/Greet";
import People from "./components/People";
import Header from "./components/Layout/Header";
import Movies from "./components/Movies";
import ChildComponent from "./components/props_practice/ChildComponent";
import SpreadCity from "./components/SpreadCity";
import Main from "./components/state_practice/Main";

function App() {
  return (
    <div className="App">
      <Header />
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
