// jshint esversion: 6
// jshint node: true
"use strict";


// usage:
// $ node . <path to your .mp4-file>
// -> open in browser: http://localhost:8000/

var http = require("http");
var fs = require("fs");

var host = "localhost";
var port = "8000";


if(process.argv.length<3){
  throw new Error("server requires path to .mp4 file");
}
var filename = process.argv[2];

const server = http.createServer( (req, res) => {


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

    res.writeHead(200, {"content-length": stat.size, "content-type":"video/mp4"});
    readstream.pipe(res);

  });


});

server.listen(port, host, () => {
  console.log("Server listening on "+host+":"+port);
});
