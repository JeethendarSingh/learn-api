var express = require('express');
const CompozedDevs=require('../models/compozed_devs');
const CompozedTeams=require('../models/compozed_teams');
const CompozedProducts=require('../models/compozed_products');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'AllState' });
});

router.get('/compozeddevs', function(req, res, next) {

  CompozedDevs.fetchAll().then(dataobj=>{
    res.send({ data: dataobj});
  })
  
});

router.get('/compozeddevs/:ntid', function(req, res, next) {

  CompozedDevs.query(qb =>{
      qb.where('ntid','=',req.params.ntid)
  }).fetch().then(dataobj=>{
    if(!(dataobj==null))
    res.send({data:dataobj});
    else
    res.send({data:"NTID not found"});
  })
  
});

router.post('/compozeddevs',function(req,res,next){
  
  var dataToSave = {
    'first_name': 'Dineshkumar',
    'last_name': 'Suvendiran',
    'ntid': 'dsuve'
 };

 CompozedDevs.forge(dataToSave).save(null,{method: 'insert'})
   .then(savedData =>{
     console.log(savedData)
   }).catch(error=>{
     console.log(error)
   })

});

router.put('/compozeddevs',function(req,res,next){

  
  CompozedDevs.where({first_name:"DineshKumar"}).save(req.body,{patch:false}).then( updatedDate =>{
    res.send(updatedDate);
  }).catch( error =>{
    res.send(error)
  })
});
//patch True=>if this condition is present insert else do nothing

router.delete('/compozeddevs',function(req,res,next){
  CompozedDevs.where({first_name:"Jeeth"})
  .destroy().then(deletedValues=>{ 
    res.send(deletedValues);
  }).catch(error=>{
    res.send(error);
  })
});

// Supporting query
// select devs.first_name, devs.last_name, prods.name from compozed_teams  teams
// inner join compozed_devs devs on devs.id = teams.dev_id
// inner join compozed_products prods on prods.id  = teams.prod_id

router.get('/compozedteams', function(req,res,next){
  CompozedTeams.query(qb =>{
    qb.innerJoin('compozed_devs', 'compozed_teams.dev_id', 'compozed_devs.id')
    qb.innerJoin('compozed_products', 'compozed_teams.prod_id', 'compozed_products.id')
  }
).fetchAll({columns:['first_name', 'last_name', 'name']}).then(dataObj =>{
    res.send({data:dataObj})
  }).catch(error =>{
    res.send(error)
  })
})

// send the product team and get the anchor , supporting query
// select ntid,first_name,last_name from compozed_devs a
// inner join
//   compozed_teams t on a.id = t.dev_id
//   inner join
//   compozed_products p on t.prod_id = p.id
//   where p.name='EngineAPI'
//   and
//   is_anchor=1

router.get('/compozedanchors/:name', function(req,res,next){
  CompozedDevs.query(qb =>{
    qb.innerJoin('compozed_teams', 'compozed_teams.dev_id', 'compozed_devs.id')
    qb.innerJoin('compozed_products','compozed_products.id','compozed_teams.prod_id')
    qb.where('compozed_products.name','=',req.params.name).andWhere('is_anchor','=','1')
    
  }
).fetchAll().then(dataObj =>{
    res.send({data:dataObj})
  }).catch(error =>{
    res.send(error)
  })
})

// router.get('/compozeddevs/:ntid', function(req, res, next) {

//   CompozedDevs.query(qb =>{
//       qb.where('ntid','=',req.params.ntid)
//   }).fetch().then(dataobj=>{
//     if(!(dataobj==null))
//     res.send({data:dataobj});
//     else
//     res.send({data:"NTID not found"});
//   })
  
// });



module.exports = router;
