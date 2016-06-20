var express = require('express');
var router = express.Router({mergeParams: true});
var knex = require('../db/knex')

//get posts
router.get('/', function(req,res){
  knex('posts').innerJoin('users', 'posts.user_id', 'users.id').then(function(result, err){
    var post = result;
    res.render('posts/index', {posts: post});
  })
})

router.get('/new', function(req,res){
  var userId = req.params.user_id;
  knex('posts').innerJoin('users', 'posts.user_id', 'user.id').then(function(result, err){
    var post = result;
    eval(locus);
    res.render('posts/new');
  })
})

router.post('/posts', function(req, res){
  var user = req.body;
  var userId = req.params.id;
  console.log(user);
  req.redirect(':id/posts')
})



module.exports = router
