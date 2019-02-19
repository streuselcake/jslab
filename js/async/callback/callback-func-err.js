// jshint esversion: 6

// doing something and call back reslove when successful, reject when not; can also throw error 
function isHeadsThrowHigh(taskid, resolve, reject = () => console.log(taskid + ": called reject (not implemented)")){

  let time = Math.floor(Math.random() * (5000 - 2000)) + 2000; // random time between 2000 and 5000 to wait

  setTimeout( () => {
    // the result of a really hard calculation which took looong until the timer fired
    var hardproblem = 0.5 >= Math.random();

    // should I call resolve or reject? this is a simulation so we flip a coin
    if(Math.random() >= 0.5){
      resolve(taskid, hardproblem);
    } else {
      // two things may happen other than resolve...
      if(Math.random() >= 0.5){
        // if not resolve than reject
        reject(taskid, "coin failed");
      } else {
        // throwing errors is not uncommon
        throw new Error(taskid + ": coin lost");
      }
    }

  }, time);

}
