// createNewCollection.js
//
// created by Radjiv Carrere
// 6 octobre 2014
//
// License MIT


var MongoClient = require('mongodb');

MongoClient.connect('mongodb://127.0.0.1:27017/rainbowZoo', function(err, db) {
if(err) throw err;



  db.collection('unicorn', function(err, collection) {
      collection.count(function(err, counter) {
        console.log(counter);
        var unicorn =
        {
          "id":counter+1,
          "name":"robert",
          "birthday": "02/10/2010",
          "status":"sleepy"
        };
        collection.save(
          unicorn,
          function(err, object) {
              if (err){
                  console.warn(err.message);  // returns error if no matching object found
              }else{
                  console.dir(object);
              }
          });
        });

      });
});
