const knex = require('./knex')
module.exports = {
  ///////////
  ////GET ALL
  ///////////
  getAllResidents(){
    return knex('tower_residents')
  },
  getAllTowers(){
    return knex('tower_info')
  },
  ///////////
  ////GET ONE
  ///////////
  getOneResidentById(id) {
    console.log(id);
    return knex('tower_residents').where('id', id).first();
  },
  getOneTowerById(id) {
    console.log(id);
    return knex('tower_info').where('id', id).first();
  },
  ///////////
  ////ADD ONE
  ///////////
  addResident(resident) {
    console.log(resident);
    return knex('tower_residents').insert(resident).returning('*');
  },
  addTower(tower) {
    return knex('tower_info').insert(tower).returning('*');
  },
  ///////////
  ////DELETE
  ///////////
  delete(id){
    return knex('tower_residents').where('id', id).del()
  },
  delete(id){
    return knex('tower_info').where('id', id).del()
  },
  //////////////
  ////AUTH in/on
  //////////////
  getResidentByEmail(email) {
    return knex('tower_residents').where('email', email).first();
  }
}
