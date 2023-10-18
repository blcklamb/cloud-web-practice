const timeout1 = setTimeout(() => {
  console.log("1.5초 후 실행");
}, 1500);

const timeout2 = setTimeout(() => {
  console.log("3초 후 실행");
}, 3000);

const interval = setInterval(() => {
  console.log("1초 인터벌 실행");
}, 1000);

setTimeout(() => {
  clearTimeout(timeout1);
  clearTimeout(timeout2);
  clearInterval(interval);
}, 2500);

setImmediate(() => {
  console.log("즉시 실행");
});
