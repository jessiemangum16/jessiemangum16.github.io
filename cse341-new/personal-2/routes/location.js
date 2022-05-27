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
    .toArray((err, documents) => {
      if (err) {
        res.status(400).json({ message: err });
      }
      res.status(200).json(documents);
      console.log("returned all locations");
    });
});

//Get ONE location by name
routes.get("/:locationName", (req, res) => {
  const locationName = req.params.locationName;

  dbConnection
    .getCollectionLocation()
    .countDocuments({ locationName: locationName })
    .then(function (num) {
      if (num === 0) {
        res.status(400).json("Must use a valid location name.");
      } else {
        dbConnection
          .getCollectionLocation()
          .find({ locationName: locationName })
          .toArray((err, documents) => {
            if (err) {
              res.status(400).json({ message: err });
            }
            res.status(200).json(documents[0]);
            console.log(`returned location ${req.params.locationName}`);
          });
      }
    });
});

//Add new location
routes.post("/", (req, res) => {
  if (
    !req.body.locationName ||
    !req.body.streetAddress ||
    !req.body.city ||
    !req.body.state ||
    !req.body.zipCode 
  ) {
    res
      .status(400)
      .json(
        "Please fill in all required fields - Required Fields: locationName, streetAddress, city, state, zipCode"
      );
  }else{

  const location = {
    locationName: req.body.locationName,
    streetAddress: req.body.streetAddress,
    city: req.body.city,
    state: req.body.state,
    zipCode: req.body.zipCode,
    webAddress: req.body.webAddress,
    phoneNum: req.body.phoneNum,
  };

  dbConnection
    .getCollectionLocation()
    .insertOne(location)
    .then((result) => {
      res.status(200).json(`Succesfully added ${req.body.locationName}`);
    })
    .catch((error) => console.error(error));
  }
});

//Update
routes.put("/:locationName", (req, res) => {
  const locationName = req.params.locationName;

  if (
    !req.body.locationName ||
    !req.body.streetAddress ||
    !req.body.city ||
    !req.body.state ||
    !req.body.zipCode 
  ) {
    res
      .status(400)
      .json(
        "Please fill in all required fields - Required Fields: locationName, streetAddress, city, state, zipCode"
      );
  }else{

  const location = {
    locationName: req.body.locationName,
    streetAddress: req.body.streetAddress,
    city: req.body.city,
    state: req.body.state,
    zipCode: req.body.zipCode,
    webAddress: req.body.webAddress,
    phoneNum: req.body.phoneNum,
  };

  dbConnection
    .getCollectionLocation()
    .countDocuments({ locationName: locationName })
    .then(function (num) {
      if (num === 0) {
        res.status(400).json("Must use a valid location name.");
      } else {
        dbConnection
          .getCollectionLocation()
          .replaceOne({ locationName: locationName }, location)
          .then((documents) => {
            res.status(200).json(documents[0]);
            console.log(`Updated ${req.params.locationName}`);
          })
          .catch((error) => console.error(error));
      }
    });
  }
});

//Delete
routes.delete("/:locationName", (req, res) => {
  const locationName = req.params.locationName;

  dbConnection
    .getCollectionLocation()
    .countDocuments({ locationName: locationName })
    .then(function (num) {
      if (num === 0) {
        res.status(400).json("Must use a valid location name.");
      } else {
        dbConnection
          .getCollectionLocation()
          .deleteOne({ locationName: locationName })
          .then((documents) => {
            res.status(200).json(documents[0]);
            console.log(`Deleted ${req.params.locationName}`);
          })
          .catch((error) => console.error(error));
      }
    });
});

module.exports = routes;
