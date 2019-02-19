// jshint esversion: 6

// see
// https://www.w3schools.com/js/js_window_location.asp

//document.onload = locateUser();

locateUser();

function locateUser() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition, showError);
  } else {
    document.getElementById("location_div").innerHTML = "Geolocation N/A...";
  }
}

function showPosition(position) {
  console.dir(position);
  document.getElementById("location_div").innerHTML =
              position.coords.latitude + ", " + position.coords.longitude;
}

function showError(error) {
  console.dir(error);
  document.getElementById("location_div").innerHTML = error.message;
}
