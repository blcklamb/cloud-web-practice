const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  // text를 보낼 때는 없어도 된다
  //   res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
  //   res.write("<h1>Hello Node</h1>");
  //   res.end("<h2>Hello server</h2>");
  fs.readFile("./09_index.html", (_, data) => {
    res.end(data);
  });
});

server.listen(3000, () => {
  console.log("Server Listening at 3000");
});
