import { Fragment } from "react";
import TodoItem from "./TodoItem";

const TodoBoard = ({ data, onDelete, onEdit }) => {
  return (
    <ul>
      {data.length === 0 && <p>아직 등록된 할 일이 없습니다.</p>}
      {data.map((ele, idx) => {
        return (
          <Fragment key={idx}>
            <TodoItem
              content={ele}
              onDelete={onDelete(idx)}
              onEdit={onEdit(idx)}
            />
          </Fragment>
        );
      })}
    </ul>
  );
};

export default TodoBoard;
