// jshint esversion: 6

var vInGlobal = "value";

function changeValue(vInF){
  "use strict";

  console.log("value of vInF in function scope before change: " + vInF);
  vInF="changed value";
  console.log("value of vInF in function scope after change: " + vInF);

}

console.log("value of vInGlobal in global scope before change: " + vInGlobal);
console.log("calling changeValue...");
changeValue(vInGlobal);
console.log("value of vInGlobal in global scope after change: " + vInGlobal);

var oInGlobal = {a:"a", b:"b"};

function changeObject(oInF){
  "use strict";

  console.log("object oInF in function scope before change: ");
  console.log(JSON.stringify(oInF));
  oInF.a = "c";
  console.log("object oInF in function scope after change: ");
  console.log(JSON.stringify(oInF));

}

console.log("object oInGlobal in global scope before change: ");
console.log(JSON.stringify(oInGlobal));
console.log("calling changeObject...");
changeObject(oInGlobal);
console.log("object oInGlobal in global scope after change: ");
console.log(JSON.stringify(oInGlobal));
