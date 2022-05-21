const dotenv = require('dotenv');
dotenv.config();

const MongoClient = require('mongodb').MongoClient;

let _client;
let _collection;

const initDb = () => {

  MongoClient.connect(process.env.MONGODB_URI, (err, client) =>{
    if(err) throw err;
    _client = client;
    _collectionEvents = client.db("eventBook").collection("eventa")
    _collectionLocation = client.db("eventBook").collection("location")
    console.log("DB Connected");
    });

}

const getCollectionEvents = () => {
  return _collectionEvents
}

const getCollectionLocation = () => {
  return _collectionLocation
}


module.exports = {initDb, getCollectionEvents, getCollectionLocation}