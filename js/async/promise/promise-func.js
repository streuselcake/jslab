// jshint esversion: 6

/* promise doing something async*/
function promiseDoingSomething(taskid, cb){
  return new Promise((resolve, reject) => {

    let time = Math.floor(Math.random() * (5000 - 2000)) + 2000; // random time between 2000 and 5000 to wait

    setTimeout( () => {
      // the result of a really hard calculation which took looong until the timer fired
      var hardproblem = 0.5 >= Math.random();

      cb(taskid, hardproblem);

      // passing to the promise user (perhaps another promise)...
      resolve(taskid, hardproblem);

      // note: we don't use reject in this example
      // rejecting means that calling .then() on the returned promise takes no effect

    }, time);

  });
}
