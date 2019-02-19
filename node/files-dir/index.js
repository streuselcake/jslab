// jshint esversion: 6
// jshint node: true
"use strict";

var fs = require("fs");

// listing files in current folder using relative and absolute paths
//            compare output of the following two cases
//            note that the relative path refers to the parent current path,
//            i.e. to the path of the command line (set using the cd command)!

// case one (execute index.js from same folder):
// $ cd /examples/file-paths
// $ node index.js

// case two (execute index.js from parent folder):
// $ cd /examples
// $ node files-paths/index.js


// absolut path to where I am
console.log("abs path: " + __dirname);
console.log("files found: ");

fs.readdirSync(__dirname).forEach(file => {
  console.log(file);
});

console.log("");


// relative path to where I am
console.log("rel path \".\"" );
console.log("files found: ");

fs.readdirSync(".").forEach(file => {
  console.log(file);
});
