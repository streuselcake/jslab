// jshint esversion: 6
// jshint node: true
"use strict";


// note: pulling from apis is no different compared to pulling a webpage
// just some problems:
// - 'scraping' webpages is evil behavior because the provider pays for the traffic you are generating
// - many pages test for user being human (captchas)
// - server might ban your ip

const https = require('https');

var path = "https://de.wikipedia.org/wiki/Aasee_(M%C3%BCnster)";

https.get(path, (response) => {

  //console.dir(response);

  // concatenate updates from datastream
  var body = "";
  response.on("data", (chunk) => {
    body += chunk;
  });

  response.on("end", () => {
    console.log(body);
  });

  response.on("error", (error) => {
    console.log("on response error: " + error);
  });

}).on("error", (error) => {
  console.log("https error: ");
  console.dir(error);
});
