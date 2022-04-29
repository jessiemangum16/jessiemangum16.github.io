const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

app.use('/', require('./routes'));

app.listen(port, () => {
  console.log(`Connected and listening on ${port}`);
});


const dotenv = require('dotenv');
dotenv.config();
  
const MongoClient = require('mongodb').MongoClient;
const uri = process.env.MONGODB_URI;
MongoClient.connect(uri, function(err, db){
  if(err) throw err;
  var dbo = db.db("cse341");
  dbo.collection("contacts").find().toArray(function(err, result){
    if (err) throw err;
    console.log(result);
    db.close;
  });
});