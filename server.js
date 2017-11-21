'use strict';

// EXAMPLE 2: Send a JSON object back all API like
// ===============================================

// import express
const express = require('express');
// init a new express app
const app = express();

// typically, this kind of data will live in a database layer, separate
// from the server.js file. You'll learn about the database layer later
// on, so for now we've included the data in-memory.
const accountData = {
  accountID: '15486906',
  firstName: 'Sally',
  lastName: 'Student',
  accountStatus: 'active'
};

// `res.json` converts JavaScript objects to JSON and
// appropriately sets the Content-Type header to 
// application/json; charset=utf-8 . By default,
// we'll get a 200 HTTP status code.
app.get('/my-account', (req, res) => res.json(accountData));

// listen for requests
app.listen(process.env.PORT || 8080, () => console.log(
  `Your app is listening on port ${process.env.PORT || 8080}`));
