// jshint esversion: 6


function ConstructorFuncProtoCookie (n, c) {
  this.name = n;
  this.color = c;
}

ConstructorFuncProtoCookie.prototype = {
  bake : function() {
    console.log("baking constructor cookie with function in prototype... " + this.name + " " + this.color);
  }
};

var constructorFuncProtoCookie = new ConstructorFuncProtoCookie ("shortcrust", "light");

constructorFuncProtoCookie.bake();

console.dir(constructorFuncProtoCookie);
