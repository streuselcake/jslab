// jshint esversion: 6
// jshint node: true
"use strict";

var http = require("http");
var host = "127.0.0.1";
var port = 3000;

var fs = require("fs");


const server = http.createServer( (request, response) => {

  //console.dir(request);
  console.dir(request.url);

  // note that this server responds to the path /index.html;
  //    but it does not respond to the path style.css
  //    when the browser renders the html page, which
  //    tries to load the embedded stylesheet.

  // defined route for "/index.html", and "/"
  if (request.url === "/index.html") {
    fs.readFile("index.html", (error, content) => {
      if (error) {
        response.writeHead(501,{"content-type":"text/html"} );
        response.write("error: " + JSON.stringify(error));
      } else {
        response.writeHead(200, { "content-type": "text/html" });
        response.write(content);
      }

      response.end();
    });

  } else {
    response.writeHead(404,{"content-type":"text/html"} );
    response.end("Error: file not found");
  }

});

server.listen(port, host, () => {
  console.log("Server listening on "+host+":"+port);
});
