// jshint esversion: 6

var hello = {};
hello.world = "hello world";

/* accessing properties and not defined properties is not subject to exceptions */

//console.log(hello.myWorld);
//console.log(hello.world);

try {

  //console.log(hello.myWorld);
  //console.log(hello.world);

  /* parsing json is subject to exceptions */
  //var helloJson = JSON.parse("{hello: 'world'}");
  var helloNoJson = JSON.parse("{hello: 'world'");



} catch(exception){
  console.dir(exception);

}



var helloNoJson = JSON.parse("{hello: 'world'");
