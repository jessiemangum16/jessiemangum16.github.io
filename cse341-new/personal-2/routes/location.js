const express = require("express");
const routes = express.Router();
const mongoose = require('mongoose')

const bodyParser = require("body-parser");
routes.use(bodyParser.urlencoded({ extended: false }));
routes.use(bodyParser.json());

const location = require('../models/location');

//Get ALL
routes.get("/", (req, res) => {
  location.find({})
  .then((data) => {
    res.status(200).send(data);
    console.log("returned all");
  })
  .catch((err) => {
    res.status(500).send({
      message: err.message || 'Some error occurred while retrieving location.'
    });
  });
});

//Get ONE location by name
routes.get("/:locationName", (req, res) => {
  const locationName = req.params.locationName;

  location.countDocuments({ locationName: locationName })
    .then(function (num) {
      if (num === 0) {
        res.status(400).json("Must use a valid location name.");
      } else {
        location.find({ locationName: locationName })
        .then((data) => {
          res.status(200).send(data);
          console.log(`returned ${req.params.locationName}`);
        })
        .catch((err) => {
          res.status(500).send({
            message: err.message || 'Some error occurred while retrieving location.'
          });
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
    !req.body.zipCode ||
    !req.body.webAddress ||
    !req.body.phoneNum
  ) {
    res
      .status(400)
      .json(
        "Please fill in all required fields - Required Fields: locationName, streetAddress, city, state, zipCode"
      );
  }else{

    const newLocation = new location(req.body);
    newLocation.save()
    .then((data) => {
      console.log(data);
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error occurred while creating the location.'
      });
    });
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
    !req.body.zipCode ||
    !req.body.webAddress ||
    !req.body.phoneNum
  ) {
    res
      .status(400)
      .json(
        "Please fill in all required fields - Required Fields: locationName, streetAddress, city, state, zipCode"
      );
  }else{

  location.countDocuments({ locationName : locationName })
    .then(function (num) {
      if (num === 0) {
        res.status(400).json("Must use a valid location name.");
      } else {
        location.findOne({ locationName : locationName }, (err, updateLocation) => {
          updateLocation.locationName = req.params.locationName;
          updateLocation.streetAddress = req.body.streetAddress;
          updateLocation.city = req.body.city;
          updateLocation.state = req.body.state;
          updateLocation.zipCode = req.body.zipCode;
          updateLocation.webAddress = req.bodywebAddress;
          updateLocation.phoneNum = req.body.phoneNum;
          updateLocation.save(function (err) {
            if (err) {
              res.status(500).json(err || 'Some error occurred while updating the location.');
            } else {
              res.status(200).send();
            }
          })
        })
      }
    })
  }
});

//Delete
routes.delete("/:locationName", (req, res) => {
  const locationName = req.params.locationName;

  location.countDocuments({ locationName: locationName })
    .then(function (num) {
      if (num === 0) {
        res.status(400).json("Must use a valid location name.");
      } else {
        location.deleteOne({ locationName: locationName }, function (err, result) {
          if (err) {
            res.status(500).json(err || 'Some error occurred while deleting the location.');
          } else {
            res.status(200).send(result);
          }
        })
          .catch((error) => console.error(error));
      }
    });
});

module.exports = routes;
