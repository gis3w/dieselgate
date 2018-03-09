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
  source: new ol.source.OSM({
    source: new ol.source.OSM({
      attribution: 'Map data © <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
    })
  })
});

var attribution = new ol.control.Attribution({
  collapsible: true
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
      var pop = feature.get('pop').toString();
      var number_of_point = 0;
      var other = 0;
      if (pop.length > 3) {
        number_of_point = parseInt(pop.length / 3);
        other = pop.length % 3;
        if (other == 0) {
          number_of_point-= 1;
        }
        var elements = [];
        const start_numbers = pop.length - (number_of_point*3);
        elements.push(pop.substring(0, start_numbers))
        for(i=0; i<number_of_point; i++) {
          var start = start_numbers + i*3;
          elements.push(pop.substring(start , start + 3))
        }
        pop = elements.join('.');
      }
      innerHTML = innerHTML +  "<div class='info-ol-popup'><span>Region's population: </span><span style='font-weight: bold'>"+pop+"</span></div>";
      innerHTML = innerHTML +  "<div class='info-ol-popup'><span>Excess PM 2.5 concentration due to NOx emissions from diesel cars above the EU limits (µg/m3) : </span><span style='font-weight: bold'>"+parseFloat(feature.get('PM_DIESEL')).toFixed(2)+"</span></div>";
      innerHTML = innerHTML +  "<div class='info-ol-popup'><span>Premature deaths due to Dieselgate: </span><span style='font-weight: bold'>"+parseInt(feature.get('PREM_DEATH'))+"</span></div>";
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



