
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('locations').del()
    .then(function () {
      // Inserts seed entries
      return knex('locations').insert([
        {id: 1, Location: 'Found throughout the country in both coastal and inland freshwater habitats.'},
        {id: 2, Location: 'North Island, the west and south coast pf the South Island, Stewart Island/Raikiura and the Chantham Islands'},
        {id: 3, Location: 'North Island, South Island and the chatham Islands'}
      ]);
    });
};
