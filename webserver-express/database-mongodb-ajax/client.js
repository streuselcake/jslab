// jshint esversion: 6

// $(document).ready( function() {

  // many jquery ajax methods:
  // https://www.w3schools.com/jquery/jquery_ref_ajax.asp


  var resource = "/api/";

  $.ajax({
    url: resource, // URL der Abfrage,
    //data: {foo: "bar"},
    type: "GET"
  })
  .done (function( response) {
    // parse + use data here
    $("#content").text(JSON.stringify(response,null,4));
  })
  .fail (function( xhr, status, errorThrown ) {
    // handle errors
  })
  .always (function( xhr, status ) {
    // completed ajax
  });
