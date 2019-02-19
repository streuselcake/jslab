// jshint esversion: 6
// jshint node: true
"use strict";


// usage:
// $ npm init
// $ npm install --save express morgan
// $ node .
// -> open in browser: http://localhost:3000/

const express = require("express");

// using morgan for logging requests
var logger = require("morgan");


const app = express();
const port = 3000;

// logger middleware: instance of morgan
// "dev" is a preconfigured talkative output for development stages
// see: https://www.npmjs.com/package/morgan
app.use(logger("dev"));


app.get("*", (req, res) => {
  res.send(req.url);
});

//var server =
app.listen(port, () => console.log("Example app listening on port " + port + "!"));
