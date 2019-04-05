// jshint esversion: 6


Cesium.Ion.defaultAccessToken = token.cesium_token;

var viewer = new Cesium.Viewer("cesiumContainer", {
    terrainProvider: Cesium.createWorldTerrain()
});
//viewer.scene.globe.depthTestAgainstTerrain = true;

var track = [];
var trackidx = 1;

// from wrld example codes:
var polylinePoints = [
  [37.781814, -122.404740],
  [37.781719, -122.404637],
  [37.781489, -122.404949],
  [37.780704, -122.403945],
  [37.780012, -122.404827]
];
console.dir(polylinePoints);

for (var i = 0; i < polylinePoints.length; ++i) {
  track.push(polylinePoints[i][1]);
  track.push(polylinePoints[i][0]);
}

console.dir(track);



var dashedLine = viewer.entities.add({
    name : "track",
    polyline : {
      positions : Cesium.Cartesian3.fromDegreesArray(track),
      clampToGround : true,
      width : 5,
      arcType : Cesium.ArcType.RHUMB,
      material : Cesium.Color.GREEN
    }
});


viewer.zoomTo(viewer.entities);
