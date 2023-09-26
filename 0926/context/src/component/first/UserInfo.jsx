import { useContext } from "react";
import { UserContext } from "../../contexts/user";

const UserInfo = () => {
  const { name, phoneNumber } = useContext(UserContext);
  return (
    <div style={{ background: "#1b5e20" }}>
      <p>안녕하세요, {name}님</p>
      <p>name: {name}</p>
      <p>phoneNumber: {phoneNumber}</p>
    </div>
  );
};

export default UserInfo;
