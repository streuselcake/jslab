// jshint esversion: 6
// jshint node: true
"use strict";


// usage:
// $ npm init
// $ npm install express --save
// $ node .
// -> open in browser: http://localhost:3000/

const express = require("express");

const app = express();
const port = 3000;


// middlewares build up a stack of functions to run one after another

var iniMiddles = (req, res, next) => {
  console.log("iniMiddles");
  // things to ini and keep track of the request within many concurrent requests
  res.heads = "unknown";
  res.startTime = Date.now();
  res.finishTime =  Date.now();
  // prehaps use better id (this is for demo only)
  res.requestid = Math.round(Math.random()*100000000);
  next();
};

var finishMiddle = (req, res, next) => {
  console.log("finishMiddle");
  res.finishTime =  Date.now();
  next();
};

var startMiddle = (req, res, next) => {
  console.log("startMiddle");
  res.startTime = Date.now();
  next();
};

var responseMiddle = (req, res, next) => {
  console.log("responseMiddle");
  res.responseText = req.url + " / " +
                      "request id:" + res.requestid + " / " +
                      "is heads:" + res.heads + " / " +
                      "response time:" +  (res.finishTime - res.startTime);
  next();
};

var logMiddle = (req, res, next) => {
  console.log("logMiddle: " + res.responseText);
  next();
};


// helper function
function isHeadsThrowHigh(taskid, resolve){
  setTimeout( () => resolve(taskid, 0.5 >= Math.random()), Math.floor(Math.random() * (5000 - 2000)) + 2000);
}

// is heads throw high
var heavyMiddle = (req, res, next) => {

  console.log("heavyMiddle");

  isHeadsThrowHigh(req.requestid, (urid,isheads) => {
    res.heads=isheads;
    next();
  });

};

// stacking the "layers" up (in given order)
app.use(iniMiddles);
app.use(startMiddle);
app.use("/coin", heavyMiddle); // hooks in "/coin"-routes only
app.use(finishMiddle);
app.use(responseMiddle); // this middleware builds the response
app.use(logMiddle);

// respond to any get-route
app.get("/*", (req, res) => res.send(res.responseText));

app.listen(port, () => console.log("Example app listening on port " + port + "!"));
