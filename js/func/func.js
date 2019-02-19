// jshint esversion: 6

/* returns true for heads */
function isHeads(chance=0.5){
  var rand = Math.random();
  //console.log(rand);
  // note random returns r in [0.5, 1), therefore >=
  return chance >= rand;

}

/* returns [heads, tails] */
function flipCoin(heads_chance=0.5){
  var heads = isHeads(heads_chance);
  var tails = !heads;
  return [heads, tails];
}

/* returns [heads, tails] based on given coin-side-count-model */
function flipObservedCoin(heads_count, tails_count){
    var sum_count = heads_count + tails_count;
    var heads_chance = heads_count / sum_count;
    //console.log(heads_chance);
    //var normalized_tails_chance = tails_count / sum_count;
    return flipCoin(heads_chance);
}



// note the default parameter chance=0.5


// another parameter-trick:
// define function as function isHeads(){}', but then call isHeads(a, b, c, d, e);
// inside the function, we can access unspecified parameters via the arguments[i]


// also note alternative notations...

// ... assigning an anonymous function as a reference
// var isHeads = function (chance){...};

// ... the arrow function '=>':
// var isHeads = (chance=0.5) => {};


// also note the following uses of functions...
// ... anonymous functions (the right hand side of the assigning expression)
//              ... can pass to a function,
//              ...  executed directly
// function (chance=0.5){return Math.random() >= chance;}
// ... self-invoking function
//              ... sometimes useful with annonymous functions
// (function (chance=0.5){return Math.random() >= chance;})();
// ((chance=0.5) => {return Math.random() >= chance;})();
