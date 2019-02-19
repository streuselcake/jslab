// jshint esversion: 6
// jshint node: true
"use strict";


// usage:
// -> start streamfile-example server port 8000
// ... then:
// $ node . http://localhost:8000
// -> open in browser: http://localhost:8001

var http = require("http");
var fs = require("fs");

var host = "localhost";
var port = "8001";


if(process.argv.length<3){
  throw new Error("server requires url to .mp4 file");
}
var fileurl = process.argv[2];


const server = http.createServer( (req, res) => {

  // request url and stream into server response

  //res.writeHead(200, {"Content-Length": stat.size, "content-type":"video/mp4"});
  res.writeHead(200, {"content-type":"video/mp4"});

  http.get(fileurl, (fileres) => {
    fileres.pipe(res);
  });

});

server.listen(port, host, () => {
  console.log("Server listening on "+host+":"+port);
});
