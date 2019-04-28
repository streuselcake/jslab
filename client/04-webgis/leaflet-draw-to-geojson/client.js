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


var drawnItems = L.featureGroup().addTo(map);

// TODO enable/disable desired controls
// http://leaflet.github.io/Leaflet.draw/docs/leaflet-draw-latest.html#l-draw-toolbar
map.addControl(new L.Control.Draw({
    edit: {
        featureGroup: drawnItems,
        poly: {
            allowIntersection: false
        }
    },
    draw: {
      circle: true,
      polygon: false,
      marker: false
        // polygon: {
        //     allowIntersection: false,
        //     showArea: true
        // }
    }
}));


// TODO update on any change, currently various events (e.g. delete) miss to trigger the textarea
map.on(L.Draw.Event.CREATED, function (event) {
// map.on("draw:created", function (event) {
    var layer = event.layer;
    drawnItems.addLayer(layer);

    updateText();
});

map.on("draw:edited", function (event) {
    updateText();
});


/**
* creates a geojson text representation from the the drawnItems with a FeatureCollection as root element
*/
function updateText(){

  // to convert L.featureGroup to GeoJSON FeatureCollection
  // note: https://gis.stackexchange.com/questions/54065/leaflet-geojson-coordinate-problem/246104
  //
  document.getElementById("geojsontextarea").value = JSON.stringify(drawnItems.toGeoJSON());

}
