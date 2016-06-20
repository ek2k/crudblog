var express = require('express');
var router = express.Router();
var knex = require('../db/knex')

/* GET users listing. */
router.get('/', function(req, res) {
  knex('users').then(function(result, err){
    res.render('users/index', {users:result});
  })
});

//get to site to add user
router.get('/new', function(req, res){
  res.render('users/new')
})

//updates user info
router.post('/:id', function(req,res){
  var user = req.body;
  console.log(user);
  knex('users').where('id', req.params.id).update({
    full_name: user.full_name,
    username: user.username
  }).then(function(result){
    res.redirect('/users')
  })
})

//add user to db
router.post('/', function(req, res){
  var user = req.body;
  knex('users').insert({
    full_name: user.name,
    username: user.username
  }).then(function(result, err){
    res.redirect('/users');
  })
})

//goes to site to edit user
router.get('/:id/edit', function(req,res){
  var userId = req.params.id;
  knex('users').where('id', userId).first().then(function(result, err){
    var user = result;
    res.render('users/edit', {users: user});
  })
})

//deletes
router.delete('/:id', function(req, res){
  var user = req.body;
  knex('users').where('id', req.params.id).del().then(function(result){
    res.redirect('/users');
  })
})

//shows user
router.get('/:id', function(req,res){
  var userId = req.params.id;
  knex('users').where('id', userId).first().then(function(result, err){
    var user = result;
    res.render('users/show', {user: user});
  })
})

module.exports = router;
