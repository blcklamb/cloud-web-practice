import { useState } from "react";

const TodoItem = ({ content, onDelete, onEdit }) => {
  const [isEditting, setIsEditting] = useState(false);
  const [editInput, setEditInput] = useState(content);

  const onChangeEditInput = (e) => setEditInput(e.target.value);
  const onClickEdit = () => {
    if (!editInput) {
      alert("수정된 할 일을 1자 이상 입력해주세요.");
    } else {
      onEdit(editInput);
      setIsEditting(false);
    }
  };

  const onOpenEditInput = () => {
    setEditInput(content);
    setIsEditting(true);
  };

  return (
    <li className="todo-item">
      {!isEditting ? (
        <>
          <p className="todo-content">{content}</p>
          <button className="basic-btn" onClick={onOpenEditInput}>
            수정
          </button>
          <button className="basic-btn delete-btn" onClick={onDelete}>
            삭제
          </button>
        </>
      ) : (
        <>
          <input
            className="edit-input"
            value={editInput}
            onChange={onChangeEditInput}
          />
          <button className="basic-btn" onClick={onClickEdit}>
            수정 완료
          </button>
          <button className="basic-btn" onClick={() => setIsEditting(false)}>
            수정 취소
          </button>
        </>
      )}
    </li>
  );
};

export default TodoItem;
