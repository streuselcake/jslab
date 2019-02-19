// jshint esversion: 6

// please note the log output in the browser when using this demo
// the router used by the default layer is a demo server and
//                            is NOT sutable for production uses!


const lat = 51.96;
const lon = 7.59;
const f = 0.03;
const start_latlng = [lat, lon];

var map = L.map("mapdiv", {
    center: start_latlng,
    zoom: 11
});

var osm = L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 18,
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors",
  id: "osm"
}).addTo(map);


L.Routing.control({
  waypoints: [
    // try adding and removing points to/from the route
    //L.latLng(lat+f*Math.random(), lon+f*Math.random()),
    L.latLng(lat+f*Math.random(), lon+f*Math.random()),
    L.latLng(lat+f*Math.random(), lon+f*Math.random()),
    L.latLng(lat+f*Math.random(), lon+f*Math.random())
  ], routeWhileDragging: true
}).addTo(map);
