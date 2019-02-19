// jshint esversion: 6
// jshint node: true
"use strict";


var http = require("http");
var host = "127.0.0.1";
var port = 8002;

var http = require( "http" );
var fs = require("fs");


// For full background of sop and cors read:
// https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS

// A cors implementation with more code explanations by Ben Nadel
// https://gist.github.com/bennadel/1790556

const server = http.createServer( (request, response) => {

  // console.dir(request);
  //console.dir(request.headers);

  let urlsplit = request.url.split("?");
  let path = urlsplit[0];

  if (request.method.toUpperCase() === "OPTIONS"){

    console.log("preflight request");

    // respond to browser asking (preflight request)
    // note that this request should not be visible to javascript,
    //        because SOP and the browser are here protecting
    //        the user from malicious client code.

    // some notes:
    // status 204 means "No Content" (here: security negotiation via headers)
    // origin is defined by triple (protocol, host, port);  "*" allows access from any origin
    // if not "*", but the origin of the client is allowed, than allow: request.headers.origin
    // also allow http-methods that the browser would otherwise reject js from using
    // also allow http-headers that the browser would otherwise reject js from using
    // also indicate in seconds how long the browser can cache this preflight data
    response.writeHead( "204", {
      "access-control-allow-origin": "*",
      "access-control-allow-methods": "GET, POST, PUT, DELETE, OPTIONS",
      "access-control-allow-headers": "content-type",
      "access-control-max-age": 10
    });
    response.end();

  } else if (path=== "/") {

    fs.readFile("index.html", function (err, content) {
      if (err) {
        console.dir(err);
      } else {
        response.writeHead(200, { "content-type": "text/html" });
        response.write(content);
      }
      response.end();
    });

  } else if(path === "/echo.html"){

    console.log("echo request");

    let received = {};
    received.url = request.url;
    received.body = {};

    let data = "";
    request.on("data", (chunk) => {
      data += chunk;
    });

    request.on("end",() => {

      // put response to echo back to client together
      if(data.length>0){
        received.body = JSON.parse(data);
      }
      let receivedText = JSON.stringify(received);

      // declare allowed origin in header again when responding (required for cors)
      response.writeHead( "200", {
        "access-control-allow-origin": "*",
        "content-type": "application/json",
        "content-length": receivedText.length
      });
      response.write(receivedText);
      response.end();
    });

  } else {
    response.writeHead(404,{"content-type":"text/html"} );
    response.write("Error: file not found");
    response.end();
  }

});

server.listen(port, host, () => {
  console.log("Server listening on "+host+":"+port);
});
