var express = require('express');
var router = express.Router({mergeParams: true});
var knex = require('../db/knex')

router.get('/', function(req,res){
  knex('posts').then(function(result, err){
    var users = results;
    res.render('/index', {user: users});
  })
})

module.exports = router
