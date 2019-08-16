const db = require("../data/db-config");

module.exports = {
  addProject,
  addTask,
  addResource,
  getProjects,
  getTasks,
  getResources
};

function addProject(newProject) {
  return db("project").insert(newProject);
}

function addTask(newTask) {
  return db("task").insert(newTask);
}

function addResource(newResource) {
  return db("resource").insert(newResource);
}

function getProjects() {
  return db("project");
}

function getResources() {
  return db("resource");
}

function getTasks(id) {
  return db("task")
    .join("project", "task.project_id", "=", "project.id")
    .where({ "project.id": id })
    .select(
      "task.id as task_id",
      "project.name as project_name",
      "project.description as project_description",
      "task.description as task_description",
      "task.notes as task_notes",
      "task.completed as task_completed"
    )
    .orderBy("task.id");
}
