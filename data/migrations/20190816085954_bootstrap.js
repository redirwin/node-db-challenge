exports.up = function(knex) {
  return knex.schema
    .createTable("project", tbl => {
      tbl.increments();
      tbl
        .string("name", 255)
        .notNullable()
        .unique();
      tbl.string("description", 2000);
      tbl
        .boolean("completed")
        .notNullable()
        .defaultTo(false);
    })
    .createTable("task", tbl => {
      tbl.increments();
      tbl
        .string("description", 2000)
        .notNullable()
        .unique();
      tbl.string("notes", 5000);
      tbl
        .boolean("completed")
        .notNullable()
        .defaultTo(false);
      tbl
        .integer("project_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("project")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
    })
    .createTable("resource", tbl => {
      tbl.increments();
      tbl
        .string("name", 255)
        .notNullable()
        .unique();
      tbl.string("description", 2000);
    })
    .createTable("project_resources", tbl => {
      tbl.increments();
      tbl
        .integer("project_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("project")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
      tbl
        .integer("resource_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("resource")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("project_resources")
    .dropTableIfExists("resource")
    .dropTableIfExists("task")
    .dropTableIfExists("project");
};
