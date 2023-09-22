import TodoItem from "./TodoItem";

const TodoBoard = ({ data, onDelete, onEdit }) => {
  return (
    <ul>
      {data.length === 0 && <p>아직 등록된 할 일이 없습니다.</p>}
      {data.map((ele) => {
        const { id, todo } = ele;
        return (
          <TodoItem
            key={id}
            content={todo}
            onDelete={onDelete(id)}
            onEdit={onEdit(id)}
          />
        );
      })}
    </ul>
  );
};

export default TodoBoard;
