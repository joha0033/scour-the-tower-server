

exports.up = function(knex, Promise) {
  return knex.schema
    .createTable('tower_residents', function(table){
        table.increments('id').primary()
        table.string('first_name').notNull()
        table.string('last_name').notNull()
        table.string('sex').notNull()
        table.string('imageURL').notNull()
        table.string('email').notNull()
        table.string('password').notNull()
        table.integer('tower_id').unsigned()
        table.foreign('tower_id').references('tower_info.id')
    })
};

exports.down = function(knex, Promise) {
  return knex.schema
    .dropTableIfExists('tower_residents')
};
