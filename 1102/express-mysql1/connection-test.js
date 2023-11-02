const mysql = require("mysql");
const con = mysql.createConnection({
  host: "localhost",
  user: "dbuser",
  password: "password",
  database: "school",
});
con.connect();
con.query("select * from Student", (error, rows) => {
  if (error) throwerror;
  console.log("students: ", rows);
});
con.end();
