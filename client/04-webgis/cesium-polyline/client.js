// jshint esversion: 6


Cesium.Ion.defaultAccessToken = token.cesium_token;

var viewer = new Cesium.Viewer("cesiumContainer", {
    terrainProvider: Cesium.createWorldTerrain()
});
viewer.scene.globe.depthTestAgainstTerrain = true;

var run = [];
for (var i = 0; i < linecoordsarray[0].length; ++i) {
  run.push(linecoordsarray[0][i].lng);
  run.push(linecoordsarray[0][i].lat);
  // run.push(50);
}

var dashedLine = viewer.entities.add({
    name : 'Blue dashed line',
    polyline : {
      // positions : Cesium.Cartesian3.fromDegreesArrayHeights(run),
      positions : Cesium.Cartesian3.fromDegreesArray(run),
      clampToGround : true,
      width : 5,
      arcType : Cesium.ArcType.RHUMB,
      material : Cesium.Color.GREEN
    }
});


viewer.zoomTo(viewer.entities);
