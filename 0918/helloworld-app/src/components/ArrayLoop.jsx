import React from "react";

function ArrayLoop() {
  const seasons = ["봄", "여름", "가을", "겨울"];

  let seasonList = [];
  seasons.forEach((item, idx) => {
    seasonList.push(<li key={idx}>{item}</li>);
  });

  return (
    <div>
      <h2>ForEach 실습</h2>
      <h3>계절</h3>
      <ul>{seasonList}</ul>
      <h2>Map 실습</h2>
      <h3>계절</h3>
      <ul>
        {seasons.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default ArrayLoop;
