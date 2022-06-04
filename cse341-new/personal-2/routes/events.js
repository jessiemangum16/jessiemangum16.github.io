const express = require("express");
const routes = express.Router();
const mongoose = require('mongoose')

const bodyParser = require("body-parser");
routes.use(bodyParser.urlencoded({ extended: false }));
routes.use(bodyParser.json());

const events = require('../models/events');



//Get ALL
routes.get("/", (req, res) => {
    events.find({})
    .then((data) => {
      res.status(200).send(data);
      console.log("returned all");
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error occurred while retrieving event.'
      });
    });
});

//Get ONE
routes.get("/:eventName", (req, res) => {
  const eventName = req.params.eventName;

  events.countDocuments({ eventName: eventName })
    .then(function (num) {
      if (num === 0) {
        res.status(400).json("Must use a valid event name.");
      } else {
        events.find({ eventName: eventName })
        .then((data) => {
          res.status(200).send(data);
          console.log(`returned ${req.params.eventName}`);
        })
        .catch((err) => {
          res.status(500).send({
            message: err.message || 'Some error occurred while retrieving event.'
          });
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
    !req.body.endTime ||
    !req.body.locationName ||
    !req.body.comments
  ) {
    res
      .status(400)
      .json(
        "Please fill in all required fields - Required Fields: eventName, date, eventHost, startTime, location"
      );
  }else{

  const event = new events(req.body);
    event.save()
    .then((data) => {
      console.log(data);
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error occurred while creating the event.'
      });
    });
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
    !req.body.endTime ||
    !req.body.locationName ||
    !req.body.comments
  ) {
    res
      .status(400)
      .json(
        "Please fill in all required fields - Required Fields: eventName, date, eventHost, startTime, location"
      );
  }else{

  events.countDocuments({ eventName: eventName })
    .then(function (num) {
      if (num === 0) {
        res.status(400).json("Must use a valid event name.");
      } else {
        events.findOne({ eventName: eventName }, (err, event) => {
          event.eventName = req.params.eventName;
          event.date = req.body.date;
          event.eventHost = req.body.eventHost;
          event.startTime = req.body.startTime;
          event.endTime = req.body.endTime;
          event.locationName = req.body.locationName;
          event.comments = req.body.comments;
          event.save(function (err) {
            if (err) {
              res.status(500).json(err || 'Some error occurred while updating the event.');
            } else {
              res.status(200).send();
            }
          })
        })
      }
    })
  }
})

//Delete
routes.delete("/:eventName", (req, res) => {
  const eventName = req.params.eventName;

  events.countDocuments({ eventName: eventName })
    .then(function (num) {
      if (num === 0) {
        res.status(400).json("Must use a valid event name.");
      } else {
        events.deleteOne({ eventName: eventName }, function (err, result) {
          if (err) {
            res.status(500).json(err || 'Some error occurred while deleting the event.');
          } else {
            res.status(200).send(result);
          }
        })
          .catch((error) => console.error(error));
      }
    });
});

module.exports = routes;
