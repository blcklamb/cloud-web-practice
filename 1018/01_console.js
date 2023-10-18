globalThis.console.log("Hello node!");
console.info("Hello Info");
console.warn("Hello Warn");
console.error("Hello Error");

console.time();
for (let i = 0; i < 1000000; i++) {}
console.timeEnd();

console.time("p1");
for (let i = 0; i < 1000000; i++) {}
console.timeEnd("p1");

const person = {
  name: "유길채",
  age: 40,
  height: 165.3,
};

const { name, age, height } = person;
console.log(
  "이름은 %s, 나이는 %s, 키는 %s, 나는 %o",
  name,
  age,
  height,
  person
);

console.table([person, person]);
console.dir(person);
