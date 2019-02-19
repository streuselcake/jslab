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

app.use(express.static("public"));

app.listen(port, () => console.log("Example app listening on port " + port + "!"));
