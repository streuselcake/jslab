// jshint esversion: 6
// jshint node: true
"use strict";


// weather data and forecast...

var https = require("https");

var lat = 51.969431;
var long = 7.595707;


// using openweathermap https://openweathermap.org/api

var OPENWEATHERMAP_TOKEN = require(__dirname + "/../../_api-token/token.js").OPENWEATHERMAP_TOKEN;


var openweathermap_path = "https://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+long+"&appid="+OPENWEATHERMAP_TOKEN;

https.get(openweathermap_path, (response) => {

  //console.dir(response);

  // concatenate updates from datastream
  let body = "";
  response.on("data", (chunk) => {
    body += chunk;
  });
  response.on("end", () => {
    try{
      let data = JSON.parse(body);
      //console.log(JSON.stringify(data,null,2));
      console.log("openweathermap: " + data.weather[0].main + " / " + data.weather[0].description);
    } catch(error){
      console.log("error: " + JSON.stringify(error));
    }
  });
  response.on("error", (error) => {
    console.log("error: " + JSON.stringify(error));
  });
}).on("error", (error) => {
  console.log("https error: ");
  console.dir(error);
});
