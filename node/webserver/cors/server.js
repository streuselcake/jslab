// jshint esversion: 6
// jshint node: true
"use strict";


var http = require("http");
var host = "127.0.0.1";
var port = 8001;

var http = require( "http" );
var fs = require("fs");


const server = http.createServer( (request, response) => {

  // console.dir(request);
  //console.dir(request.headers);

  let urlsplit = request.url.split("?");
  let path = urlsplit[0];

  if (path=== "/") {

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

      response.writeHead( "200", {
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
