// jshint esversion: 6


window.onload = insertText;

function insertText(){
  "use strict";

  let text = "This is a text dynamically inserted into the div container that has the id \"dynamic_content\".";

  let p = document.createElement("p");
  p.id = "dynamic_content_p";

  //p.appendChild(document.createTextNode("test"));

  // adding html elements
  document.getElementById("dynamic_content").appendChild(p);

  // adding content
  //document.getElementById("dynamic_content_p").innerHTML = text;
  //p.innerHTML = text;
  document.getElementById("dynamic_content").childNodes[0].innerHTML = text;


  // adding event dynamically
  let p2 = document.getElementById("p2");
  p2.onclick = function () {
    changeClass(p2);
  };


}

function changeClass(element){
  "use strict";
  //console.log(id);
  //var element = document.getElementById(id);
  //console.dir(element);
  if(element.className === "classblue"){
    element.className = "classred";
  } else {
    element.className = "classblue";
  }
}
