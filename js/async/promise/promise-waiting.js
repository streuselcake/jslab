// jshint esversion: 6

// we attach a simple callback function to add some monitoring
var cbHandler = (id, v) => {
  console.log(id + ". long airtime coin is heads: " + v);
  document.getElementById("content").innerHTML += id + ". long airtime coin is heads: " + v + "<br />";
};

var r1 = promiseDoingSomething(0, cbHandler);
var r2 = promiseDoingSomething(1, cbHandler);
var r3 = promiseDoingSomething(2, cbHandler);
var r4 = promiseDoingSomething(3, cbHandler);


var p1 = () => promiseDoingSomething(4, cbHandler);
var p2 = () => promiseDoingSomething(5, cbHandler);
var p3 = () => promiseDoingSomething(6, cbHandler);
var p4 = () => promiseDoingSomething(7, cbHandler);

// pass promises to .all() to make it's .then() wait for the racing tasks to finish
Promise.all([r1, r2, r3, r4])
// .then(race_results => { // optionally then execute something inbetween
//   console.dir("race results: ");
//   console.dir(race_results);
// })
// pass a function to this() returning the previous promise in order to make the next promise wait for it
.then(p1)
.then(p2)
.then(p3)
.then(p4);

// try passing promises (instead of functions p1, ... 4) and see what happens
