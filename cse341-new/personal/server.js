const express = require('express');
const mongodb = require('./DB/connection');

const app = express();
const port = process.env.PORT || 3000;

app.use('/', require('./routes'))


mongodb.initDb((err, mongodb) => {
  if(err) {
    console.log(err);
  }else{
    app.listen(port);
    console.log(`Example app listening on port ${port}`);
  }
});