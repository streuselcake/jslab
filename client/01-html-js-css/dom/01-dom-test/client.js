// jshint esversion: 6

// we can use window.document; or short document...


var text = "This is a text dynamically inserted into the div container that has the id \"dynamic_content\".";

// constructing html
var text_node = document.createTextNode(text);
var p = document.createElement("p");
p.id = "dynamic_content_p";
p.appendChild(text_node);

// finding an element from the document dom
// document.getElementById("dynamic_content") returns div container
var div = document.getElementById("dynamic_content");

// append element in dom element
div.appendChild(p);

// alternative ways of placing text in p
//p.innerHTML = text;
//document.getElementById("dynamic_content").childNodes[0].innerHTML = text;
//document.getElementById("dynamic_content_p").innerHTML = text;
