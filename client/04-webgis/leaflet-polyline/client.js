// jshint esversion: 6

var trackidx = 1;

const lat = gpstracks.features[trackidx].geometry.coordinates[0][1];
const lon = gpstracks.features[trackidx].geometry.coordinates[0][0];

const start_latlng = [lat, lon];

var map = L.map("mapdiv").setView(start_latlng, 13);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 18,
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors",
  id: "osm"
}).addTo(map);


var gejsonline = gpstracks.features[trackidx].geometry.coordinates;
var line = [];
gejsonline.forEach((e, i) => { line.push([gejsonline[i][1],gejsonline[i][0]]); });

L.polyline(line,
  {
    color: "red",
    weight: 3,
  }
).addTo(map);
