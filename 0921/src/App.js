import "./App.css";
import LoginForm from "./Components/LoginForm";
import TodoList from "./Components/TodoList";

function App() {
  return (
    <div className="App">
      <TodoList />
      <LoginForm />
    </div>
  );
}

export default App;
