// jshint esversion: 6


function BaseCookie (n, c) {
  this.name = n;
  this.color = c;
}

BaseCookie.prototype = {
  bake : function() {
    console.log("baking constructor cookie with anonymous prototype... " + this.name + " " + this.color);
  }
};

function ChocolateCookie(proto, cho, n, c){
  this.prototype = proto;
  this.prototype.name = n;
  this.prototype.color = c;
  this.choco=cho;
  this.bake = function() {
    console.log("baking special choco cookie, overwriting prototypes's bake() ... " +
                this.prototype.name + " " + this.prototype.color + " / chco pieces: " + this.choco);
  };
}

var baseCookie = new BaseCookie("shortcrust", "light");
var chocoCookie = new ChocolateCookie (baseCookie, 10, "shortcrust-choco", "light/brown");

chocoCookie.bake();

console.dir(chocoCookie);
