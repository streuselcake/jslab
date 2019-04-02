// jshint esversion: 6


var literalCookie = {
  name : "shortcrust",
  color : "light",
  bake : function() {
    console.log("baking literal cookie... " + this.name + " " + this.color);
  }
};

literalCookie.bake();

console.dir(literalCookie);


// Alternatively construct object step by step

// var propertiesCookie = { };
// propertiesCookie.name = "shortcrust";
// propertiesCookie.color = "light";
//
// propertiesCookie.bake = function() {
//   console.log("baking properties cookie... " + this.name + " " + this.color);
// };
//
// propertiesCookie.bake();
//
// console.dir(propertiesCookie);
