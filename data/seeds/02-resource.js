exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("resource")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("resource").insert([
        { id: 1, name: "infinity stone", description: "powerful rock" },
        { id: 2, name: "roses", description: "thorny, yet beautiful" },
        { id: 3, name: "yacht", description: "the only way to whale-watch" }
      ]);
    });
};
1;
