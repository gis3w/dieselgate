var container = document.getElementById('popup');
var content = document.getElementById('popup-content');
var closer = document.getElementById('popup-closer');


closer.onclick = function() {
  overlay.setPosition(undefined);
  closer.blur();
  return false;
};

var overlay = new ol.Overlay({
  element: container,
  autoPan: true,
  autoPanAnimation: {
    duration: 250
  }
});

var view = new ol.View({
  zoom: 5,
  center: ol.proj.transform([11,50], "EPSG:4326", "EPSG:3857"),
  minZoom: 5
});

var osm = new ol.layer.Tile({
  source: new ol.source.OSM(),
  minResolution: 0,
  maxResolution: 1300
});

var map = new ol.Map({
  target: "map",
  view: view,
  overlays: [overlay],
  layers: [osm, reticolo_layer, stati_layer]
});


/**
 * Add a click handler to the map to render the popup.
 */
map.on('click', function(evt) {
  var pixel = evt.pixel;
  var coordinate = evt.coordinate;
  var innerHTML = '';
  var _feature = this.forEachFeatureAtPixel(pixel, function(feature, layer) {
    if (feature) {
      $('.ol-popup').show();
      innerHTML = innerHTML +  "<div><span>Region's population: "+feature.get('pop')+"</span></div>";
      innerHTML = innerHTML +  "<div><span>Excess PM 2.5 concentration due to NOx emissions from diesel cars above the EU limits (µg/m3) : "+feature.get('PM_DIESEL')+"</span></div>";
      innerHTML = innerHTML +  "<div><span>Premature deaths due to Dieselgate: "+feature.get('PREM_DEATH')+"</span></div>";
      content.innerHTML = innerHTML;
      overlay.setPosition(coordinate);
    }
    return feature
  }, {
    layerFilter: function(layer) {
     return layer == reticolo_layer
    },
    hitTolerance: 0
  });
  if (!_feature) {
    overlay.setPosition(undefined);
    closer.blur();
  }
});

map.on('postrender', function() {
  $('#spinner-container').remove();
});



