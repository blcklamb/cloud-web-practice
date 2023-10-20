const http = require("http");
const fs = require("fs").promises;
const url = require("url");

http
  .createServer(async (req, res) => {
    var pathname = url.parse(req.url).pathname;
    res.setHeader("Content-Type", "text/html; charset=utf-8");
    console.log("pathname: ", pathname);

    if (req.method === "GET") {
      if (pathname in urlMap) {
        urlMap[pathname](req, res);
      } else {
        res.statusCode = 404;
        res.end("404 page not found");
      }
    } else if (req.method === "POST") {
      res.end(req.method);
    }
  })
  .listen(3000, () => {
    console.log("Server running at 3000");
  });

const user = (req, res) => {
  const user = url.parse(req.url).query;
  res.end(`[user] name: ${user.name}, age: ${user.age}`);
};

const feed = (req, res) =>
  res.end(
    `<meta charset="UTF-8">
  <ul>
  <li>picture1</li>
  <li>picture1</li><
  li>picture1</li>
  </ul>`
  );

const person = (req, res) => {
  res.writeHead(200, {
    "Content-Type": "application/json; charset=utf-8",
  });
  res.end(JSON.stringify({ name: "이강인", age: 30, email: "abc@mail.com " }));
};

const urlMap = {
  "/": async (req, res) => {
    const data = await fs.readFile("./02_index.html");
    res.end(data);
  },
  "/user": user,
  "/feed": feed,
  "/person": person,
};
