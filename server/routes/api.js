const express = require('express');
const router = express.Router();
// declare axios for making http requests
const axios = require('axios');
const API = 'https://jsonplaceholder.typicode.com';
/* GET api listing. */
router.get('/', (req, res) => {
 res.send('api works');
});

const MongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectID;
var db;
MongoClient.connect('mongodb://test1:testone1@ds127115.mlab.com:27115/testone', { useNewUrlParser: true }, (err, database) => {
 if (err) return console.log(err)
 db = database.db('testone');
});

// get all posts
router.get('/posts', function(req, res){
    db.collection('quotes').find().toArray( (err, results) =>
   {res.send(results)});
   });

// delete post based on id
router.route('/quotes/:_id').delete(function(req, res) {
    db.collection('quotes').deleteOne( {"_id": ObjectId(req.params._id)}
   );
   res.redirect("/");
   });

// update post based on id
router.route('/quotes/:_id').put(function(req, res) {
    db.collection('quotes').updateOne
   ({"_id": ObjectId(req.params._id)}, { $set: req.body });
   res.redirect("/");
   });
module.exports = router;