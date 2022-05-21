const express = require("express");
const bodyParser = require("body-parser");
const routes = express.Router();
const dbConnection = require("../db/connection");
const ObjectId = require("mongodb").ObjectId;

routes.use(bodyParser.urlencoded({ extended: false }));
routes.use(bodyParser.json());

//Get ALL locations
routes.get("/", (req, res) => {
  dbConnection
    .getCollectionLocation()
    .find()
    .toArray()
    .then((documents) => {
      res.status(200).json(documents);
      console.log("returned all locations");
    });
});

//Get ONE location by name
routes.get("/:locationName", (req, res) => {
  const locationName = req.params.locationName;
  const results = dbConnection.getCollectionLocation().find({ locationName: locationName });

  results.toArray().then((documents) => {
    res.status(200).json(documents[0]);
    console.log(`returned location ${req.params.locationName}`);
  });
});

//Add new location
routes.post("/", (req, res) => {
  const location = {
    locationName: req.body.locationName,
    streetAddress: req.body.streetAddress,
    city: req.body.city,
    state: req.body.state,
    zipCode: req.body.zipCode,
    webAddress: req.body.webAddress,
    phoneNum: req.body.phoneNum
  };

  dbConnection
    .getCollectionLocation()
    .insertOne(location)
    .then((result) => {
      res.status(200).json(result[0]);
      console.log(result);
      console.log(location);
    })
    .catch((error) => console.error(error));
});

//Update
routes.put("/:locationName", (req, res) => {
  const locationName = req.params.locationName;

  const location = {
    locationName: req.body.locationName,
    streetAddress: req.body.streetAddress,
    city: req.body.city,
    state: req.body.state,
    zipCode: req.body.zipCode,
    webAddress: req.body.webAddress,
    phoneNum: req.body.phoneNum
  };

  const results = dbConnection
    .getCollectionLocation()
    .replaceOne({ locationName: locationName }, location);

  results.then((documents) => {
    res.status(200).json(documents[0]);
    console.log(`Updated ${req.params.locationName}`);
  });
});

//Delete
routes.delete("/:locationName", (req, res) => {
  const locationName = req.params.locationName;
  const results = dbConnection.getCollectionLocation().deleteOne({ locationName: locationName });

  results.then((documents) => {
    res.status(200).json(documents[0]);
    console.log(`Deleted ${req.params.locationName}`);
  });
});

module.exports = routes;
