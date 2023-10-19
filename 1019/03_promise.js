// Promise Practice 1
const DB = [];

const saveDB = (user) => {
  const prevDBLength = DB.length;
  DB.push(user);
  console.log(`Save ${user.name} to DB`);
  return new Promise((resolve, reject) => {
    if (DB.length > prevDBLength) {
      resolve(user);
    } else {
      reject(new Error("Save DB Error"));
    }
  });
};

const sendEmail = (user) => {
  console.log(`Send email to ${user.email}`);
  return new Promise((resolve) => {
    resolve(user);
  });
};

const getResult = (user) => {
  return new Promise((resolve) => {
    resolve(`Success register ${user.name}`);
  });
};

const person = { name: "우영우", email: "abc@gmail.com" };

const registerByPromise = (user) => {
  const result = saveDB(user)
    .then(sendEmail)
    .then(getResult)
    .catch((err) => new Error(err))
    .finally(console.log("Execution Complete"));
  console.log(`result: ${result}`);
  return result;
};

const finalResult = registerByPromise(person);
// finalResult.then(console.log);

// Promise Practice 2
const axios = require("axios");
const URL =
  "http://raw.githubusercontent.com/wapj/jsbackend/main/movieinfo.json";

axios
  .get(URL)
  .then((result) => {
    if (result.status != 200) throw new Error("요청 실패");
    if (result.data) return result.data;
    throw new Error("데이터 없음");
  })
  .then((data) => {
    if (!data.articleList || data.articleList.size == 0) {
      throw new Error("데이터 없음");
    }
    return data.articleList;
  })
  .then((data) => {
    return data.map((article, idx) => {
      return { title: article.title, rank: idx + 1 };
    });
  })
  .then((results) => {
    for (let movie of results) {
      console.log(`${movie.rank}위 ${movie.title}`);
    }
  })
  .catch((err) => {
    console.log("<< 에러 발생 >>");
    console.log(err);
  });
