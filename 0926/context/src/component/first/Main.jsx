import { SingerContext } from "../../contexts/singer";
import MyComponent from "./MyComponent";
import { useContext } from "react";
import { UserContext } from "../../contexts/user";

const Main = () => {
  const { name, phoneNumber } = useContext(UserContext);
  return (
    <SingerContext.Provider value={"BTS"}>
      <MyComponent />
      {name}
      {phoneNumber}
    </SingerContext.Provider>
  );
};

export default Main;
