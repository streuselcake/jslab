// jshint esversion: 6

var resource = "https://places.demo.api.here.com/places/v1/discover/explore?" +
    "at=52.31196,7.6718&" +
    "cat=sights-museums&" +
    "app_id="+token.HERE_APP+"&" +
    "app_code="+token.HERE_CODE;

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
