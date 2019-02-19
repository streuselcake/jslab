// jshint esversion: 6
// jshint node: true
"use strict";

var http = require("http");
var host = "127.0.0.1";
var port = 2000;




const server = http.createServer( (request, response) => {

  //console.dir(request);
  console.dir(request.url);

  // declare content type in response headers
  //     using .writeHead() or .setHeader()
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Type

  // ... a commonly used request content-types:
  // application/x-www-form-urlencoded; charset=utf-8
  // application/json, */*

  // ... a commonly used request accept-types:
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

server.listen(port, host, () => {
  console.log("Server listening on "+host+":"+port);
});
