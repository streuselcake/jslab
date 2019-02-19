// jshint esversion: 6
// jshint node: true
"use strict";


// weather data and forecast...

var https = require("https");

var lat = 51.969431;
var long = 7.595707;


// using darksky https://darksky.net/dev/docs
var DARKSKY_KEY = require(__dirname + "/../../_api-token/token.js").DARKSKY_KEY;


var darksky_path = "https://api.darksky.net/forecast/"+DARKSKY_KEY+"/"+lat+","+long;
https.get(darksky_path, (response) => {

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
      console.log("darksky: " + data.currently.icon + " / " + data.currently.summary);
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


// alternative way... using package "request"
/*
var request = require("request");
request.get("https://api.darksky.net/...",
(error, response, body) => {
if(error) {
return console.dir(error);
} else{
var weather = JSON.parse(body);
console.dir(weather["currently"]["summary"]);
}
});
*/

// other packages: "axios" ...
