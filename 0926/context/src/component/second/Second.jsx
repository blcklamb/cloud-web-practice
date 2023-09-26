import { useState } from "react";
import { ImageSizeContext } from "../../contexts/image";
import ImageList from "./ImageList";

const Second = () => {
  const [isLarge, setIsLarge] = useState(false);
  const imageSize = isLarge ? "640px" : "240px";

  const onToggleCheckbox = (e) => {
    setIsLarge(e.target.checked);
  };
  return (
    <div className="container">
      <ImageSizeContext.Provider value={imageSize}>
        <label>
          <input
            type="checkbox"
            checked={isLarge}
            onChange={onToggleCheckbox}
          />
        </label>
        <hr />
        <ImageList />
      </ImageSizeContext.Provider>
    </div>
  );
};

export default Second;
