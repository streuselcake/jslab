// jshint esversion: 6
// jshint node: true
"use strict";


// usage:
// $ npm init
// $ npm install --save express serve-index
// $ cd ..
// $ cd ..
// $ node utils/publicjslab

// -> open in browser: http://localhost:3000/

const express = require("express");
var serveIndex = require("serve-index");
// const cors = require("cors");

const app = express();
const port = 3000;

// app.use(cors());

app.use(express.static("."));
app.use(express.static("."), serveIndex(".", {'icons': true}));

app.listen(port, () => console.log("Example app listening on port " + port + "!"));
