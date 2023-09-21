import Checkbox from "./Checkbox";

const CheckboxGroup = ({ total, isChecked, onChange }) => {
  return (
    <div>
      {total &&
        total.map((ele, idx) => {
          return (
            <Checkbox
              key={idx}
              label={ele}
              isChecked={isChecked(ele)}
              onChange={onChange}
            />
          );
        })}
    </div>
  );
};

export default CheckboxGroup;
