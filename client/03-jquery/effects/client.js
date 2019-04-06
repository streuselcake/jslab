// jshint esversion: 6

$("#references").hide();

// $('#content').hide();// arg: effect length in ms
// $('#content').fadeIn(1000);
// $('#content').delay(1000);
// $('#content').fadeOut(1000);
// $('#content').delay(1000);
// $('#content').fadeIn(1000);
// $('#content').slideUp(1000);
// $('#content').slideDown(1000);

$('#content').hide()// arg: effect length in ms
.fadeIn(1000)
.delay(1000)
.fadeOut(1000)
.delay(1000)
.fadeIn(1000)
.slideUp(1000)
.slideDown(1000)


.delay(1000, () => {
  $('#references').show();
});
