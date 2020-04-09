// jshint esversion: 6

var vInGlobal = "value";

function changeValue(vInF){
  "use strict";

  console.log("value in function scope before change: " + vInF);
  vInF="changed value";
  console.log("value in function scope after change: " + vInF);

}

console.log("value in global scope before change: " + vInGlobal);
console.log("calling changeValue...");
changeValue(vInGlobal);
console.log("value in global scope after change: " + vInGlobal);

var oInGlobal = {a:"a", b:"b"};

function changeObject(oInF){
  "use strict";

  console.log("object o in function scope before change: ");
  console.dir(oInF);
  oInF.a = "c";
  console.log("object o in function scope after change: ");
  console.dir(oInF);

}

console.log("object o in global scope before change: ");
console.dir(oInGlobal);
console.log("calling changeObject...");
changeObject(oInGlobal);
console.log("object o in global scope after change: ");
console.dir(oInGlobal);
