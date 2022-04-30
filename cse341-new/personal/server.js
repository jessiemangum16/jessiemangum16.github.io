const express = require('express');
const app = express();
const port = process.env.PORT || 8080;
const dbConnection = require('./db/connection');

dbConnection.initDb();

app.use('/', require('./routes'));

app.listen(port, () => {
  console.log(`Connected and listening on ${port}`);
});