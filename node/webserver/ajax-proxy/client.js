// jshint esversion: 6

var resource = "weather.json";


$.get(resource, function(response, status, x){
  let formatted_response = JSON.stringify(response,null,4);
  $("#weather-info").text(formatted_response);

});
