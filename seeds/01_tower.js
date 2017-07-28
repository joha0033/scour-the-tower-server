
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('TRUNCATE tower_info CASCADE; ALTER SEQUENCE tower_info_id_seq restart with 1')
    .then(function () {
      

      return knex('tower_info').insert([
        {
          name: 'The Forbidden Towers',
          imageURL: '',
          units: 500
        },
        {
          name: 'Green Pastures',
          imageURL: '',
          units: 145
        },
        {
          name: 'The Endurance Towers',
          imageURL: '',
          units: 500
        }
      ]);
    });
};
