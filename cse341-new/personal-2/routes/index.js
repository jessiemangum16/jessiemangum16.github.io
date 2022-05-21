const express = require('express');
const routes = express.Router();

routes.use('/', require('./swagger'));
routes.use('/users', require('./users'));


routes.get('/', (req,res) =>{
    res.send('This is index');
})

module.exports = routes;