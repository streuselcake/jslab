// jshint esversion: 6
// jshint node: true
"use strict";

const fs = require('fs');

const file = fs.createReadStream('file.txt');

file.pipe(process.stdout);
