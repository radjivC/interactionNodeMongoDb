// countDocument.js
//
// How to count the document from a collection
//
// created by Radjiv Carrere
// 6 octobre 2014
//
// License MIT



var MongoClient = require('mongodb');

MongoClient.connect('mongodb://127.0.0.1:27017/rainbowZoo', function(err, db) {
if(err) throw err;

  db.collection('unicorn', function(err, collection) {
      collection.count(function(err, items) {
          console.log(items);
      });
  });
});
