// jshint esversion: 6
// jshint node: true
"use strict";


// This program reads from stdin and does something with the input before outputting it again

// usage:
// $ node stdin-tuo.js
// your text
// ctrl+d

// we can now use program pipes:
// $ echo "hello std stdout echo" | node stdin-tuo
// $ node tostdout.js "hello stdout node echo" | node stdin-tuo
// $ cat stdin-tuo.js | node stdin-tuo

// and always file pipes:
// $ echo out > out.txt
// $ node tostdout out > out.txt
// $ node tostdout out | node stdin-tuo > tuo.txt


process.stdin.setEncoding("utf8");

var data = "";

process.stdin.on("data", function(chunk) {

  if (chunk !== null) {
    data += chunk;
  }

});

process.stdin.on("end", function() {
  // Credits to Sonya Moisset for reversing string reverse
  //https://medium.freecodecamp.org/how-to-reverse-a-string-in-javascript-in-3-different-ways-75e4763c68cb
  console.log(data.split("").reverse().join(""));
});
