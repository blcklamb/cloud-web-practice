const mysql = require("mysql");
const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");

dotenv.config();
const dbconfig = require("./config/db.js");
const conn = mysql.createConnection(dbconfig);
const app = express();
const port = process.env.PORT || 3000;

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/students", (req, res) => {
  const query = req.query;
  let sql = "Select * from student";
  if (query.major && query.grade) {
    sql += ` where major=${query.major} and grade=${query.grade}`;
  }
  conn.query(sql, (error, rows) => {
    if (error) {
      res.send({ success: false, data: [], message: error.message });
    } else {
      res.send({ success: true, data: rows, message: "조회 성공" });
    }
  });
});

app.get("/students/:no", (req, res) => {
  const no = req.params.no;
  const sql = `Select * from student where no = ${no}`;
  conn.query(sql, (error, rows) => {
    if (error) {
      res.send({ success: false, data: [], message: error.message });
    } else {
      res.send({ success: true, data: rows, message: "조회 성공" });
    }
  });
});

app.post("/students", (req, res) => {
  const { no, name, major, grade, gender } = req.body;
  const sql = "insert into student values(?, ?, ?, ?, ?)";
  const params = [no, name, major, grade, gender];

  conn.query(sql, params, (error) => {
    if (error) {
      res.send({ success: false, data: [], message: error.message });
    } else {
      res.send({ success: true, data: req.body, message: "추가 성공" });
    }
  });
});

app.put("/students/:no", (req, res) => {
  const no = req.params.no;
  const name = req.body.name;
  const sql = "Update student set name= ? where no= ?";
  const params = [name, no];

  conn.query(sql, params, (error) => {
    if (error) {
      res.send({ success: false, data: [], message: error.message });
    } else {
      res.send({ success: true, data: req.body, message: "수정 성공" });
    }
  });
});

app.delete("/students/:no", (req, res) => {
  const no = req.params.no;
  const sql = `Delete from student where no=${no}`;

  conn.query(sql, (error) => {
    if (error) {
      res.send({ success: false, data: [], message: error.message });
    } else {
      res.send({ success: true, data: no, message: "삭제 성공" });
    }
  });
});

app.listen(port, () => {
  console.log("Express server listening on port " + port);
});
