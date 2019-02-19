// jshint esversion: 6

var map = new L.Map("map");

map.setView([51.97004, 7.59704], 16, false);


L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 18,
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors",
  id: "osm"
}).addTo(map);

var osmb = new OSMBuildings(map).load("https://{s}.data.osmbuildings.org/0.2/anonymous/tile/{z}/{x}/{y}.json");
