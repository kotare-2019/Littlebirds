
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('birds').del()
    .then(function () {
      // Inserts seed entries
      return knex('birds').insert([
        { id: 1, bird_name: 'Kotare', Family_breed: 'Halcyonidae', image: 'http://nzbirdsonline.org.nz/sites/all/files/IMG_3421%20p_edited-1.jpg' },
        { id: 2, bird_name: 'Tui', Family_breed: 'Meliphagidae', image: 'https://upload.wikimedia.org/wikipedia/commons/1/1e/Prosthemadera_novaeseelandiae_-Waikawa%2C_Marlborough%2C_New_Zealand-8_%282%29.jpg' },
        { id: 3, bird_name: 'Piwakawaka', Family_breed: 'Rhipiduridae', image: 'http://nzbirdsonline.org.nz/sites/all/files/1200555Piwakawaka%20Tail-moult.JPG' },
      ]);
    });
};
