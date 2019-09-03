exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("project")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("project").insert([
        {
          id: 1,
          name: "Get the Girl",
          description: "Steps to win her heart.",
          completed: false
        },
        {
          id: 2,
          name: "Save the World",
          description: "Protect the world from Thanos",
          completed: false
        },
        {
          id: 3,
          name: "Enjoy Retirement",
          description: "Now what?",
          completed: false
        }
      ]);
    });
};
