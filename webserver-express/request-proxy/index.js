// jshint esversion: 6
// jshint node: true
"use strict";


// usage:
// $ npm init
// $ npm install express --save
// $ node .
// -> open in browser: http://localhost:3000/


// 1. The server provides the index.html (and embedded client.js) for the browser.
// 2. The client.js in the browser then uses ajax to ask for a the weather data in json format.
// 3. The server calls a weather api-endpoint via http, and then responds with this data to the client request.


const express = require("express");

var https = require("https");

const app = express();
const port = 3000;

var DARKSKY_KEY = require(__dirname + "/../../_api-token/token.js").token.DARKSKY_KEY;

var endpoint = "https://api.darksky.net/forecast/" + DARKSKY_KEY + "/51.969431,7.595707";


app.use(express.static("public"));

// console.log(endpoint);


app.get("/weather.json", (req, res) => {

  https.get(endpoint, (httpResponse) => {
    // concatenate updates from datastream
    var body = "";
    httpResponse.on("data", (chunk) => {
      body += chunk;
    });

    httpResponse.on("end", () => {
      var weather = JSON.parse(body);
      console.log(weather.currently.summary);

      res.json(weather);

    });

    httpResponse.on("error", (error) => {
      throw error;
    });

  });

});


var server = app.listen(port, () => console.log("Example app listening on port " + port + "!"));
