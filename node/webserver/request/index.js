// jshint esversion: 6
// jshint node: true
"use strict";

var http = require("http");
var host = "127.0.0.1";
var port = 2002;

// An example item app for illustrating the basic approach

// TODO: decode (url encoded)
// TODO: decode body (url encoded)
// TODO: handle querystring and json requests
// TODO: parse and validate parameters
// TODO: various data operations on items
// TODO: use permanent storage (e.g. database)

var itemStorage = [{"name": "itemname", "description": "itemdescription"}];

const server = http.createServer( (request, response) => {

  //console.dir(request);
  console.dir(request.url);

  // request.url can contain request data. For example the get paraemters after the "?"-delimiter.
  let urlsplit = request.url.split("?");
  let isget = urlsplit.length>1;
  let path = urlsplit[0];
  let getparams = "";
  if (isget){
    console.log("GET "  + request.url + " -> " + path);
    getparams = urlsplit[1];
  } else {
    console.log("POST "  + request.url + " -> " + path);
  }


  // defined route for "/index.html", and "/"
  if (path === "/index.html" || path === "/index" || path === "/") {

    response.writeHead(200,{"content-type":"text/html"} );
    response.write("<h1>Items' home</h1>");
    response.write(JSON.stringify(itemStorage));
    response.end();

  } else if ((path === "/request.html" || path === "/request") && isget) {

    // GET request: data comes in the urlstring

    let received = getparams;
    console.log("GET: " + received);

    // based on the received data, we can provide a response
    //                      (respond with everything stored for demonstration)
    response.writeHead(200,{"content-type":"text/html"} );
    response.write("GET request processed: " + received + "<br />");
    response.write(JSON.stringify(itemStorage));

    response.end();

  } else if ((path === "/request.html" ||path === "/request") && !isget) {

    // POST request: data comes in the request-body
    // possibly in multiple chunks -> collect them
    let received = "";
    request.on("data", (chunk) => {
      received += chunk;
    });

    request.on("end",() => {

      itemStorage.push({received});

      // based on the received data, we can provide a response
      //                      (echo with received text for testing)
      response.writeHead( "200", {
        "content-type": "text/html"
      });
      response.write("POST request processed... <br />");
      response.write(received);
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
