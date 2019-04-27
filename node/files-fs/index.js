// jshint esversion: 6
// jshint node: true
"use strict";

// see https://nodejs.org/api/fs.html

var fs = require("fs");

const filename = "data.json";
const filename2 = "datawrite.json";
const nofilename = "nofile.txt";

// we will read and write with data and data2
var data;
var data2;


// file exists only synchronously (see docs)
if (fs.existsSync(filename)) {
  console.log("File " + filename + " found...");
} else {
  console.error("File " + filename + " does not exist");
}

if (fs.existsSync(nofilename)) {
  console.log("File " + nofilename + " found...");
} else {
  console.error("File " + nofilename + " does not exist");
}

// more info about file
// fs.stat()


// write file... (note async!)

data2 = {
  "color": "yellow",
  "size": 1,
  "type": "B"
};

// write file
const writedata = JSON.stringify(data2);
fs.writeFile(filename2, writedata, (err) => {
  if (err) {
    console.error(err);
  } else{
    console.log("Stored in " + filename2 + ": " + writedata);
  }
});




// checking using fs.access(path) or existsSync(path) before reading or writing is
//                      possible but error handling is recommended instead:
// https://nodejs.org/dist/latest-v10.x/docs/api/fs.html#fs_fs_access_path_mode_callback

// read file... (note async!)

const options = "utf8"; // look up possible options if needed
fs.readFile(filename, options, (err, data) => {
  if (err) {
    console.error(err);
  } else{
    // can output the text (if encoding declared in the options)
    console.log(data);
    // knowing it's json => can parse it
    console.dir(JSON.parse(data));
  }
  // delete file (note async!)

});


// read file sync (use with care in node!)
// fs.readFileSync()

// write file sync (use with care in node!)
// fs.writeFileSync()...

// delete file sync (use with care in node!)
// fs.
