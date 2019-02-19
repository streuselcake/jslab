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

// local variable of the application persistent as long as the app lives
// http://expressjs.com/de/api.html#app.locals
app.locals.title = "Hello World!";

//console.dir(app.locals);

app.get("/", (req, res) => {

  // some things to check out...
  //console.dir(req);
  //console.dir(res);
  //console.dir(req.req.headers);
  console.dir(req.url);

  // server sends response to client who sent the request
  res.send(app.locals.title);
});

//var server =
app.listen(port, () => console.log("Example app listening on port " + port + "!"));
