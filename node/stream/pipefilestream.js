// jshint esversion: 6
// jshint node: true
"use strict";

const fs = require('fs');

const file = fs.createReadStream('file.txt');
file.on('data', (chunk) => {
  console.log("chunk: " + chunk);
});
file.on('end', () => {
  console.log("end of stream!");
});
