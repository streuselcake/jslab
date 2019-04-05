// jshint esversion: 6

var trackidx = 1;

const lat = gpstracks.features[trackidx].geometry.coordinates[0][1];
const lon = gpstracks.features[trackidx].geometry.coordinates[0][0];

const start_latlng = [lat, lon];

var map = L.map("mapdiv").setView(start_latlng, 13);

var osm = L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 18,
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors",
  id: "osm"
}).addTo(map);


var overlay = L.layerGroup();
overlay.addTo(map);

var routes = [];
console.log(gpstracks.features.length);
for(let i=0; i<gpstracks.features.length; ++i){
  let gejsonline = gpstracks.features[i].geometry.coordinates;
  let line = [];

  gejsonline.forEach((e) => { line.push([e[1],e[0]]); });
  //console.log(JSON.stringify(line));

  let p = L.polyline(line, {  color: "red",  weight: 3,  });
  routes.push(p);

}

routes[0].addTo(overlay);
routes[1].addTo(overlay);
routes[2].addTo(overlay);
// ...

overlay.removeLayer(routes[0]);
// overlay.removeLayer(routes[1]);
overlay.removeLayer(routes[2]);
// ...
