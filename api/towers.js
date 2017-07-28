const express = require('express');
const router = express.Router();
const queries = require('../db/queries');

/* GET tower page. */
router.get('/', function(req, res, next) {
  queries.getAllTowers().then(towers => {
    res.json(towers)
  })
});

router.get('/:id', function(req, res, next) {
  queries.getOnePersonById(req.params.id).then(tower => {
    res.json(tower)
  })
});

router.post('/new',(req, res, next)=> {
  console.log('test');
  queries.addPerson(req.body).then(tower => {
    res.json(tower)
  })
})

router.delete('/:id', function(req,res,next){
  console.log(req.body);
  let id = req.params.id
  queries.delete(id).then(()=>{
    res.json({
      message: '🛠delete' + id
    })
  })
})

module.exports = router;
