const express = require("express");

const app = express();
const port = 3000;

let person = [];

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello Express!");
});

app.get("/person", (req, res) => {
  res.json({
    data: person,
    success: true,
    dataLength: person.length,
    message: "조회 성공",
  });
});

app.post("/person", (req, res) => {
  person.push(req.body);
  res.json(req.body);
});

let posts = [];

app.get("/posts", (req, res) => {
  res.json({
    data: posts,
    success: true,
    dataLength: posts.length,
    message: "조회 성공",
  });
});

app.post("/posts", (req, res) => {
  const { title, name, text } = req.body;
  posts.push({ id: posts.length + 1, title, name, text, createdAt: Date() });
  res.json({ title, name, text });
});

app.delete("/posts/:id", (req, res) => {
  const id = req.params.id;
  const filteredPosts = posts.filter((ele) => ele.id !== +id);
  const isDeleted = filteredPosts.length != posts.length;
  posts = filteredPosts;
  if (isDeleted) {
    res.json("OK");
    return;
  }
  res.json("NOT DELETED");
});
app.listen(3000, () => console.log(`Server is listening at localhost:${port}`));
