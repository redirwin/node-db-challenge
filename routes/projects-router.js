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

router.get("/projects/:id/tasks", async (req, res) => {
  try {
    const tasks = await helpers.getTasks(req.params.id);
    res.json(
      tasks.map(task => {
        return {
          ...task,
          task_completed: task.task_completed ? true : false
        };
      })
    );
  } catch (err) {
    res.status(500).json({ message: "Failed to get project tasks." });
  }
});

router.get("/resources/:id", async (req, res) => {
  try {
    const resources = await helpers.getResources(req.params.id);
    res.json(resources);
  } catch (err) {
    res.status(500).json({ message: "Failed to get resources" });
  }
});

router.get("/projects/:id", async (req, res) => {
  try {
    const project = await helpers.getAProject(req.params.id);
    const tasks = await helpers.getTasks(req.params.id);
    const resources = await helpers.getResources(req.params.id);
    const completed = project.completed ? true : false;
    res.json({
      ...project,
      completed: completed,
      tasks: tasks.map(task => {
        return {
          description: task.task_description,
          notes: task.task_notes,
          completed: task.task_completed ? true : false
        };
      }),
      resources: resources
    });
  } catch (err) {
    res.status(500).json({ message: "Failed to get projects" });
  }
});

module.exports = router;
