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


// using openstreetmap
// see https://wiki.openstreetmap.org/wiki/Nominatim
// open link in browser: https://nominatim.openstreetmap.org/search/Heisenbergstraße 2, 48149 Münster?format=jsonv2
//
// Unfortunately, simply using openstreetmap itself does not work due to violating terms of use <a href="https://operations.osmfoundation.org/policies/nominatim/">usage policy</a>
// - e.g. is not meant for machines frequently visiting the data
//
// Fortunately, the osm wiki points out alternatives.
// You may use set up a server and use your own instance; or use other Nominatim providers:
// - https://developer.mapquest.com/
// - https://opencagedata.com/
// - https://my.locationiq.com
//        (Note individual restrictions)

var LOCATIONIQ_TOKEN = require(__dirname + "/../../_api-token/token.js").LOCATIONIQ_TOKEN;

var path_locationiq = "https://eu1.locationiq.com/v1/reverse.php"+
"?key="+LOCATIONIQ_TOKEN+"&lat="+latitude+"&lon="+longitude+"&format=json";

https.get(path_locationiq, (response) => {

  //console.dir(response);

  // concatenate updates from datastream
  var body = "";
  response.on("data", (chunk) => {
    body += chunk;
  });

  response.on("end", () => {
    try{
      var data = JSON.parse(body);
      // console.log(JSON.stringify(data,null,2));
      console.log(data.display_name);
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
