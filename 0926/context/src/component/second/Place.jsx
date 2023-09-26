import PlaceImage from "./PlaceImage";

const Place = ({ src, name, intro }) => {
  return (
    <div style={{ display: "flex" }}>
      <PlaceImage imgSrc={src} />
      <div>
        <h1>{name}</h1>
        <p>{intro}</p>
      </div>
    </div>
  );
};

export default Place;
