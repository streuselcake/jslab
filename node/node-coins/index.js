// jshint esversion: 6
// jshint node: true
"use strict";


var C = require(__dirname + "../../Coin.js");

var Coin = C.Coin;
var LongFlyingCoin = C.LongFlyingCoin;

var c1 = new Coin(1);
c1.observe = true;

console.log( "Heads: " + c1.isHeads());
console.log( "Heads: " + c1.isHeads());
console.log( "Heads: " + c1.isHeads());
console.log( "Heads: " + c1.isHeads());
console.log( "Heads: " + c1.isHeads());
console.log( "Heads: " + c1.isHeads());
console.log( "Heads: " + c1.isHeads());

c1.tailsCount = 0;
c1.headsCount = 1;

console.log( "Heads: " + c1.isHeads());

var c2 = new LongFlyingCoin(2);
c2.isHeadsThrowHigh(1, (id,v) => console.log( id + ". long flying coin is heads: " + v ));


// alternative use of the exports variable ...
// var Coin = require("./Coin.js").Coin;
// var Coin = require("./Coin.js").LongFlyingCoin;
// var c1 = new Coin(1);
// var c2 = new LongFlyingCoin(1);

// another alternative use (perhaps the most practiced one) ...
// var C = require("./Coin.js");
// var c1 = new C.Coin(1);
// var c2 = new C.LongFlyingCoin(1);
