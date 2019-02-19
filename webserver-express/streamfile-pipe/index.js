// jshint esversion: 6
// jshint node: true
"use strict";


// usage:
// $ npm init
// $ npm install express --save
// -> start streamfile-example server port 8000
// ... then:
// $ node . http://localhost:8000
// -> open in browser: http://localhost:8001

const express = require("express");

const app = express();
const port = 8001;

var http = require("http");

if(process.argv.length<3){
  throw new Error("server requires url to .mp4 file");
}
var fileurl = process.argv[2];


// server response is a file
app.get("/*", (req, res) => {

  // request url and stream into server response

  //res.writeHead(200, {"Content-Length": stat.size, "content-type":"video/mp4"});
  res.set("content-type","video/mp4");

  http.get(fileurl, (fileres) => {
    fileres.pipe(res);
  });

});

//var server =
app.listen(port, () => console.log("Example app listening on port " + port + "!"));
