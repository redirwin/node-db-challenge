const db = require("../data/db-config");

module.exports = {
  addProject,
  getProjects,
  //   addTask,
  getTasks,
  //   addResource,
  getResources
};

function addProject(newProject) {
  return db("project").insert(newProject);
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
      "project.name",
      "project.description",
      "task.description",
      "task.notes"
    )
    .orderBy("task.id");
}
