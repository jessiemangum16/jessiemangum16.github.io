const express = require("express");
const bodyParser = require("body-parser");
const routes = express.Router();
const dbConnection = require("../db/connection");
const ObjectId = require("mongodb").ObjectId;

routes.use(bodyParser.urlencoded({ extended: false }));
routes.use(bodyParser.json());

//Get ALL locations
routes.get("/", (req, res) => {
  try{
    dbConnection
      .getCollectionLocation()
      .find()
      .toArray()
      .then((documents) => {
        res.status(200).json(documents);
        console.log("returned all locations");
      }).catch((error) => console.error(error));
  } catch (err){
    res.status(500).json(err);
  }
});

//Get ONE location by name
routes.get("/:locationName", (req, res) => {
  try{
    const locationName = req.params.locationName;
    const results = dbConnection.getCollectionLocation().find({ locationName: locationName });

    results.toArray().then((documents) => {
      res.status(200).json(documents[0]);
      console.log(`returned location ${req.params.locationName}`);
    }).catch((error) => console.error(error));
  } catch (err){
    res.status(500).json(err);
  }
});

//Add new location
routes.post("/", (req, res) => {
  try{
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
      }).catch((error) => console.error(error));
  } catch (err){
    res.status(500).json(err);
  }
});

//Update
routes.put("/:locationName", (req, res) => {
  try{
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
    }).catch((error) => console.error(error));
  } catch (err){
    res.status(500).json(err);
  }
});

//Delete
routes.delete("/:locationName", (req, res) => {
  try{
    const locationName = req.params.locationName;
    const results = dbConnection.getCollectionLocation().deleteOne({ locationName: locationName });

    results.then((documents) => {
      res.status(200).json(documents[0]);
      console.log(`Deleted ${req.params.locationName}`);
    }).catch((error) => console.error(error));
  } catch (err){
    res.status(500).json(err);
  }
});

module.exports = routes;
