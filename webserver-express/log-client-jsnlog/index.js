// jshint esversion: 6
// jshint node: true
"use strict";


// usage:
// $ npm init
// $ npm install --save express jsnlog jsnlog-nodejs
// $ node .
// -> open in browser: http://localhost:3000/

const express = require("express");


const app = express();
const port = 3000;

var JL = require("jsnlog").JL;
var jsnlog_nodejs = require("jsnlog-nodejs").jsnlog_nodejs;

// A console appender
var cla = JL.createConsoleAppender("ServerConsoleAppender");
JL("ServerConsole").setOptions({"appenders": [cla]});
JL("ServerConsole").info("a startup message by ServerConsole");

app.use(express.static("public"));

// the client side logger installed via command:
// $ npm install jsnlog --save
app.get("/jsnlog.js", (req, res) => {
  res.set("content-type", 'application/javascript');
  res.sendFile(__dirname + "/node_modules/jsnlog/jsnlog.js");
});
// minified version
app.get("/jsnlog.min.js", (req, res) => {
  res.set("content-type", 'application/javascript');
  res.sendFile(__dirname + "/node_modules/jsnlog/jsnlog.min.js");
});

// jsnlog.js on the client by default sends log messages to jsnlog.logger, using POST.
app.post("*.logger", (req, res) => {

  let received = "";
  req.on("data", (chunk) => {
    received += chunk;
  });

  req.on("end",() => {

    // handing client side jsnlog-msg over to server side jsnlog
    jsnlog_nodejs(JL, JSON.parse(received));

    // Send empty response. This is ok, because client side jsnlog does not use response from server.
    res.send("");
  });

});

app.listen(port, () => console.log("Example app listening on port " + port + "!"));
