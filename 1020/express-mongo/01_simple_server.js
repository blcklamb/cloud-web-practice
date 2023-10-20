const http = require("http");

const servers = http.createServer((req, res) => {
  req.setHeader("Content-Type", "text/html; charset=utf-8");
  res.end("안녕하세요");
});
servers.listen("3000", () => console.log("Server 3000 port open"));
