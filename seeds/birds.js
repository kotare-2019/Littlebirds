
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('birds').del()
    .then(function () {
      // Inserts seed entries
      return knex('birds').insert([
        { id: 1, bird_name: 'Kotare', Family_breed: 'Halcyonidae', image: '' },
        { id: 2, bird_name: 'Tui', Family_breed: 'Meliphagidae', image: '' },
        { id: 3, bird_name: 'Piwakawaka', Family_breed: 'Rhipiduridae', image: '' },
      ]);
    });
};
