// jshint esversion: 6
// jshint node: true
"use strict";


// https://nodejs.org/dist/latest-v10.x/docs/api/cli.html

// usage:
// $ node arguments.js a b c d e ... "test" 1 2 3

console.dir(process.argv);

// They are just like a normal array, so they also have an index
// process.argv.forEach((val, index) => {
//   console.log(`${index}: ${val}`);
// });
