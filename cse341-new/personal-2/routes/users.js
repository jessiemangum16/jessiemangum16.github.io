const express = require("express");
const bodyParser = require("body-parser");
const routes = express.Router();
const dbConnection = require("../db/connection");
const ObjectId = require("mongodb").ObjectId;

routes.use(bodyParser.urlencoded({ extended: false }));
routes.use(bodyParser.json());

//Get ALL users
routes.get("/", (req, res) => {
  dbConnection
    .getCollection()
    .find()
    .toArray()
    .then((documents) => {
      res.status(200).json(documents);
      console.log("returned all contact");
    });
});

//Get ONE contacts
routes.get("/:id", (req, res) => {
  const contactId = new ObjectId(req.params.id);
  const results = dbConnection.getCollection().find({ _id: contactId });

  results.toArray().then((documents) => {
    res.status(200).json(documents[0]);
    console.log(`returned contact ${req.params.id}`);
  });
});

//Add new contact
routes.post("/", (req, res) => {
  const contact = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    favColor: req.body.favColor,
    birthday: req.body.birthday,
  };

  dbConnection
    .getCollection()
    .insertOne(contact)
    .then((result) => {
      res.status(200).json(result[0]);
      console.log(result);
      console.log(contact);
    })
    .catch((error) => console.error(error));
});

//Update a contact
routes.put("/:id", (req, res) => {
  const contactId = new ObjectId(req.params.id);

  const contact = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    favColor: req.body.favColor,
    birthday: req.body.birthday,
  };

  const results = dbConnection
    .getCollection()
    .replaceOne({ _id: contactId }, contact);

  results.then((documents) => {
    res.status(200).json(documents[0]);
    console.log(`Updated contact ${req.params.id}`);
  });
});

//Delete contact
routes.delete("/:id", (req, res) => {
  console.log(req.body);

  const contactId = new ObjectId(req.params.id);
  const results = dbConnection.getCollection().deleteOne({ _id: contactId });

  results.then((documents) => {
    res.status(200).json(documents[0]);
    console.log(`Deleted contact ${req.params.id}`);
  });
});

module.exports = routes;
