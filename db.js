const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getBirds: getBirds,
  getBirdProfile: getBirdProfile,
  addBird: addBird,
  addLocation: addLocation
}

function getBirds(db = connection) {
  return db('birds').select()
}

function getBirdProfile(id, db = connection) {
  return db('birds')
    .join('locations', 'locations.id', '=', 'birds.id')
    .where({ 'birds.id': id })
    .select()
    .first()
}


function addBird(bird, location, db = connection) {
  return db('birds').insert(bird)
    .then(birdsId => {
      console.log('New record' + birdsId[0], location)
      console.log(location)
    })
}

function addLocation (location, db = connection){
  return db('locations')
        .insert(location)
        .then(locationsId => {
          console.log('New location' + locationsId[0])
        })
}
