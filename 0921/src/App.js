import "./App.css";
import CountryList from "./Components/CountryList";
import LoginForm from "./Components/LoginForm";
import TodoList from "./Components/TodoList";

function App() {
  return (
    <div className="App">
      <CountryList />
      <TodoList />
      <LoginForm />
    </div>
  );
}

export default App;
