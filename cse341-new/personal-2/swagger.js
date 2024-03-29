const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'My API',
    description: 'Description',
  },

  host: 'event-book-cse341.herokuapp.com',
  schemes: ['http'],

};

const outputFile = './swagger-auto.json';
const endpointsFiles = ['./routes/index.js'];

/* NOTE: if you use the express Router, you must pass in the 
   'endpointsFiles' only the root file where the route starts,
   such as index.js, app.js, routes.js, ... 
   

  host: 'event-book-cse341.herokuapp.com',
  schemes: ['http'],


  host: 'localhost:8080',
  schemes: ['http'],
*/

swaggerAutogen(outputFile, endpointsFiles, doc);