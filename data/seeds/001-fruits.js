exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('fruits')
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex('fruits').insert([
        { name: 'mango', delicious: true, color: 'yellow' },
        { name: 'red apple', delicious: true, color: 'red' },
        { name: 'green apple', delicious: true, color: 'green' },
        { name: 'strawnerry', delicious: true, color: 'red' },
      ]);
    });
};
