'use strict';

// EXAMPLE 2: Send a JSON object back all API like
// ===============================================

const express = require('express');
const app = express();


// `res.json` converts JavaScript objects to JSON and
// appropriately sets the Content-Type header to 
// application/json; charset=utf-8
app.get('/', (req, res) => res.json({foo: 'bar'}).status(200).send());

// listen for requests :)
app.listen(process.env.PORT, () => console.log(
  `Your app is listening on port ${process.env.PORT}`));
