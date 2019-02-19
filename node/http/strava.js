// jshint esversion: 6
// jshint node: true
"use strict";


// login to your straca account and request client secret:
//                                https://www.strava.com/settings/api

// get STRAVA_ACCESS_TOKEN via OAuth2.0 as described in the docs:
//                                https://developers.strava.com/docs/

const https = require("https");

var STRAVA_ACCESS_TOKEN = process.env.STRAVA_ACCESS_TOKEN ?
                              process.env.STRAVA_ACCESS_TOKEN :
                              require(__dirname + "/../.._api-token/token.js").STRAVA_ACCESS_TOKEN;

const options = {
  hostname: "www.strava.com",
  port: 443,
  path: "/api/v3/athlete",
  method: "GET",
  headers: {
    authorization: "Bearer " + STRAVA_ACCESS_TOKEN,
    Accept: "application/json"
  }
};


https.get(options, (response) => {

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
      console.log("data", data.firstname);
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
// for request via POST:
const options = {
...
method: "POST",
...
};

const req = https.request(options, (res) => {
...
});

req.on("error", (e) => {
console.error(e.message);
});

req.end();
*/



/*

const request = require("request");

const options = {
url: "https://www.strava.com/api/v3/athlete",
headers: {
authorization: "Bearer " + STRAVA_ACCESS_TOKEN,
Accept: "application/json"
}
};


request(options, function (error, response, body) {

//console.log("response", response);
console.log("body", body);

if (!error && response.statusCode == 200) {

//console.log("body", body);
var data = JSON.parse(body);

console.log("data", data.firstname);

} else {
console.log("status", response.statusCode + ": " + response.statusText);
console.log("error", error);
}

});
*/
