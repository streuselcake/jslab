// jshint esversion: 6
// jshint node: true
"use strict";

// looking for lat, long coordinate of e.g. an address
// options include mapbox and locationiq
// google maps offers yet another option: https://developers.google.com/maps/documentation/geocoding/start

var https = require("https");

var search_text = encodeURIComponent("Heisenbergstraße 2, 48149 Muenster");


// using mapbox
// https://docs.mapbox.com/api/search/#forward-geocoding
// note: as per license,
//        - forbidden to store the data returned from the api endpoint
//        - forbidden to use the data other than showing it in a mapbox map


var MAPBOX_TOKEN = require(__dirname + "/../../_api-token/token.js").token.MAPBOX_TOKEN;
var path_mapbox = "https://api.tiles.mapbox.com/geocoding/v5/mapbox.places/" +
search_text+".json"+"?types=address"+"&access_token="+MAPBOX_TOKEN;

https.get(path_mapbox, (response) => {

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
      console.dir(data.features[0].center);
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
