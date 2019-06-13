
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('birds').del()
    .then(function () {
      // Inserts seed entries
      return knex('birds').insert([
        {id: 1, Name: ''},
        {id: 2, Name: ''},
        {id: 3, Name: ''}
      ]);
    });
};
