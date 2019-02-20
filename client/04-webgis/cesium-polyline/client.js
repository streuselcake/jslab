// jshint esversion: 6


Cesium.Ion.defaultAccessToken = token.cesium_token;

var viewer = new Cesium.Viewer("cesiumContainer", {
    terrainProvider: Cesium.createWorldTerrain()
});
viewer.scene.globe.depthTestAgainstTerrain = true;




var track = [];
var trackidx = 1;

for (var i = 0; i < gpstracks.features[trackidx].geometry.coordinates.length; ++i) {
  track.push(gpstracks.features[trackidx].geometry.coordinates[i][0]);
  track.push(gpstracks.features[trackidx].geometry.coordinates[i][1]);
}

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
