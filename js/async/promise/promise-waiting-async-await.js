// jshint esversion: 8

// we attach a simple callback function to add some monitoring
var cbHandler = (id, v) => {
  console.log(id + ". long airtime coin is heads: " + v);
  document.getElementById("content").innerHTML += id + ". long airtime coin is heads: " + v + "<br />";
};


// we declare functions async and await them at appropriate points in the code.
// Because await is only possible inside an async block,
// we need to declare and execute an async function surrounding our promise-code.
// here is a self-invoking async function:
//                 (async ()=> {/* async code here */})();
// now we make it surround the code we want to organize with async/await

(async ()=> {

  var r1 = promiseDoingSomething(0, cbHandler);
  var r2 = promiseDoingSomething(1, cbHandler);
  var r3 = promiseDoingSomething(2, cbHandler);
  var r4 = promiseDoingSomething(3, cbHandler);

  await r1;
  await r2;
  await r3;
  await r4;

  var p1 = promiseDoingSomething(4, cbHandler);
  await p1;

  var p2 = promiseDoingSomething(5, cbHandler);
  await p2;

  var p3 = promiseDoingSomething(6, cbHandler);
  await p3;

  var p4 = promiseDoingSomething(7, cbHandler);
  await p4;


})();
