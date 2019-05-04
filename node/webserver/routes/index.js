// jshint esversion: 6
// jshint node: true
"use strict";

var http = require("http");
var host = "127.0.0.1";
var port = 3000;




const server = http.createServer( (request, response) => {

  //console.dir(request);
  console.dir(request.url);

  // defined route for "/index.html", and "/" ... and for other responses...
  if (request.url === "/index.html" || request.url === "/index" || request.url === "/") {
    response.writeHead(200,{"content-type":"text/html"} );
    response.write("<a href=\"/start\">start</a> | <a href=\"/hello\">hello</a> | <a href=\"/world\">world</a>");
    response.write("Start here ...");
    response.end();

  } else if (request.url === "/hello.html" ) {
    response.writeHead(200,{"content-type":"text/html"} );
    response.write("<a href=\"/start\">start</a> | <a href=\"/hello\">hello</a> | <a href=\"/world\">world</a>");
    response.write("Hello!");
    response.end();

  } else if (request.url === "/world.html" ) {
    response.writeHead(200,{"content-type":"text/html"} );
    response.write("<a href=\"/start\">start</a> | <a href=\"/hello\">hello</a> | <a href=\"/world\">world</a>");
    response.write("World!");
    response.end();

  } else if (request.url === "home"){
    // This header asks the browser to follow up and go to ...
    response.writeHead(302, {"location": "/"});
    response.end();

  } else {
    response.writeHead(404,{"content-type":"text/html"} );
    response.end("Error: file not found");
  }

});

server.listen(port, host, () => {
  console.log("Server listening on "+host+":"+port);
});
