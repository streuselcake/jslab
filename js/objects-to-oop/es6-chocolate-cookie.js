// jshint esversion: 6

class Es6BaseCookie {
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

class Es6ChocolateCookie extends Es6BaseCookie {
    constructor (chocop, n, c){
        super(n,c);
        this.choco = chocop;
    }
    bake() {
      console.log("baking special es6 choco cookie, overwriting es6 base cookie's bake() ... " +
                  this.name + " " + this.color + " / choco pieces: " + this.choco);
    }
}

var es6ChocoCookie = new Es6ChocolateCookie (10, "shortcrust-choco", "light/brown");

es6ChocoCookie.bake();

console.dir(es6ChocoCookie);
