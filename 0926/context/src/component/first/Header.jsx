import { ColorContext } from "../../contexts/color";
import UserInfo from "./UserInfo";

const Header = () => {
  return (
    <>
      <ColorContext.Consumer>
        {(value) => (
          <div style={{ color: value.color }}>
            <h2>헤더</h2>
          </div>
        )}
      </ColorContext.Consumer>
      <div style={{ background: "lime" }}>
        <UserInfo />
      </div>
    </>
  );
};

export default Header;
