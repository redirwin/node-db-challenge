exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("task")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("task").insert([
        {
          id: 2,
          project_id: 1,
          description: "ask her out",
          notes: "",
          completed: "false"
        },
        {
          id: 1,
          project_id: 1,
          description: "bring her roses",
          notes: "",
          completed: "false"
        },
        {
          id: 3,
          project_id: 2,
          description: "find infinity stone",
          notes: "",
          completed: "false"
        },
        {
          id: 4,
          project_id: 2,
          description: "use infinity stone",
          notes: "",
          completed: "false"
        },
        {
          id: 6,
          project_id: 3,
          description: "buy a yacht",
          notes: "",
          completed: "false"
        },
        {
          id: 6,
          project_id: 3,
          description: "go whale watching",
          notes: "",
          completed: "false"
        }
      ]);
    });
};
