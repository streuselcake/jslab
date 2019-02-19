// jshint esversion: 6


const lat = 51.96;
const lon = 7.59;

const start_latlng = [lat, lon];

var map = L.map("mapdiv").setView(start_latlng, 13);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 18,
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors",
  id: "osm"
}).addTo(map);


L.polyline(linecoordsarray[0],
  {
    color: "red",
    weight: 3,
  }
).addTo(map);


// for (var i = 0; i < linecoordsarray.length; ++i) {
//   L.polyline(linecoordsarray[i],
//     {
//       color: "red",
//       weight: 3,
//       opacity: 0.2
//     }
//   ).addTo(map);
// }
