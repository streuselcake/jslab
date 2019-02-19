// jshint esversion: 6


// hack to make "exports" available in the browser as globals
if(typeof exports == "undefined"){
  var exports = window;
}

// tokens tokens tokens...
exports.token = {
  wrld_token: "token",
  cesium_token: "token",
  STRAVA_ACCESS_TOKEN: "token",
  LOCATIONIQ_TOKEN: "token",
  MAPBOX_TOKEN: "token",
  OPENWEATHERMAP_TOKEN: "token",
  DARKSKY_KEY: "token"
};
