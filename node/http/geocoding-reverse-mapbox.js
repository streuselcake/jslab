// jshint esversion: 6
// jshint node: true
"use strict";

// looking for e.g. address of a particular location given as lat,long coordinate
// options include mapbox and locationiq
// google maps offers yet another option: https://developers.google.com/maps/documentation/geocoding/start

var https = require("https");

// Institute for Geoinformatics, University of Münster
// var longitude = 7.595693;
// var latitude =  51.969498;

// Schlossplatz
var longitude = 7.614740;
var latitude = 51.963528;


// using mapbox
// https://docs.mapbox.com/api/search/#reverse-geocoding
// note: as per license,
//        - forbidden to store the data returned from the api endpoint
//        - forbidden to use the data other than showing it in a mapbox map

var MAPBOX_TOKEN = require(__dirname + "/../../_api-token/token.js").token.MAPBOX_TOKEN;

var mapbox_path = "https://api.tiles.mapbox.com/geocoding/v5/mapbox.places/"+
longitude+","+latitude+".json?access_token="+MAPBOX_TOKEN;

https.get(mapbox_path, (response) => {

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
      console.log(data.features[0].place_name);
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
