// jshint esversion: 6


var lat = 51.969431;
var long = 7.595707;

var resource = "https://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+long+"&appid="+token.OPENWEATHERMAP_TOKEN;

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
    document.getElementById("content").innerHTML = x.responseText +  JSON.stringify(JSON.parse(x.responseText),null,4);
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
