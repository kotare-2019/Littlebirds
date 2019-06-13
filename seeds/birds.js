
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('birds').del()
    .then(function () {
      // Inserts seed entries
      return knex('birds').insert([
        { id: 1, bird_name: 'Kotare', Family_breed: 'Halcyonidae', image: 'http://nzbirdsonline.org.nz/sites/all/files/IMG_3421%20p_edited-1.jpg', Meaning: 'The kotare stands for peace and properity. It is connected with jupiter which is a symbol for abundance and wealth. A Kotare is symbol of fertile harvest and good fortune. A kotare can change our fortune for the better.'},
        { id: 2, bird_name: 'Tui', Family_breed: 'Meliphagidae', image: 'https://upload.wikimedia.org/wikipedia/commons/1/1e/Prosthemadera_novaeseelandiae_-Waikawa%2C_Marlborough%2C_New_Zealand-8_%282%29.jpg', Meaning: 'The Tui are associated with life filfullment confidence and spirtual harmony. Tui has powerful significance in te ao maori, they act as messengers to the gods in the heavens. They were the medians to help communicate with the gods and goddess of maori beliefs. Unlike most birds, they will sing, call and chatter all day long with eachother. They are also known to continue there song well into the night of a full moon.' },
        { id: 3, bird_name: 'Piwakawaka', Family_breed: 'Rhipiduridae', image: 'http://nzbirdsonline.org.nz/sites/all/files/1200555Piwakawaka%20Tail-moult.JPG', Meaning: 'Fantails are also connected to the water spirits giving him the ability of rejuvenation and new beginning.   Fantails are useful when it comes to replenishing your tired and weary souls.  It can give us more energy that will help us face the days to come. Fantails are also advising us to create new beginnings, a new friendship or a deeper relationship to a partner.  This creature is a sign that perhaps it is the best time to open the new chapter of your life.' },
      ]);
    });
};
