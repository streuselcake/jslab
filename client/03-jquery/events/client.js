// jshint esversion: 6

// instead of window.onload = insertText;
$(document).ready( function() {
  "use strict";

  let text = "This is a text dynamically inserted into the div container that has the id \"dynamic_content\".";
  $("#dynamic_content").append("<p id=\"dynamic_content_p\">"+text+"</p>");

  $("#p2").click(function (){
    $("#p2").toggleClass("classred classblue");
  });

});

function changeClass(element){
  "use strict";
  //console.log($(element).parent().html());
  $(element).toggleClass("classred classblue");
}
