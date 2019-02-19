// jshint esversion: 6


// wrld3d doesn't cover Münster yet
// const start_latlng = [lat, lon];


// from wrld example codes:
const start_latlng = [37.780813, -122.404750];

// from wrld example codes:
var polylinePoints = [
  [37.781814, -122.404740],
  [37.781719, -122.404637],
  [37.781489, -122.404949],
  [37.780704, -122.403945],
  [37.780012, -122.404827]
];


var map = L.Wrld.map( "map", token.wrld_token, {
  center: start_latlng,
  zoom: 15
});

// adding leaflet polylines (from Münster)
// for (var i = 0; i < linecoordsarray.length; ++i) {
//   L.polyline(linecoordsarray[i],
//     {
//       color: "red",
//       weight: 3,
//       opacity: 0.2
//     }
//   ).addTo(map);
// }


var polyTerrainLevel = L.Wrld.polyline(polylinePoints, {
  elevation: 200,
  elevationMode: "heightAboveGround",
  color: "#ff0000ff"
  }).addTo(map);

// var polySeaLevel = L.Wrld.polyline(polylinePoints, {
//   elevation: 200,
//   elevationMode: "heightAboveSeaLevel",
//   color: "#0000ffff"
//   }).addTo(map);
