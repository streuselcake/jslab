// jshint esversion: 6
// jshint node: true
"use strict";


// usage:
// $ npm init
// $ npm install express --save
// $ node . <path to your .mp4-file>
// -> open in browser: http://localhost:8000/

const express = require("express");


const app = express();
const port = 8000;

var fs = require("fs");


if(process.argv.length<3){
  throw new Error("server requires path to .mp4 file");
}
var filename = process.argv[2];

// server response is a file
app.get("/*", (req, res) => {

  // get file info (async)
  fs.stat (filename, (err, stat) => {

    if(err){
      throw err;
    }

    // pipe stream into server response; report on progress on console
    console.log ("Filesize: " + stat.size + " bytes");

    var progress = 0;
    var readstream = fs.createReadStream(filename);
    readstream.on("data", (chunk) => {
      progress = progress + chunk.length;
      console.log("Progress:"+ Math.round (100 * progress/stat.size)+"%");
    });

    res.set("content-length", stat.size);
    res.set("content-type","video/mp4");
    readstream.pipe(res);

  });

});

//var server =
app.listen(port, () => console.log("Example app listening on port " + port + "!"));
