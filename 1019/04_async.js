// func1과 func2는 같은 동작을 하는 함수
const func1 = async () => "Hello";
const func2 = () => new Promise((res) => res("Hello"));

const delay = (msg, time) => {
  return new Promise((resolve) => setTimeout(() => resolve(msg), time));
};

const func4 = async () => {
  await delay("hi", 5000);
  return "HELLO";
};

const func3 = async () => {
  let name = await func4();
  console.log(name);
};

func3();

const countOneToN = async (N) => {
  for (let x of [...Array(N).keys()]) {
    let result = await delay(`${x + 1}초 대기 중...`, 1000);
    console.log(result);
  }
  console.log("완료");
};

countOneToN(10);
