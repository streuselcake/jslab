// jshint esversion: 6


//console.dir(token);

var resource = "https://api.darksky.net/forecast/"+token.DARKSKY_KEY+"/37.8267,-122.4233";

var x = new XMLHttpRequest();
x.onload = loadcallback;
x.onerror = errorcallback;
x.onreadystatechange = statechangecallback;
x.open("GET", resource, true);
x.send();




function statechangecallback() {
  //console.dir(x);
  if (x.status == "200" && x.readyState == 4) {
    //console.log(x.responseText);
    document.getElementById("content").innerHTML = x.responseText;
  }
}

function errorcallback(e) {
  // console.dir(x);
  // console.dir(e);
  document.getElementById("content").innerHTML = "errorcallback: check web-console";
}

function loadcallback() {
  //console.dir(x);
  console.log(x.status);
}
