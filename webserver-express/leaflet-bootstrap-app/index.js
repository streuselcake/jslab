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

app.use("/", express.static(__dirname + "/public"));

// this example demonstrates how to install client libraries (serverside) and how to make them available...

// 1. install client side modules using: $npm install leaflet jquery bootstrap popper.js
//    (alternatively download and copy packages manually)

// 2. make packages available for client using statics:
app.use("/leaflet", express.static(__dirname + "/node_modules/leaflet/dist"));
app.use('/jquery', express.static(__dirname + '/node_modules/jquery/dist'));
app.use('/bootstrap', express.static(__dirname + '/node_modules/bootstrap/dist'));
app.use('/popper', express.static(__dirname + '/node_modules/popper.js/dist'));

// 3. check out the index.html file to see how client-libraries are embedded...

app.listen(port, () => console.log("Example app listening on port " + port + "!"));
