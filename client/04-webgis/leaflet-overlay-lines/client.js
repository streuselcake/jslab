// jshint esversion: 6


const lat = gpstracks.features[0].geometry.coordinates[0][1];
const lon = gpstracks.features[0].geometry.coordinates[0][0];

const start_latlng = [lat, lon];

var map = L.map("mapdiv", {
  center: start_latlng,
  zoom: 13
});

var osm = L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 18,
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors",
  id: "osm"
}).addTo(map);


var polylinegroup = [];

for (var i = 0; i < gpstracks.features.length; ++i) {

  let gejsonline = gpstracks.features[i].geometry.coordinates;
  let line = [];
  for(let j=0; j<gejsonline.length; ++j){
    line.push([gejsonline[j][1],gejsonline[j][0]]);
  }

  polylinegroup.push(
    L.polyline(line,
    {
      color: "red",
      weight: 3,
      opacity: 0.2
    }
  ));

}

var heatmap = L.layerGroup(polylinegroup);

var baseMaps = {
  "osm": osm,
};

var overlayMaps = {
  "heatmap": heatmap,
};

L.control.layers(baseMaps, overlayMaps).addTo(map);
