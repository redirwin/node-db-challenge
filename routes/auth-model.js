const db = require("../data/db-config");

module.exports = {
  registerUser,
  getUser
  //   getAllUsers
};

function registerUser(userCreds) {
  return db("users").insert(userCreds);
}

function getUser(username) {
  return db("users")
    .select("username", "password")
    .where({ username: username })
    .first();
}
