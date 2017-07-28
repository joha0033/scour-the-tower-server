const bcrypt = require('bcrypt');
const saltRounds = 10;


exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('TRUNCATE tower_residents CASCADE; ALTER SEQUENCE tower_residents_id_seq restart with 1')
    .then(function () {
      // Inserts seed entries
      const salt = bcrypt.genSaltSync(saltRounds);

      return knex('tower_residents').insert([
        {
          first_name: 'Austin',
          last_name: 'Jonhston',
          sex: 'male',
          imageURL: 'http://graphicsheat.com/wp-content/uploads/2015/04/3936635-6756149474-114.j.jpg',
          email: 'austin@gmail.com',
          password:bcrypt.hashSync('austinaustin', salt),
          tower_id: 1
        },
        {
          first_name: 'Matt',
          last_name: 'Victor',
          imageURL: 'http://historythings.com/wp-content/uploads/2016/05/sparta.jpeg',
          sex: 'male',
          email: 'matt@gmail.com',
          password:bcrypt.hashSync('mattmatt', salt),
          tower_id: 2
        },
        {
          first_name: 'Alotta',
          last_name: 'Fagina',
          imageURL: 'https://hobbydb-production.s3.amazonaws.com/processed_uploads/subject_photo/subject_photo/image/11960/1458163203-27477-6465/Screen_20Shot_202016-03-16_20at_203.18.59_20PM.png',
          sex: 'female',
          email: 'alotta@gmail.com',
          password:bcrypt.hashSync('alottaalotta', salt),
          tower_id: 1
        },
        {
          first_name: 'Mary',
          last_name: 'Magdalene',
          imageURL: 'https://i.ytimg.com/vi/yu1Cn6733Ls/movieposter.jpg',
          sex: 'female',
          email: 'mary@gmail.com',
          password:bcrypt.hashSync('marymary', salt),
          tower_id: 2
        },
        {
          first_name: 'Amanda',
          last_name: 'Hugginkis',
          imageURL: 'https://fellowshipofminds.files.wordpress.com/2014/06/laverne-cox.jpg',
          sex: 'female',
          email: 'amanda@gmail.com',
          password:bcrypt.hashSync('amandaamanda', salt),
          tower_id: 3
        },
        {
          first_name: 'Pat',
          last_name: 'Ennis',
          imageURL: 'http://www.sunnyskyz.com/uploads/2014/04/hjpsw-terrible-names-funny-31.jpg',
          sex: 'male',
          email: 'pat@gmail.com',
          password:bcrypt.hashSync('patpat', salt),
          tower_id: 3
        },
        {
          first_name: 'Diana',
          last_name: 'DBag',
          imageURL: 'http://www.sunnyskyz.com/uploads/2014/04/rrn5n-terrible-names-funny-5.jpg',
          sex: 'female',
          email: 'diana@gmail.com',
          password:bcrypt.hashSync('dianadiana', salt),
          tower_id: 3
        },
        {
          first_name: 'ChiChi',
          last_name: 'Bandit',
          imageURL: 'https://media0.giphy.com/media/6j4s4OioyR2VO/200_s.gif',
          sex: 'female',
          email: 'chichi@gmail.com',
          password:bcrypt.hashSync('chichichichi', salt),
          tower_id: 2
        },
        {
          first_name: 'Moe',
          last_name: 'Lester',
          imageURL: 'http://www.sunnyskyz.com/uploads/2014/04/yjpmm-moe-lester.jpg',
          sex: 'male',
          email: 'fannie@gmail.com',
          password:bcrypt.hashSync('fanniefannie', salt),
          tower_id: 3
        },
        {
          first_name: 'Jolly',
          last_name: 'Mangina',
          imageURL: 'http://www.sunnyskyz.com/uploads/2014/04/cow0o-terrible-names-funny-12.jpg',
          sex: 'female',
          email: 'jolly@gmail.com',
          password:bcrypt.hashSync('jollyjolly', salt),
          tower_id: 2
        }
      ]);
    });
};
