import { useState } from "react";
import AddItem from "./AddItem";
import TodoBoard from "./TodoBoard";

const TodoList = () => {
  const [todo, setTodo] = useState([]);

  const onSubmitTodo = (newTodo) => {
    setTodo((prev) => [newTodo, ...prev]);
  };

  const onDeleteTodo = (delIdx) => () => {
    setTodo(todo.filter((_, idx) => idx !== delIdx));
  };

  const onEditTodo = (editIdx) => (updatedTodo) => {
    setTodo((prev) =>
      prev.map((ele, idx) => (idx === editIdx ? updatedTodo : ele))
    );
  };

  return (
    <div className="container">
      <AddItem onCreate={onSubmitTodo} />
      <TodoBoard data={todo} onDelete={onDeleteTodo} onEdit={onEditTodo} />
    </div>
  );
};

export default TodoList;
