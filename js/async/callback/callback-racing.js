// jshint esversion: 6


var pending = 4;

function cbRaceHandler(id, v){

  console.log(id + ". long airtime coin is heads: " + v);
  document.getElementById("content").innerHTML += id + ". long flying coin is heads: " + v + "<br />";

  // in case we need to know how many pending tasks we have...
  --pending;
  console.log("flying coins: " + pending);
  document.getElementById("content").innerHTML += "airtime coins: " + pending+ "<br />";

}


isHeadsThrowHigh(0, cbRaceHandler);
isHeadsThrowHigh(1, cbRaceHandler);
isHeadsThrowHigh(2, cbRaceHandler);
isHeadsThrowHigh(3, cbRaceHandler);
