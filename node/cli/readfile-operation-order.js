// jshint esversion: 6
// jshint node: true
"use strict";

var fs = require("fs");

console.log("start code");

var data = "";
fs.readFile("file.txt", "utf-8",
                 (err, data) => {
  if (!err) {
    console.log(data);
  }
});

console.log("end code");
