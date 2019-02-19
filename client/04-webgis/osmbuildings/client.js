// jshint esversion: 6


var map = new OSMBuildings({
  container: "map",
  position: { latitude: 51.97004, longitude: 7.59704 },
  zoom: 16,
  minZoom: 15,
  maxZoom: 20,
  attribution: "© Map Data <a href=\"https://openstreetmap.org/copyright/\">OpenStreetMap</a> © 3D <a href=\"https://osmbuildings.org/copyright/\">OSM Buildings</a>"
});


map.addMapTiles("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png");
map.addGeoJSONTiles("https://{s}.data.osmbuildings.org/0.2/anonymous/tile/{z}/{x}/{y}.json");
