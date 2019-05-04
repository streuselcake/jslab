// jshint esversion: 6
// jshint node: true
"use strict";

const http = require("http");

var url = "http://localhost:3000/?item=node+item&description=node+app+requested+item+via+http";

http.get(url, (response) => {

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
