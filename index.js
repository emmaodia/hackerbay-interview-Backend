const express = require('express');

const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (res) => res.json({
  status: 'success',
  msg: 'Welcome, Nerd!',
  about: 'HackerBay Backend Developer Test.',
  documentation: 'Kindly view documentation below',
  url: 'https://app.swaggerhub.com/apis-docs/emmaodia/hackerbay-interview-backend/1.0.0',
  stack: 'NodeJS - JavaScript, Mocha, Chai, Redis, Docker',
}));

const appRoute = require('./app/routes/main');

app.use('/', appRoute);

app.listen(5000);

module.exports = app;
