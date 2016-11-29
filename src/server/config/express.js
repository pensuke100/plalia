const cors = require('cors');
const express = require('express');
const httpStatus = require('http-status');
const routes = require('../routes');

const app = express();

// Setup app middleware
app.set('port', (process.env.PORT || 8001));

// enable CORS - default is set to *
app.use(cors());

// Route Handler
app.use('/', routes);

// catch 404
app.use((req, res) => {
  res.set('Content-Type', 'text/plain');
  res.status(httpStatus.NOT_FOUND).send('not found');
});

module.exports = app;
