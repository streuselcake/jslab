// jshint esversion: 6
// jshint node: true
"use strict";


// usage:
// $ npm init
// $ npm install --save express pug
// $ node .
// -> open in browser: http://localhost:3000/

// note the layout file embedding a stylesheet:
//        link(rel='stylesheet', href='/stylesheets/style.css')
// TODO: define route or static file and make accessible 

const express = require("express");


const app = express();
const port = 3000;

app.set("view engine", "pug");

app.get("/", function(req, res, next) {
  res.render("index", { title: "Homepage" });
});

app.get("/users", function(req, res, next) {
  res.render("users", { title: "Users" });
});

app.listen(port, () => console.log("Example app listening on port " + port + "!"));
