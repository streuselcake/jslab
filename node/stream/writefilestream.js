// jshint esversion: 6
// jshint node: true
"use strict";

const fs = require('fs');

const file = fs.createWriteStream('file.txt');
file.write("hello filestream! \n");
file.end();
