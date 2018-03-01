var view = new ol.View({
  zoom: 5,
  center: ol.proj.transform([11,43], "EPSG:4326", "EPSG:3857")
});

var OSMLayer = new ol.layer.Tile({
  source: new ol.source.OSM({
    attribution: 'Map data © <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
  })
});

var map = new ol.Map({
  target: "map",
  view: view,
  layers: [OSMLayer, reticolo_layer, stati_layer, city2_layer]
});



