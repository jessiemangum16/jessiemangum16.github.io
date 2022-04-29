const express = require('express');
const routes = express.Router();

routes.get('/', (req,res) =>{
    res.send("This is contacts");
})

//const contactsController = require('../controllers/contacts');

//router.get('/', contactsController.getAll);

//router.get('/:id', contactsController.getSingle);

module.exports = routes;