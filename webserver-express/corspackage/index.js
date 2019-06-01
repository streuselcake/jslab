// jshint esversion: 6
// jshint node: true
"use strict";


// usage:
// $ npm init
// $ npm install --save express cors
// $ node .
// -> open in browser: http://localhost:3000/

const express = require("express");

const cors = require("cors");

const app = express();
const port = 6000;


// middleware for handling json request data
// https://expressjs.com/en/4x/api.html#express.json
app.use(express.json());


// middleware for handling urlencoded request data
// https://expressjs.com/en/4x/api.html#express.urlencoded
//app.use(express.urlencoded({ extended: false }));

// set cors headers for me... (including preflight on all routes!)
// https://expressjs.com/en/resources/middleware/cors.html
app.use(cors());

// alternatively enable pre-flight request for echo request only
// app.options("/echo.html", cors());
// app.post("/echo.html", cors(), function (req, res, next) {
//   next();
// });

// no deal for the echo route, can focus on getting our job done

app.post("/echo.html",  (req, res) => {

  // can echo now, middleware has set the header for us
  console.log("echo.html request");
  res.json(req.body);

});


//var server =
app.listen(port, () => console.log("Example app listening on port " + port + "!"));
