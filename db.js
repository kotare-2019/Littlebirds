const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getBirds: getBirds,
  getBirdProfile: getBirdProfile
}

function getBirds(db = connection) {
  return db('birds').select()
}

function getBirdProfile(id, db = connection) {
  return db('birds')
    .join('locations', 'locations.id', '=', 'birds.id')
    .select()
   
}
