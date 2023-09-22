import { Card } from "./Card";
import "../assets/css/Main.css";

export const Main = () => {
  const COUNTRY = [
    { name: "swiss", extension: "png" },
    { name: "austria", extension: "png" },
    { name: "czech", extension: "png" },
    { name: "germany", extension: "jpg" },
    { name: "hungary", extension: "png" },
    { name: "canada", extension: "png" },
    { name: "america", extension: "png" },
    { name: "italy", extension: "png" },
    { name: "denmark", extension: "png" },
  ];
  const data = COUNTRY.map((ele) => ({
    name: ele.name,
    src: `https://reactcyst.blob.core.windows.net/reactimgs/${ele.name}.${ele.extension}`,
    intro:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt, quibusdam ipsam nulla iure aperiam quam corporis tenetur veniam consequatur vel officiis quod. Optio nobis vitae quidem similique minus quaerat odio?",
  }));

  return (
    <div className="main">
      <h2>Attractions</h2>
      <div className="attractions section">
        {data.map((ele, idx) => {
          return <Card key={idx} {...ele}></Card>;
        })}
      </div>
    </div>
  );
};
