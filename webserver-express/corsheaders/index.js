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
const port = 6000;


// middleware for handling json request data
// https://expressjs.com/en/4x/api.html#express.json
app.use(express.json());


// middleware for handling urlencoded request data
// https://expressjs.com/en/4x/api.html#express.urlencoded
//app.use(express.urlencoded({ extended: false }));

// declare allowed origin in header
//    always: for preflight, and again when responding to cors request
app.use((req, res, next) => {
  res.set("access-control-allow-origin", "*");
  next();
});


app.options("*", (req, res) => {

  console.log("preflight request");

  // respond to browser asking (preflight request)
  // note that this request should not be visible to javascript,
  //        because SOP and the browser are here protecting
  //        the user from malicious client code.

  // some notes:
  // status 204 means "No Content" (here: security negotiation via headers)
  // origin is defined by triple (protocol, host, port);  "*" allows access from any origin
  // if not "*", but the origin of the client is allowed, than allow: request.headers.origin
  // also allow http-methods that the browser would otherwise reject js from using
  // also allow http-headers that the browser would otherwise reject js from using
  // also indicate in seconds how long the browser can cache this preflight data

  res.set({"access-control-allow-methods": "GET, POST, PUT, DELETE, OPTIONS",
            "access-control-allow-headers": "content-type",
            "access-control-max-age": 10
          });
  res.status(204).end();


});

// nicely organized now, we don't need to worry about cors when programming our app's functions
app.post("/echo.html",  (req, res) => {

  // can echo now, middleware has set the header for us
  //            before this route handler jumps in
  console.log("echo.html request");
  res.json(req.body);

});


//var server =
app.listen(port, () => console.log("Example app listening on port " + port + "!"));
