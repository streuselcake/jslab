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


var popup = L.popup();

function onMapClick(e) {
  popup
  .setLatLng(e.latlng)
  .setContent("You clicked the map at " + e.latlng.toString())
  .openOn(map);
}

map.on("click", onMapClick);
