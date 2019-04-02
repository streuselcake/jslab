// jshint esversion: 6


function ConstructorCookie (n, c) {
  this.name = n;
  this.color = c;
  this.bake = function() {
    console.log("baking constructor cookie... " + this.name + " " + this.color);
  };
}

var constructorCookie = new ConstructorCookie ("shortcrust", "light");

constructorCookie.bake();

console.dir(constructorCookie);
