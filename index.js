const express = require('express');

const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (res) => res.json({
  status: 'success',
  msg: 'Welcome, Nerd!',
  about: 'A Mock League API that serves Football Fixtures Score.  that serves the latest scores of fixtures of matches in a Mock Premier League',
  documentation: 'Kindly view documentation below',
  url: 'https://documenter.getpostman.com/view/4783155/Szf54VPL?version=latest',
  stack: 'NodeJS - JavaScript, MongoDB, Jest, Redis, Docker',
}));

const appRoute = require('./app/routes/main');

app.use('/', appRoute);

app.listen(5000);

module.exports = app;
