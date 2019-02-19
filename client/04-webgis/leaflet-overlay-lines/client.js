// jshint esversion: 6


const lat = 51.96;
const lon = 7.59;

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
for (var i = 0; i < linecoordsarray.length; ++i) {
  polylinegroup.push(L.polyline(linecoordsarray[i],
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
