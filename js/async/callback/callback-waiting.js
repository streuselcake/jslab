// jshint esversion: 6


var pending = 4;

function cbRaceHandler(id, v){

  console.log(id + ". long airtime coin is heads: " + v);
  document.getElementById("content").innerHTML += id + ". long flying coin is heads: " + v + "<br />";

  // in case we need to know how many pending tasks we have...
  --pending;
  console.log("flying coins: " + pending);
  document.getElementById("content").innerHTML += "flying coins: " + pending+ "<br />";

  if(pending === 0){

    // the next four wait for each other
    isHeadsThrowHigh(4, (id, v) => {
      console.log(id + ". long airtime coin is heads: " + v);
      document.getElementById("content").innerHTML += id + ". long airtime coin is heads: " + v + "<br />";
      isHeadsThrowHigh(5, (id, v) => {
        console.log(id + ". long airtime coin is heads: " + v);
        document.getElementById("content").innerHTML += id + ". long airtime coin is heads: " + v + "<br />";
        isHeadsThrowHigh(6, (id, v) => {
          console.log(id + ". long airtime coin is heads: " + v);
          document.getElementById("content").innerHTML += id + ". long airtime coin is heads: " + v + "<br />";
          isHeadsThrowHigh(7, (id, v) => {
            console.log(id + ". long airtime coin is heads: " + v);
            document.getElementById("content").innerHTML += id + ". long airtime coin is heads: " + v + "<br />";
            // done
          });
        });
      });
    });
  }
}


isHeadsThrowHigh(0, cbRaceHandler);
isHeadsThrowHigh(1, cbRaceHandler);
isHeadsThrowHigh(2, cbRaceHandler);
isHeadsThrowHigh(3, cbRaceHandler);
