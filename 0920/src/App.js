import "./App.css";
import Greet from "./components/Greet";
import Main from "./components/Main";
import People from "./components/People";
import Header from "./components/Layout/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Greet />
      <Main />
      <People />
    </div>
  );
}

export default App;
