import "./App.css";
import { Main } from "./components/Main";
import { NavigationLink } from "./components/NavigationLink";
import { Footer } from "./components/Footer";
import { State } from "./components/hook_practice/State";
import { Reference } from "./components/hook_practice/Reference";

function App() {
  return (
    <div className="App">
      <NavigationLink />
      <Reference />
      <State />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
