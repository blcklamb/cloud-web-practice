/* String */
console.log("=========String=========");
let x = 10.656;
[2, 4, 6].forEach((ele) => {
  console.log(x.toExponential(ele));
});

// 2: 1.07e+1
// 4: 1.0656e+1
// 6: 1.065600e+1

/* Number */
console.log("=========Number=========");
["10 years", "years 10"].forEach((ele) => {
  console.log(parseInt(ele));
});

// 10 years: 10
// years 10: NaN

/* Math */
console.log("=========Math=========");
const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
console.log(getRandomInt(10, 29));
console.log(getRandomInt(0, 100));
console.log(getRandomInt(-19, 50));

/* Date */
console.log("=========Date=========");
let now01 = Date.now();
let now02 = new Date();
console.log("UTC", now01);
console.log("");
console.log(now01, now02.getTime(), now02.toJSON(), now02.getHours());

/* Array */
console.log("=========Array=========");
const arr = [40, 100, 1, 5, 15, 25, 20];
arr.sort((a, b) => {
  console.log(a, b);
  return a - b;
});

/* Map */
console.log("=========Map=========");
let obj = new Object();
obj[1] = 1;
obj[5] = 4;
obj[1] = 9;
console.log(obj);

let userMap = new Map();
userMap.set("name", "홍길동");
userMap.set("email", "abc@email.com");
userMap.set("phone", "000-0000-0000");
userMap.size; // 3

userMap.get("name"); // 홍길동
userMap.has("name"); //true
userMap.delete("name"); //파라미터로 키 전달

userMap.forEach(function (item, key) {
  console.log(item, key);
});
