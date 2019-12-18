const express = require('express');
const app = express();
const port = 3000;
const fetch = require('node-fetch');
require('dotenv').config();

const url = 'http://api.openweathermap.org/data/2.5/weather?';
const apiId = process.env.EXPRESS_API_ID;

app.use(express.static('public'));

app.get('/nearby', (req, res) => {
  const lat = req.query.latitude;
  const long = req.query.longitude;
  res.setHeader('Access-Control-Allow-Origin', '*');
  fetch(`${url}lat=${lat}&lon=${long}&units=metric&appid=${apiId}`)
    .then(response => response.json())
    .then(data => res.json(data));
});

app.get('/search/:id', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  fetch(`${url}q=${req.params.id}&units=metric&appid=${apiId}`)
    .then(response => response.json())
    .then(data => res.json(data));
});

app.listen(port, () => console.log(`Server listening on port ${port}`));
