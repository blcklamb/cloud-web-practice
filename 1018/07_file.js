const fs = require("fs");

fs.readFile("./03_process.js", (err, data) => {
  if (err) throw err;
  // buffer
  // console.log(data);
  console.log("console:", data.toString());
});

fs.writeFile("./07_1_test_write.txt", "파일 쓰기 테스트입니다.", (err) => {
  if (err) throw err;
  console.log("after write: 파일 쓰기 성공");
});

fs.readFile("./07_1_test_write.txt", (err, data) => {
  if (err) throw err;
  console.log("data:", data.toString());
});
