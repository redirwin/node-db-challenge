const express = require("express");

const helpers = require("./model.js");

const router = express.Router();

router.post("/projects", async (req, res) => {
  try {
    const projects = await helpers.addProject(req.body);
    res.json(projects);
  } catch (err) {
    res.status(500).json({ message: "Failed to post new project." });
  }
});

router.post("/tasks", async (req, res) => {
  try {
    const tasks = await helpers.addTask(req.body);
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ message: "Failed to post new task." });
  }
});

router.post("/resources", async (req, res) => {
  try {
    const resources = await helpers.addResource(req.body);
    res.json(resources);
  } catch (err) {
    res.status(500).json({ message: "Failed to post new resource." });
  }
});

router.get("/projects", async (req, res) => {
  try {
    const projects = await helpers.getProjects();
    res.json(projects);
  } catch (err) {
    res.status(500).json({ message: "Failed to get projects" });
  }
});

router.get("/resources", async (req, res) => {
  try {
    const resources = await helpers.getResources();
    res.json(resources);
  } catch (err) {
    res.status(500).json({ message: "Failed to get resources" });
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
