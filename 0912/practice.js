/* String */
let name1 = "John Doe";
let name2 = 'John "Ronald" Doe'; // prettier 적용 안된다!

let singleQuote = "He is called 'Johnny'";
let doubleQuote = 'He is called "Johnny"';

/* Object */
const person = {
  firstName: "blcklamb",
  lastName: "Kim",
  age: 26,
  eyeColor: "brown",
};

const arr = Array(5).fill(0);
const idx1 = 3;
const idx2 = 7;

let example = arr[idx1] && arr[idx3]; // 앞에서 false로 정해지면 뒤는 평가하지 않는다
console.log(example);

/* Conditional */
const FARE_CONDITION = {
  infant: 0,
  child: 450,
  youth: 720,
  adult: 1200,
  elder: 0,
};

/* if만 쓰는 경우 */
const getBusFare01 = (age) => {
  if (age < 8) return FARE_CONDITION["infant"];
  if (8 <= age && age < 14) return FARE_CONDITION["child"];
  if (14 <= age && age < 20) return FARE_CONDITION["youth"];
  if (20 <= age && age < 70) return FARE_CONDITION["adult"];
  return FARE_CONDITION["elder"];
};
// test code
[0, 7, 10, 15, 25, 70].forEach((ele) => {
  console.log(ele, getBusFare01(ele));
});

/* if-else만 쓰는 경우 */
const getBusFare02 = (age) => {
  if (age < 8) return FARE_CONDITION["infant"];
  else {
    if (8 <= age && age < 14) return FARE_CONDITION["child"];
    else {
      if (14 <= age && age < 20) return FARE_CONDITION["youth"];
      else {
        if (20 <= age && age < 70) return FARE_CONDITION["adult"];
        else return FARE_CONDITION["elder"];
      }
    }
  }
};
// test code
[0, 7, 10, 15, 25, 70].forEach((ele) => {
  console.log(ele, getBusFare02(ele));
});

/* if-else if-else 중첩 없이 쓰는 경우 */
const getBusFare03 = (age) => {
  if (age < 8) return FARE_CONDITION["infant"];
  else if (8 <= age && age < 14) return FARE_CONDITION["child"];
  else if (14 <= age && age < 20) return FARE_CONDITION["youth"];
  else if (20 <= age && age < 70) return FARE_CONDITION["adult"];
  else return FARE_CONDITION["elder"];
};
// test code
[0, 7, 10, 15, 25, 70].forEach((ele) => {
  console.log(ele, getBusFare03(ele));
});

const getBusFare04 = (age) => {
  [0, 8, 14, 20, 70];
};
