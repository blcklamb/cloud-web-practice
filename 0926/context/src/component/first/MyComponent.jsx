import { useContext } from "react";
import { SingerContext } from "../../contexts/singer";
import { ColorContext } from "../../contexts/color";

const MyComponent = () => {
  const context = useContext(SingerContext);
  return (
    <div>
      <div>
        <h1>MyComponent</h1>
        <div>{context}</div>
      </div>
      <ul>{context}</ul>
      <ColorContext.Consumer>
        {(value) => (
          <div style={{ color: value.color, border: "1px solid white" }}>
            {context}
          </div>
        )}
      </ColorContext.Consumer>
      <SingerContext.Consumer>
        {(value) => <div>{value}</div>}
      </SingerContext.Consumer>
    </div>
  );
};

export default MyComponent;
