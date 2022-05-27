const express = require("express");
const bodyParser = require("body-parser");
const routes = express.Router();
const dbConnection = require("../db/connection");
const ObjectId = require("mongodb").ObjectId;

routes.use(bodyParser.urlencoded({ extended: false }));
routes.use(bodyParser.json());

//Get ALL
routes.get("/", (req, res) => {
  dbConnection
    .getCollectionEvents()
    .find()
    .toArray((err, documents) => {
      if (err) {
        res.status(400).json({ message: err });
      }
      res.status(200).json(documents);
      console.log("returned all");
    });
});

//Get ONE
routes.get("/:eventName", (req, res) => {
  const eventName = req.params.eventName;

  dbConnection
    .getCollectionEvents()
    .countDocuments({ eventName: eventName })
    .then(function (num) {
      if (num === 0) {
        res.status(400).json("Must use a valid event name.");
      } else {
        dbConnection
          .getCollectionEvents()
          .find({ eventName: eventName })
          .limit(1)
          .toArray((err, documents) => {
            if (err) {
              res.status(400).json({ message: err });
            }
            res.status(200).json(documents[0]);
            console.log(`returned ${req.params.eventName}`);
          });
      }
    });
});

//Add new
routes.post("/", (req, res) => {
  if (
    !req.body.eventName ||
    !req.body.date ||
    !req.body.eventHost ||
    !req.body.startTime ||
    !req.body.location
  ) {
    res
      .status(400)
      .json(
        "Please fill in all required fields - Required Fields: eventName, date, eventHost, startTime, location"
      );
  }else{

  const event = {
    eventName: req.body.eventName,
    date: req.body.date,
    eventHost: req.body.eventHost,
    startTime: req.body.startTime,
    endTime: req.body.endTime,
    location: req.body.location,
    comments: req.body.comments,
  };

  dbConnection
    .getCollectionEvents()
    .insertOne(event)
    .then((result) => {
      res.status(200).json(`Succesfully added ${req.body.eventName}`);
    })
    .catch((error) => console.error(error));
  }
});

//Update
routes.put("/:eventName", (req, res) => {
  const eventName = req.params.eventName;

  if (
    !req.body.eventName ||
    !req.body.date ||
    !req.body.eventHost ||
    !req.body.startTime ||
    !req.body.location
  ) {
    res
      .status(400)
      .json(
        "Please fill in all required fields - Required Fields: eventName, date, eventHost, startTime, location"
      );
  }else{

  const event = {
    eventName: req.body.eventName,
    date: req.body.date,
    eventHost: req.body.eventHost,
    startTime: req.body.startTime,
    endTime: req.body.endTime,
    location: req.body.location,
    comments: req.body.comments,
  };

  dbConnection
    .getCollectionEvents()
    .countDocuments({ eventName: eventName })
    .then(function (num) {
      if (num === 0) {
        res.status(400).json("Must use a valid event name.");
      } else {
        dbConnection
          .getCollectionEvents()
          .replaceOne({ eventName: eventName }, event)
          .then((documents) => {
            res.status(200).json(`Succesfully updated ${req.params.eventName}`);
            console.log(`Updated ${req.params.eventName}`);
          })
          .catch((error) => console.error(error));
      }
    });
  }
});

//Delete
routes.delete("/:eventName", (req, res) => {
  const eventName = req.params.eventName;

  dbConnection
    .getCollectionEvents()
    .countDocuments({ eventName: eventName })
    .then(function (num) {
      if (num === 0) {
        res.status(400).json("Must use a valid event name.");
      } else {
        dbConnection
          .getCollectionEvents()
          .deleteOne({ eventName: eventName })
          .then((documents) => {
            res.status(200).json(`Succesfully deleted ${req.params.eventName}`);
            console.log(`Deleted ${req.params.eventName}`);
          })
          .catch((error) => console.error(error));
      }
    });
});

module.exports = routes;
