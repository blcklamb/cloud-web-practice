import { useState } from "react";
import AddItem from "./AddItem";
import TodoBoard from "./TodoBoard";

const TodoList = () => {
  const [todo, setTodo] = useState([]);

  const onSubmitTodo = (newTodo) => {
    if (!newTodo) {
      alert("할 일을 1자 이상 입력해주세요");
    } else {
      setTodo((prev) => [newTodo, ...prev]);
    }
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
