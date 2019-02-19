// jshint esversion: 6
// jshint node: true
"use strict";

// NASA has apis
// see api: https://api.nasa.gov/api.html

const https = require('https');

var path = "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY";


https.get(path, (response) => {

  //console.dir(response);

  // concatenate updates from datastream
  var body = "";
  response.on("data", (chunk) => {
    body += chunk;
  });

  response.on("end", () => {
    try{
      var data = JSON.parse(body);
      //console.log(JSON.stringify(data,null,2));
      console.log(data.explanation);
    } catch(error){
      console.log("error: " + JSON.stringify(error));
    }
  });

  response.on("error", (error) => {
    console.log("on response error: " + error);
  });

}).on("error", (error) => {
  console.log("https error: ");
  console.dir(error);
});

/*
const request = require('request');

request('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY', { json: true }, (err, res, body) => {
if (err) { return console.log(err); }
console.log(body.url);
console.log(body.explanation);
});
*/
