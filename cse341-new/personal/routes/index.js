const express = require('express');
const routes = express.Router();

routes.use('/contacts', require('./contacts'))


routes.get('/', (req,res) =>{
    res.send('This is index');
})

module.exports = routes;