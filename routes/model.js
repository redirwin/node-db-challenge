const db = require("../data/db-config");

module.exports = {
  addProject,
  addTask,
  addResource,
  getProjects,
  getAProject,
  getTasks,
  getResources
};

function addProject(newProject) {
  return db("project")
    .insert(newProject)
    .then(getProjects);
}

function addTask(newTask) {
  return db("task")
    .insert(newTask)
    .then(getTasks);
}

function addResource(newResource) {
  return db("resource")
    .insert(newResource)
    .then(getResources);
}

function getProjects() {
  return db("project");
}

function getAProject(id) {
  return db("project")
    .where({ "project.id": id })
    .first();
}

function getResources(id) {
  return db("resource")
    .join(
      "project_resources",
      "project_resources.resource_id",
      "=",
      "resource.id"
    )
    .where({ "project_resources.project_id": id })
    .select("resource.id", "resource.name", "resource.description");
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
