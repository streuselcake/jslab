// usage:
// $ npm init
// $ npm install --save mocha

// run tests from test-folder via:
// $ ./node_modules/mocha/bin/mocha

// see: https://mochajs.org/
// see: https://www.w3schools.com/nodejs/ref_assert.asp

var assert = require("assert");

var coinlib = require("../../../../js/oop/Coin.js");

var Coin = coinlib.Coin;

// Test suite for the Coin class
describe("Coin Tests via Mocha", function() {


	it("tests if is fair coin", function(done) {

		var lim = 1000;     // coin throws
	  var delta = 0.01;   // allowed delta margin for accepting coin in percent
	  var headscount = 0; // number of times the coin returned head

	  var c1 = new Coin(1);
	  c1.observe = true;

	  var results = [];

	  for(var i=0; i<lim; ++i){
	    headscount += c1.isHeads() ? 1 : 0;
	  }

	  console.log("headscount: ", headscount);
	  console.log("lower bound: lim/2.0 - delta*lim", lim/2.0 - delta*lim);
	  console.log("upper bound: lim/2.0 + delta*lim", lim/2.0 + delta*lim);

		assert.ok(lim/2.0 - delta*lim < headscount, "not too few heads...");
	  assert.ok(lim/2.0 + delta*lim > headscount, "not too many heads...");

		done();
	});

});
