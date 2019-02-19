// jshint esversion: 6
// jshint node: true
"use strict";


// usage:
// $ npm init
// $ npm install express --save
// $ node .
// -> open in browser: http://localhost:3000/


// TODO use real storage (e.g. files or database)
// TODO validate request data before using/storing
// TODO support parameters from the different possible options (req.params, req.query, req.body)
// TODO full html pages
// TODO html representation of items

const express = require("express");

const app = express();
const port = 3000;

// middleware for handling json request data
// https://expressjs.com/en/4x/api.html#express.json
//app.use(express.json());

// middleware for handling urlencoded request data
// https://expressjs.com/en/4x/api.html#express.urlencoded
app.use(express.urlencoded({ extended: false }));


// middleware for handling json request data
// https://expressjs.com/en/4x/api.html#express.json
// app.use(express.json());

// static website
var website = '<a href="/">home</a> | <a href="/form">form</a><br /><br />';

// item storage with items that have unique names
var itemStorage = [];

// routehandler for get, post, put, and delete / using querystring via req.query

var getitemcontroller = function(req, res) {
  let item = itemStorage.find(item => item.name===req.query.name);
  res.send(website + JSON.stringify(item));
};

var postitemcontroller = function(req, res) {
  let found = false;
  for( let i = 0; i < itemStorage.length; ++i ){
    if (itemStorage[i].name === req.body.name) {
      // item exists?
      found=true;
      res.send(website + "eror: item " + req.body.name + " is already in storage, use PUT to update");
    }
  }
  // create
  if(!found){
    itemStorage.push(req.body);
    res.send(website + JSON.stringify(req.body));
  }
};

var putitemcontroller = function (req, res) {
  let found = false;
  for( let i = 0; i < itemStorage.length; ++i ){
    if (itemStorage[i].name === req.body.name) {
      itemStorage.splice(i, 1, req.body);
      found=true;
      res.send(website + JSON.stringify(req.body));
    }
  }
  // item updated?
  if(!found){
    res.send(website + "error: item not found: " + req.body.name);
  }
};

var deleteitemcontroller = function(req, res) {
  let found = false;
  for( let i = 0; i < itemStorage.length; ++i ){
    if (itemStorage[i].name === req.query.name) {
      itemStorage.splice(i, 1);
      found=true;
      res.send(website + "deleted: " + req.query.name);
    }
  }
  // item deleted?
  if(!found){
    res.send(website + "error: item not found: " + req.query.name);
  }
};


// http routes for html webapp

app.get("/", (req, res) => {
  res.send(website + JSON.stringify(itemStorage));
});

app.get("/form", (req, res) => {
  res.sendFile(__dirname + "/form.html");
});

app.get("/item", getitemcontroller);

app.post("/item/create", postitemcontroller);

app.post("/item/update", putitemcontroller);

app.get("/item/delete", deleteitemcontroller);



var server = app.listen(port, () => console.log("Example app listening on port " + port + "!"));
