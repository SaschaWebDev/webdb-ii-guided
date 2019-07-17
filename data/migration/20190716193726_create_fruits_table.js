exports.up = function(knex) {
  // don't forget the return!
  return knex.schema.createTable('fruits', tbl => {
    // add a primary key id, integer and auto-increment
    tbl.increments();
    // others columns
    tbl
      .string('name', 128)
      .unique()
      .notNullable();
    tbl
      .string('avgWeightOz')
      .unique()
      .notNullable();
    tbl.boolean('delicious');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('fruits');
};
