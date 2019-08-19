const express = require("express");

const auth = require("./model.js");

const router = express.Router();

router.post("/register", async (req, res) => {
  console.log("it's working!");
});

router.post("/login", async (req, res) => {
  try {
    const projects = await helpers.addProject(req.body);
    res.json(projects);
  } catch (err) {
    res.status(500).json({ message: "Failed to post new project." });
  }
});

router.get("/users", async (req, res) => {
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
    res.status(500).json({ message: "Failed to get projects" });
  }
});

module.exports = router;
