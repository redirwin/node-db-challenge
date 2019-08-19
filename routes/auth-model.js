const db = require("../data/db-config");

module.exports = {
  registerUser
  //   loginUser,
  //   getAllUsers
};

function registerUser(userCreds) {
  return db("users").insert(userCreds);
}
