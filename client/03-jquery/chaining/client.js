// jshint esversion: 6

$("#references").hide();

// $('#content').hide()
// .fadeIn(1000)
// .delay(1000)
// .fadeOut(1000)
// .delay(1000)
// .fadeIn(1000);


var resource = "https://openmensa.org/api/v2/canteens?near[lat]=51.9606649&near[lng]=7.6261347&near[dist]=15";

$('#content')
.fadeOut(2000)
.fadeIn(2000)
.load(resource)  // async call, does not chain!


.delay(1000, () => {
  $('#references').show();

});
