

// is fair coin?
QUnit.test( "Coin Test in HTML (is fair coin?)", function( assert ) {

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


});
