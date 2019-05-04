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

  let path = "." + request.url;

  // type by file extension so that html and css are named and
  //                                  the browser knows what to do with them
  let s = path.split(".");

  // TODO check if path is in public folder;
  //      security issues if client can query any file...

  // has a filename...
  if (s.length>=1){
    let type = "text/plain";

    // file has .extension that determines type
    if (s.length>=2){
      type = s[s.length-1];
      if (type==="js"){
        type = "application/javascript";
      } if (type==="json"){
        type = "application/"+type;
      } else if(type==="html" || type==="css"){
        type = "text/" + type;
      }
    }

    fs.readFile("." + request.url, (error, content) => {
      if (error) {
        // TODO check if erros can still throw up and kill server...
        response.writeHead(501,{"content-type":"text/html"} );
        response.write("error: " + JSON.stringify(error));
      } else {
        response.writeHead(200, { "content-type": type });
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
