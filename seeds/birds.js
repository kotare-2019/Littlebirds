
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('birds').del()
    .then(function () {
      // Inserts seed entries
      return knex('birds').insert([
        {id: 1, bird_name: 'Kotare', image: ''},
        {id: 2, bird_name: 'Tui', image: ''},
        {id: 3, bird_name: 'Piwakawaka', image: ''},
      ]);
    });
};
