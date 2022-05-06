const express = require('express');
const bodyParser = require('body-parser');
const routes = express.Router();
const dbConnection = require('../db/connection');
const ObjectId = require('mongodb').ObjectId;

routes.use(bodyParser.urlencoded({ extended: false }));
routes.use(bodyParser.json());

//Get ALL contacts
routes.get('/', (req,res) =>{
    
    dbConnection.getCollection().find().toArray().then((documents) => {
        res.status(200).json(documents);
        console.log('returned all contact');
    });

});

//Get ONE contacts
routes.get('/:id', (req,res) =>{

    const contactId = new ObjectId(req.params.id);
    const results = dbConnection.getCollection().find({_id: contactId});


    results.toArray().then((documents) => {
        res.status(200).json(documents[0]);
        console.log(`returned contact ${req.params.id}`);
    });
    
});

//Add new contact
routes.post('/', (req, res) =>{

    dbConnection.getCollection().insertOne(req.body)
        .then(result => {
            console.log(result)
            console.log(req.body)
        })
        .catch(error => console.error(error))
});

//Update a contact
routes.put('/:id', (req, res) =>{

    const contactId = new ObjectId(req.params.id);
    const results = dbConnection.getCollection().replaceOne({_id: contactId},  req.body);


    results.then((documents) => {
        res.status(200).json(documents[0]);
        console.log(`Updated contact ${req.params.id}`);
    });
});

//Delete contact
routes.delete('/:id', (req,res) => {
    console.log(req.body);

    const contactId = new ObjectId(req.params.id);
    const results = dbConnection.getCollection().deleteOne({_id: contactId});


    results.then((documents) => {
        res.status(200).json(documents[0]);
        console.log(`Deleted contact ${req.params.id}`);
    });
})

module.exports = routes;