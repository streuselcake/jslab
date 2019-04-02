// jshint esversion: 6

class Es6Cookie {
  // the class body is subject to strict mode

  constructor (n, c){
    // properties are defined via this in the class functions
    this.name = n;
    this.color = c;
  }

  bake() {
    console.log("baking ES6 (class like) cookie... " + this.name + " " + this.color);
  }

}


var es6Cookie = new Es6Cookie ("shortcrust", "light");

es6Cookie.bake();

console.dir(es6Cookie);
