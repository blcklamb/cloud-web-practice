const Person = (props) => {
  const { name, email, age } = props;
  return (
    <>
      <h1>{name}</h1>
      <h1>{email}</h1>
      <h1>{age}</h1>
    </>
  );
};

const People = () => {
  const people = [
    { name: "Ross", email: "ross@gmail.com", age: 27 },
    { name: "Rachel", email: "rachel@gmail.com", age: 26 },
    { name: "Monica", email: "monica@gmail.com", age: 26 },
  ];
  return (
    <>
      {people.map((ele, idx) => (
        <Person key={idx} {...ele} />
      ))}
    </>
  );
};

export default People;
