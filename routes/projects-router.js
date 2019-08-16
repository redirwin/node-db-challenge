const express = require("express");

const helpers = require("./model.js");

const router = express.Router();

router.get("/projects", async (req, res) => {
  try {
    const projects = await helpers.getProjects();
    res.json(projects);
  } catch (err) {
    res.status(500).json({ message: "Failed to get projects" });
  }
});

router.get("/projects/:id/tasks", async (req, res) => {
  try {
    const tasks = await helpers.getTasks(req.params.id);
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ message: "Failed to get project tasks." });
  }
});

module.exports = router;
