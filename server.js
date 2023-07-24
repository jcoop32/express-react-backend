// initialize .env variables
require('dotenv').config();
const cors = require('cors');
const morgan = require('morgan');

// import people router
const peopleCtrl = require('./controllers/people-controller');

// get port # and url from .env file
const { PORT, DATABASE_URL } = process.env;

// import express
const express = require('express');

// create application object
const app = express();
require('./config/db.connection');

// middleware
// parse json bodies - will run before our request accesses the people router
app.use(express.json());
// to prevent cors (cross-origin resource sharing) errors, open access to all origins
app.use(cors());
// logging for development
app.use(morgan('dev'));

// all requests for endpoints that begin with /people
app.use('/people', peopleCtrl);

// routes
app.get('/', function (req, res) {
  res.send('hello world');
});

// Listener
app.listen(PORT, () => console.log(`listening on PORT ${PORT}`));
