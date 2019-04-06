// jshint esversion: 6

// $(document).ready( function() {

  // many jquery ajax methods:
  // https://www.w3schools.com/jquery/jquery_ref_ajax.asp


  var resource = "https://openmensa.org/api/v2/canteens?near[lat]=51.9606649&near[lng]=7.6261347&near[dist]=15";

  $.ajax({
    url: resource, // URL der Abfrage,
    data: {foo: "bar"},
    type: "GET"
  })
  .done (function( response) {
    $("#content").text(JSON.stringify(response,null,4));
  })
  .fail (function( xhr, status, errorThrown ) {
    // handle errors
  })
  .always (function( xhr, status ) {
    // completed ajax
  });




  // call via get or post (convenience functions with preset parameters)
  $.get( resource );                                          // ... do nothing
  //$.get( resource , { p1:"parameter 1", p2:"parameter 2" });  // ... and include parameters in the request

  $.get(resource, function(response, status, x){
    $("#content").text(JSON.stringify(response,null,4));
    // console.dir(response);
    // console.dir(status);
    // console.dir(x);
  });

  // load from resource and put into selected element
  //$("#content").load(resource);

  // can also use the callback with load...
  // $("#content").load(resource, function(response, status, x){
  //     console.dir(response);
  //     console.dir(status);
  //     console.dir(x);
  // });


// });
