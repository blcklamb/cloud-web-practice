import "./App.css";
import { Main } from "./components/Main";
import { NavigationLink } from "./components/NavigationLink";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="App">
      <NavigationLink />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
