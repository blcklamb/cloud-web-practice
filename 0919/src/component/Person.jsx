import React from "react";

const Person = () => {
  const data = {
    name: "김채정",
    email: "whenucan35@gmail.com",
    age: 27,
  };
  const { name, email, age } = data;
  return (
    <>
      <h1>Name: {name}</h1>
      <h2>Email: {email}</h2>
      <h2>Age: {age}</h2>
    </>
  );
};

export default Person;
