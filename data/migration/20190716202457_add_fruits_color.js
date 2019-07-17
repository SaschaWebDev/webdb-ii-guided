exports.up = function(knex) {
  return knex.schema.table('fruits', tbl => {
    tbl.string('color');
  });
};

exports.down = function(knex) {
  return knex.schema.table('fruits', tbl => {
    tbl.dropColumn('color');
  });
};

('use strict');
function logThis() {
  (this.desc = 'logger'), console.log(this);
}

new logThis();
