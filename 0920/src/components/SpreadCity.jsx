import React from "react";

const SpreadCity = () => {
  const cities1 = ["서울", "인천", "부산"];
  const cities2 = ["대전", "대구", "춘천", "광주"];
  const city = "전주";
  const user = {
    name: "Chandler",
    email: "bing@bing.com",
  };

  return (
    <>
      <div>{cities1.concat(cities2)}</div>
      <div>{[...cities1, ...cities2]}</div>
      <div>{[...cities2, ...cities1]}</div>
      <div>{[...cities1, city]}</div>
      {Object.keys(user).map((ele) => {
        return (
          <div key={ele}>
            {ele}:{user[ele]}
          </div>
        );
      })}
    </>
  );
};

export default SpreadCity;
