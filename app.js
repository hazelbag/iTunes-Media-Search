const express = require('express')
const app = express()
const path = require('path');
const axios = require('axios')
const helmet = require("helmet");

app.use(helmet.frameguard());

const bodyParser = require("body-parser");

app.use(bodyParser.json());

app.get('/movie/:query', function (req, res, next) {
    const query = req.params.query
    axios.get(`https://itunes.apple.com/search?term=${query}&media=movie&limit=40`)
      .then((response) => {
        response.data.results.map((data) => data.artworkUrl200 = data.artworkUrl100.replace('100x100', '200x200'));
        console.log('fetched...', response.data.results)
        return response.data.results;
      })
      .then((response) => {
        res.json(response);
      })
      .catch((error) => console.log(error))
  });

  app.get('/tvShow/:query/', function (req, res, next) {
    const query = req.params.query
    axios.get(`https://itunes.apple.com/search?term=${query}&media=tvShow&limit=40`)
      .then((response) => {
        response.data.results.map((data) => data.artworkUrl200 = data.artworkUrl100.replace('100x100', '200x200'));
        console.log('fetched...', response.data.results)
        return response.data.results;
      })
      .then((response) => {
        res.json(response);
      })
      .catch((error) => console.log(error))
  });

  app.get('/music/:query/', function (req, res, next) {
    const query = req.params.query
    axios.get(`https://itunes.apple.com/search?term=${query}&media=music&limit=40`)
      .then((response) => {
        response.data.results.map((data) => data.artworkUrl200 = data.artworkUrl100.replace('100x100', '200x200'));
        console.log('fetched...', response.data.results)
        return response.data.results;
      })
      .then((response) => {
        console.log(response)
        res.json(response);
      })
      .catch((error) => console.log(error))
  });

  app.get('/musicVideo/:query/', function (req, res, next) {
    const query = req.params.query
    axios.get(`https://itunes.apple.com/search?term=${query}&media=musicVideo&limit=40`)
      .then((response) => {
        response.data.results.map((data) => data.artworkUrl200 = data.artworkUrl100.replace('100x100', '200x200'));
        console.log('fetched...', response.data.results)
        return response.data.results;
      })
      .then((response) => {
        res.json(response);
      })
      .catch((error) => console.log(error))
  });

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
