// jshint esversion: 6

// doing something and call back 'resolve' 
function isHeadsThrowHigh(taskid, resolve){

  let time = Math.floor(Math.random() * (5000 - 2000)) + 2000; // random time between 2000 and 5000 to wait

  setTimeout( () => {
    // the result of a really hard calculation which took looong until the timer fired
    var hardproblem = 0.5 >= Math.random();

    resolve(taskid, hardproblem);

  }, time);

}
