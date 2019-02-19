// jshint esversion: 6


const lat = 51.96;
const lon = 7.59;
const f = 0.03;
const start_latlng = [lat, lon];

var map = L.map("mapdiv").setView(start_latlng, 13);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 18,
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors",
  id: "osm"
}).addTo(map);

L.marker(start_latlng)
  .bindPopup("Institut für Geoinformatik, Heisenbergstraße 2, 48149 Muenster<br/><img src=\"https://www.uni-muenster.de/imperia/md/images/geoinformatics/_v/logo-ifgi-text-de.png\">")
  .addTo(map);

// L.marker([lat+f*Math.random()-(f/2.0), lon+f*Math.random()-(f/2.0)]).addTo(map);

L.circle([lat+f*Math.random()-(f/2.0), lon+f*Math.random()-(f/2.0)], 500, {
  color: 'red',
  fillColor: '#f03',
  fillOpacity: 0.5
}).addTo(map);

L.polygon([
  [lat+f*Math.random()-(f/2.0), lon+f*Math.random()-(f/2.0)],
  [lat+f*Math.random()-(f/2.0), lon+f*Math.random()-(f/2.0)],
  [lat+f*Math.random()-(f/2.0), lon+f*Math.random()-(f/2.0)]
]).addTo(map);
