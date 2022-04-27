const routes = require('express').Router();


routes.get('/', (req, res) => {
    res.send('Jessie Mangum')
  })

  module.exports = routes;
  