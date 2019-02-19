// jshint esversion: 6

// note that the following are only some very basic examples
// a good reference for more advanced selectors: https://www.w3schools.com/jquery/jquery_ref_selectors.asp

var text = "This is a paragraph dynamically inserted into the div container that has the id \"dynamic_content\".";

// constructing html and/or using normal dom-methods...
var p = document.createElement("p");
p.id = "dynamic_content_p";
p.appendChild(document.createTextNode(text));
document.getElementById("dynamic_content").appendChild(p);


// constructing html with jquery:
// $(selector) .append(), .prepend(), .after(), and .before(); instead of document.getElementById("dynamic_content").appendChild(p);

$("#dynamic_content").append(p);

$("#dynamic_content").append("<p id=\"dynamic_content_p2\"></p>");
$("#dynamic_content_p2").text(text);

$("#dynamic_content").append("<p id=\"dynamic_content_p3\">"+text+"</p>");
$("#dynamic_content_p2").after("<p id=\"dynamic_content_p4\">paragraph added after p2.</p>");


// changing elements
$("#dynamic_content_p").text("set text in p1.");
$("#dynamic_content_p2").html("<b>set html in p2.<b>");
$("#dynamic_content_p3").text("<b>set html in p3 using .text() and it didn't work.<b>");

// inspecting the html
console.log($("#dynamic_content_p").text());
console.log($("#dynamic_content").text());
console.log($("#dynamic_content").html());
