const express = require('express');
const app = express();
const port = 3000;
const fetch = require('node-fetch');
require('dotenv').config();

const url = 'http://api.openweathermap.org/data/2.5/weather?q=';
const apiId = process.env.EXPRESS_API_ID;

app.use(express.static('public'));

app.listen(port, () => console.log(`Server listening on port ${port}`));
