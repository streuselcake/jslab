// jshint esversion: 6
// jshint node: true
"use strict";

var http = require("http");
var host = "127.0.0.1";
var port = 3000;
var fs = require("fs");


const server = http.createServer( (req, res) => {

  // request.url can contain request data. For example the get paraemters after the "?"-delimiter.
  let urlsplit = req.url.split("?");
  let path = urlsplit[0];
  let getparams = urlsplit[1];

  if(path==="/form.html"){
    fs.readFile("form.html", (error, content) => {
      if (error) {
        res.writeHead(501,{"content-type":"text/html"} );
        res.write("error: " + JSON.stringify(error));
      } else {
        res.writeHead(200, { "content-type": "text/html" });
        res.write(content);
      }

      res.end();
    });
  } else if(path==="/ajax.html"){
    fs.readFile("ajax.html", (error, content) => {
      if (error) {
        res.writeHead(501,{"content-type":"text/html"} );
        res.write("error: " + JSON.stringify(error));
      } else {
        res.writeHead(200, { "content-type": "text/html" });
        res.write(content);
      }

      res.end();
    });

  } else {

    // POST parameters: data comes in the request-body
    // possibly in multiple chunks -> collect them
    let received = "";
    req.on("data", (chunk) => {
      received += chunk;
    });

    req.on("end",() => {

      res.writeHead(200,{"content-type":"text/html"} );
      //console.dir(req);
      res.write("url: " + req.url + "<br />\n");
      res.write("get: " + getparams + "<br />\n");
      res.write("post: " + received);
      res.end();

      console.log("url: " + req.url);
      console.log("get: " + getparams);
      console.log("post: " + received);
      console.log("");

    });

  }

});

server.listen(port, host, () => {
  console.log("Server listening on "+host+":"+port);
});
