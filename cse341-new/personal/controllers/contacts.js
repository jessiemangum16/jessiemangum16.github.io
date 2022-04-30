const dotenv = require('dotenv');
dotenv.config();
  
const MongoClient = require('mongodb').MongoClient;
const uri = process.env.MONGODB_URI;
MongoClient.connect(uri, function(err, db){
  if(err) throw err;
  var dbo = db.db("cse341");
  dbo.collection("contacts").find().toArray(function(err, result){
    if (err) throw err;
    res.json(result);
    db.close;
  });
});