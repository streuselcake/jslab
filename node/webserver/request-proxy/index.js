// jshint esversion: 6
// jshint node: true
"use strict";

// 1. The server provides the index.html (and embedded client.js) for the browser.
// 2. The client.js in the browser then uses ajax to ask for a the weather data in json format.
// 3. The server calls a weather api-endpoint via http, and then responds with this data to the client request.

var http = require("http");
var https = require("https");

var host = "localhost";
var port = 8000;

const fs = require("fs");

var DARKSKY_KEY = require(__dirname + "/../../../_api-token/token.js").token.DARKSKY_KEY;

var endpoint = "https://api.darksky.net/forecast/" + DARKSKY_KEY + "/51.969431,7.595707";

const server = http.createServer( (req, res) => {

  if (req.url === "/index.html" || req.url === "/" || req.url === "" ) {

    fs.readFile("index.html", (error, html) => {
      if (error) {
        throw error;
      }
      res.writeHead(200, { "content-type": "text/html" });
      res.write(html);
      res.end();
    });

  } else if (req.url === "/client.js" || req.url === "/" || req.url === "" ) {

    fs.readFile("client.js", (error, js) => {
      if (error) {
        throw error;
      }
      res.writeHead(200, { "content-type": "application/javascript" });
      res.write(js);
      res.end();
    });

  } else if(req.url === "/weather.json"){

    console.log(endpoint);

    https.get(endpoint, (httpResponse) => {

      // concatenate updates from datastream
      var body = "";
      httpResponse.on("data", (chunk) => {
        body += chunk;
      });

      httpResponse.on("end", () => {
        var weather = JSON.parse(body);
        console.log(weather.currently.summary);
        res.writeHead(200, { "content-type": "application/json" });
        res.write(JSON.stringify(weather));
        res.end();
      });

      httpResponse.on("error", (error) => {
        throw error;
      });

    });

  }

});

server.listen(port, host, () => {
  console.log("Server listening on "+host+":"+port);
});
