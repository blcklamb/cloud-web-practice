import { useState, useEffect, useRef } from "react";
export const SideEffect = ({ message }) => {
  const calculatedMessage = `${message}은/는 정말 재밌어요`;
  // ! 직접 DOM을 조작
  document.title = "하하";

  const [fontSize, setFontSize] = useState(10);
  const fontRef = useRef(10);
  // ! 직접 DOM을 조작
  useEffect(() => {
    setInterval(() => {
      console.log("ho");
      setFontSize((fontRef.current += 2));
    }, 4000);
  }, []);

  // setInterval(() => {
  //   setFontSize((prev) => prev + 2);
  // }, 3000);

  return (
    <>
      <div
        style={{
          fontSize: fontSize,
          backgroundColor: "#94A684",
          color: "#ffffff",
        }}
      >
        {message}
      </div>
      <div className="side-effect">{calculatedMessage}</div>
    </>
  );
};
