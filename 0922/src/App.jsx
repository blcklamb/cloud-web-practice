import "./App.css";
import { Main } from "./components/Main";
import { NavigationLink } from "./components/NavigationLink";
import { Footer } from "./components/Footer";
import { State } from "./components/hook_practice/State";

function App() {
  return (
    <div className="App">
      <NavigationLink />
      <State />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
