// jshint esversion: 6
// jshint node: true
"use strict";



// require installed modules
require("fs");

// require javascript modules from same folder
require("./code.js");

// we note that the first require("./code.js") cached the result and
//                the later require("./code.js") thus does NOT execute code.js again
require("./code.js");
require("./code.js");
require("./code.js");
require("./code.js");
require("./code.js");

// we can also discard the file extension
require("./more");

// can also require json (because it's a subset of js)
console.dir(require("./package"));


// Excursus: One perhaps remembers: when not using line breaks (which in js need escape sequences),
//                                                        then, json is a subset of js.

// Wait, I can require js; does that mean I can simply put json data into a js file?
console.dir(require("./data.json"));
// errrr, ... yes, but, two things...
// 1. require() looks at the file extension to figure out what's in and then starts interpreting it...
// 2. use the 'exports' variable in data.js to tell the engine what js to allow to go out...
//                                          ... and get the exported values via require's return here.
console.dir(require("./data.js").o);
