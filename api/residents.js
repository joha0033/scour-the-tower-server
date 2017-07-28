const express = require('express');
const router = express.Router();
const queries = require('../db/queries');

/* GET resident page. */
router.get('/', function(req, res, next) {
  queries.getAllResidents().then(residents => {
    res.json(residents)
  })
});

router.get('/:id', function(req, res, next) {
  queries.getOneResidentById(req.params.id).then(resident => {
    res.json(resident)
  })
});

router.post('/new',(req, res, next)=> {
  console.log('test');
  queries.addResident(req.body).then(resident => {
    res.json(resident)
  })
})

router.put('/:id', function(req,res,next){
  console.log(req.body);
  queries.put(req.params.id).then(()=>{
    res.json({
      message: 'can you spare some change?'
    })
  })
})

///working?
router.get('/:id/residents', (req, res, next) => {
 queries.getResidentsInTower(req.params.id)
 .then(residents =>{
   res.json(residents)

router.delete('/:id', function(req,res,next){
  console.log(req.body);
  queries.delete(req.params.id).then(()=>{
    res.json({
      message: '🛠'
    })
  })
})

module.exports = router;
