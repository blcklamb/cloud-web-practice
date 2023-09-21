const EditItem = ({
  inputValue,
  onChangeEditInput,
  onClickEdit,
  onClickCancel,
}) => {
  return (
    <>
      <input
        className="edit-input"
        value={inputValue}
        onChange={onChangeEditInput}
      />
      <button className="basic-btn" onClick={onClickEdit}>
        수정 완료
      </button>
      <button className="basic-btn" onClick={onClickCancel}>
        수정 취소
      </button>
    </>
  );
};

export default EditItem;
