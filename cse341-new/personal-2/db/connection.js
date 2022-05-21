const dotenv = require('dotenv');
dotenv.config();

const MongoClient = require('mongodb').MongoClient;

let _client;
let _collection;

const initDb = () => {

  MongoClient.connect(process.env.MONGODB_URI, (err, client) =>{
    if(err) throw err;
    _client = client;
    _collectionUsers = client.db("eventBook").collection("users")
    _collectionEvents = client.db("eventBook").collection("events")
    console.log("DB Connected");
    });

}

const getCollectionUsers = () => {
  return _collectionUsers
}

const getCollectionEvents = () => {
  return _collectionEvents
}


module.exports = {initDb, getCollectionUsers, getCollectionEvents}