const DB = [];

const saveDB = (user, callback) => {
  DB.push(user);
  console.log(`save ${user.name}`);
  return callback(user);
};

const sendEmail = (user, callback) => {
  console.log(`send email to ${user.email}`);
  return callback(user);
};
const getResult = (user) => {
  console.log(`success register ${user.name}`);
};

const register = (user) => {
  return saveDB(user, (user) => {
    return sendEmail(user, (user) => {
      return getResult(user);
    });
  });
};

const result = register({ name: "김채정", email: "123@gmail.com" });
console.log(result);
