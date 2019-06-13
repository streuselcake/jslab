// jshint esversion: 6
// jshint node: true
"use strict";

var http = require("http");
var host = "0.0.0.0";
var port = 3000;




const server = http.createServer( (request, response) => {

  //console.dir(request);
  console.dir(request.url);

  // declare content type in response headers
  //     using .writeHead() or .setHeader()
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Type

  // ... commonly used request content-types:
  // application/x-www-form-urlencoded; charset=utf-8
  // application/json, */*

  // ... commonly used request accept-types:
  // application/x-www-form-urlencoded; charset=utf-8
  // application/json, */*

  // ... some commonly used response content-types:
  // text/html
  // text/plain
  // application/javascript
  // application/json
  response.writeHead(200,{"content-type":"text/plain"} );

  // alternatively use:
  // response.statusCode = 200;
  // response.setHeader("content-type", "text/plain");

  // write response
  response.write("Hello world!");

  // response.write("More response text...");

  // finish! ... try what happens in the browser without .end()
  response.end();

});

//var host = server.address();

server.listen(port, host, () => {
  console.log("Server listening on "+host+":"+port);
});
