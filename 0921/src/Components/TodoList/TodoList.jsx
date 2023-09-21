import { useState } from "react";
import AddItem from "./AddItem";
import TodoBoard from "./TodoBoard";
import { v4 as uuid4 } from "uuid";

const TodoList = () => {
  const [todo, setTodo] = useState([]);

  const onSubmitTodo = (newTodo) => {
    if (!newTodo) {
      alert("할 일을 1자 이상 입력해주세요");
    } else {
      setTodo((prev) => [{ id: uuid4(), todo: newTodo }, ...prev]);
    }
  };

  const onDeleteTodo = (delId) => () => {
    setTodo(todo.filter((ele) => ele.id !== delId));
  };

  const onEditTodo = (editId) => (updatedTodo) => {
    setTodo((prev) =>
      prev.map((ele) =>
        ele.id === editId ? { id: editId, todo: updatedTodo } : ele
      )
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
