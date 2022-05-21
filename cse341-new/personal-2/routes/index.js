const express = require('express');
const routes = express.Router();

routes.use('/', require('./swagger'));
routes.use('/events', require('./events'));
routes.use('/location', require('./location'));


routes.get('/', (req,res) =>{
    res.send('This is index');
})

module.exports = routes;