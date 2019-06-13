
exports.up = function(knex, Promise) {
  return knex.schema.createTable('birds', (table) => {
    table.increments('id').primary()
    table.string('bird_name')
    table.string('Family_breed')
    table.string('image')
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('birds')
}
