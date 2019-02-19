// jshint esversion: 6


// Example. Using a FileReader object
function loadFile(){
  "use strict";

  var file = document.getElementById("fileinput").files[0];

  var reader = new FileReader();

  reader.onload = function(event) {
    //console.dir(event);
    //console.log(reader.result);
    document.getElementById("content").innerHTML = reader.result;
  };

  reader.readAsText(file); // consider other arguments for this function too

  //console.dir(reader);
}
