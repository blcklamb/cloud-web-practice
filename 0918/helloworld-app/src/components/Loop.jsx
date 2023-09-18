import React from "react";

function Loop() {
  const fruits = ["사과", "딸기", "배", "복숭아", "체리"];
  const renderedFruits = () => {
    let storedFruits = [];
    for (let i = 0; i < fruits.length; i++) {
      storedFruits.push(<li key={i}>{fruits[i]}</li>);
    }
    return storedFruits;
  };

  const animals = ["강아지", "새", "고양이", "햄스터"];
  const animalObj = animals.map((ele, idx) => ({ id: idx, animal: ele }));
  const renderedPets_forIn = () => {
    let pets = [];
    for (let idx in animalObj) {
      const item = animalObj[idx];
      pets.push(<li key={item.id}>{item.animal}</li>);
    }
    return pets;
  };
  const renderedPets_forOf = () => {
    let pets = [];
    for (let item of animalObj) {
      pets.push(<li key={item.id}>{item.animal}</li>);
    }
    return pets;
  };

  return (
    <div>
      <h2>LOOP 실습</h2>
      <h3>과일-callback fn</h3>
      <ul>{renderedFruits()}</ul>
      <h3>과일-map fn</h3>
      <ul>
        {fruits.map((ele, idx) => (
          <li key={idx}>{ele}</li>
        ))}
      </ul>
      <h3>동물-callback fn</h3>
      <ul>{renderedPets_forIn()}</ul>
      <ul>{renderedPets_forOf()}</ul>
    </div>
  );
}

export default Loop;
