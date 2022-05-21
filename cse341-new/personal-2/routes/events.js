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
    .toArray()
    .then((documents) => {
      res.status(200).json(documents);
      console.log("returned all");
    });
});

//Get ONE
routes.get("/:eventName", (req, res) => {
  const eventName = req.params.eventName;
  const results = dbConnection.getCollectionEvents().find({ eventName: eventName });

  results.toArray().then((documents) => {
    res.status(200).json(documents[0]);
    console.log(`returned ${req.params.eventName}`);
  });
});

//Add new 
routes.post("/", (req, res) => {
  const event = {
    eventName: req.body.eventName,
    date: req.body.date,
    eventHost: req.body.eventHost,
    startTime: req.body.startTime,
    endTime: req.body.endTime,
    location: req.body.location,
    comments: req.body.comments 
  };

  dbConnection
    .getCollectionEvents()
    .insertOne(event)
    .then((result) => {
      res.status(200).json(result[0]);
      console.log(result);
      console.log(user);
    })
    .catch((error) => console.error(error));
});

//Update
routes.put("/:eventName", (req, res) => {
  const eventName = req.params.eventName;

  const event = {
    eventName: req.body.eventName,
    date: req.body.date,
    eventHost: req.body.eventHost,
    startTime: req.body.startTime,
    endTime: req.body.endTime,
    location: req.body.location,
    comments: req.body.comments 
  };

  const results = dbConnection
    .getCollectionEvents()
    .replaceOne({ eventName: eventName }, event);

  results.then((documents) => {
    res.status(200).json(documents[0]);
    console.log(`Updated ${req.params.eventName}`);
  });
});

//Delete
routes.delete("/:eventName", (req, res) => {
  const eventName = req.params.eventName;
  const results = dbConnection.getCollectionEvents().deleteOne({ eventName: eventName });

  results.then((documents) => {
    res.status(200).json(documents[0]);
    console.log(`Deleted ${req.params.eventName}`);
  });
});

module.exports = routes;
