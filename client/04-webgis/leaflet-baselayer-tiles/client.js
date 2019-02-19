// jshint esversion: 6


const lat = 51.96;
const lon = 7.59;

const start_latlng = [lat, lon];

var map = L.map("mapdiv", {
    center: start_latlng,
    zoom: 13,
    //layers: [osm, mapbox]
});

var osm = L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 18,
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors",
}).addTo(map);

var mapbox = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={access_token}", {
  maxZoom: 18,
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, " +
  "<a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, " +
  "Imagery © <a href=\https://www.mapbox.com/\">Mapbox</a>",
  id: "mapbox.streets",
  access_token: token.MAPBOX_TOKEN
}).addTo(map);

var opentopomap = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
	maxZoom: 17,
	attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
});

var baseMaps = {
    "opentopomap" : opentopomap,
    "osm": osm,
    "mapbox": mapbox
};

L.control.layers(baseMaps).addTo(map);
