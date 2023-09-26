import Main from "./Main";
import Header from "./Header";
import { UserContext } from "../../contexts/user";

const First = () => {
  const newName = "김병식";
  return (
    <div className="container">
      <UserContext.Provider
        value={{ name: newName, phoneNumber: "010-1029-4857" }}
      >
        <Header />
        <hr />
        <Main />
      </UserContext.Provider>
    </div>
  );
};

export default First;
