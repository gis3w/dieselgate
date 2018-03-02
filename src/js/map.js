var view = new ol.View({
  zoom: 5,
  projection: "",
  center: ol.proj.transform([11,43], "EPSG:4326", "EPSG:3857")
});


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


var map = new ol.Map({
  target: "map",
  view: view,
  overlays: [overlay],
  layers: [reticolo_layer, stati_layer, city2_layer]
});


/**
 * Add a click handler to the map to render the popup.
 */
map.on('click', function(evt) {
  var pixel = evt.pixel;
  var coordinate = evt.coordinate;
  var _feature = this.forEachFeatureAtPixel(pixel, function(feature, layer) {
    if (feature) {
      $('.ol-popup').show();
      content.innerHTML = '<p>'+feature.get('Country')+'</p>';
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



