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

map.addControl(new L.Control.Draw({
    edit: {
        featureGroup: drawnItems,
        poly: {
            allowIntersection: false
        }
    },
    draw: {
        polygon: {
            allowIntersection: false,
            showArea: true
        }
    }
}));

// TODO update on any change, currently various events (e.g. delete) miss to trigger the textarea
// ...
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
  $("#geojsontextarea").val(JSON.stringify(drawnItems.toGeoJSON()));

  // access layer by layer
  // drawnItems.eachLayer(function (layer) {
  //   var geojsonlayer = layer.toGeoJSON();
  //   $("#geojsontextarea").val(JSON.stringify());
  // });
}

/**
  * import from geojson
  */
$("#submit").click(function (){
  var data = JSON.parse($("#geojsontextarea").val());

  drawnItems.clearLayers();

  // TODO: fix bug
  // TODO: implement other geometries
  // TODO: pass additional information to the geojson export for the circle import
  var o;
  for(i=0; i<data.features.length; ++i){
    if(data.features[i].geometry.type==="Polygon"){
      console.dir(data.features[i].geometry.coordinates[0]);
      o = new L.Polygon(data.features[i].geometry.coordinates[0]);
      o.editing.enable();
      drawnItems.addLayer(o);
    }

    // if(data.features[i].geometry.type==="Polyline"){
    //    o = new L.Polyline(data.features[i].geometry.coordinates);
    //   o.editing.enable();
    //   drawnItems.addLayer(o);
    // }
    // if(data.features[i].geometry.type==="Point"){
    //    o = new L.CircleMarker(data.features[i].geometry.coordinates);
    //   o.editing.enable();
    //   drawnItems.addLayer(o);
    // }

  }

});
