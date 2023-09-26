import { useContext } from "react";
import { ImageSizeContext } from "../../contexts/image";

const PlaceImage = ({ imgSrc }) => {
  const imageSize = useContext(ImageSizeContext);
  return (
    <img
      src={imgSrc}
      alt="image"
      style={{ width: imageSize, height: "auto" }}
    />
  );
};

export default PlaceImage;
