exports.up = function(knex, Promise) {
  return knex.schema
    .createTable('tower_info', function(table){
        table.increments('id').primary()
        table.string('name').notNull()
        table.string('imageURL').notNull()
        table.integer('units').notNull()
    })
};

exports.down = function(knex, Promise) {
  return knex.schema
    .dropTableIfExists('tower_info')
};
