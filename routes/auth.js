const express = require("express");

const auth = require("./auth-model.js");

const bcrypt = require("bcryptjs");

const authRoute = express.Router();

authRoute.post("/register", async (req, res) => {
  let { username, password } = req.body;
  const hash = bcrypt.hashSync(password, 12);
  password = hash;
  try {
    const user = await auth.registerUser({
      username: username,
      password: hash
    });
    res.status(200).json({ message: "Success creating new user!" });
  } catch (err) {
    res.status(500).json({ message: "Failed to create new user." });
  }
});

authRoute.post("/login", async (req, res) => {
  let { username, password } = req.body;
  try {
    const user = await auth.getUser(username);
    if (user && bcrypt.compareSync(password, user.password)) {
      res.status(200).json({ message: `Hey there, ${user.username}` });
    } else {
      res.status(401).json({ message: "You shall not pass!" });
    }
  } catch (err) {
    res.status(500).json({ message: "Failed to log in." });
  }
});

authRoute.get("/users", async (req, res) => {
  try {
    const projects = await helpers.getProjects();
    res.json(
      projects.map(project => {
        return {
          ...project,
          completed: project.completed ? true : false
        };
      })
    );
  } catch (err) {
    res.status(500).json({ message: "Failed to get users" });
  }
});

module.exports = authRoute;
