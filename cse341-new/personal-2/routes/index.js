const express = require('express');
const routes = express.Router();

routes.use('/', require('./swagger'));
//routes.use('/contacts', require('./users'));
routes.use('/events', require('./events'));


routes.get('/', (req,res) =>{
    res.send('This is index');
})

module.exports = routes;