const express = require('express');
const routes = express.Router();
const dbConnection = require('../db/connection');
const ObjectId = require('mongodb').ObjectId;

routes.get('/', (req,res) =>{
    
    dbConnection.getCollection().find().toArray().then((documents) => {
        res.status(200).json(documents);
        console.log('returned all contact');
    });

});

routes.get('/:id', (req,res) =>{

    const contactId = new ObjectId(req.params.id);
    const results = dbConnection.getCollection().find({_id: contactId});


    results.toArray().then((documents) => {
        res.status(200).json(documents[0]);
        console.log(`returned contact ${req.params.id}`);
    });
    
});

module.exports = routes;