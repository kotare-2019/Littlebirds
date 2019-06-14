const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getBirds: getBirds,
  getBirdProfile: getBirdProfile,
  addBird: addBird
}

function getBirds(db = connection) {
  return db('birds').select()
}

function getBirdProfile(id, db = connection) {
  return db('birds')
    .join('locations', 'locations.id', '=', 'birds.id')
    .where({'birds.id': id})
    .select()
    .first() 
}

function addBird (db = connection) {
  db('birds').insert({bird_name:' ', Family_breed: '', image: '', Meaning: ''})
  // .then(birdsId => {
  //   console.log('New record' + birdsId[0])
  // })
}
