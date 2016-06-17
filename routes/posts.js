var express = require('express');
var router = express.Router({mergeParams: true});
var knex = require('../db/knex')

router.get('/', function(req,res){
  eval(locus);
  var postId = req.params.id;
  var user_id = req.params.user_id;
  knex('posts').where('id', postId)
})

module.exports = router
