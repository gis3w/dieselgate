var reticolo_layer = new ol.layer.Vector({
  style: layers_styles.reticolo_dati_0,
  source: new ol.source.Vector({
    features: new ol.format.GeoJSON({
    }).readFeatures(reticolo_dati)
  })
});

var stati_layer = new ol.layer.Vector({
  style: layers_styles.stati,
  source: new ol.source.Vector({
    features: new ol.format.GeoJSON({
    }).readFeatures(stati)
  })
});

var city2_layer = new ol.layer.Vector({
  style: layers_styles.city2,
  source: new ol.source.Vector({
    features: new ol.format.GeoJSON({
    }).readFeatures(city2)
  })
});

function change_reticolo_style(value) {
  console.log(value)
  reticolo_layer.setStyle(layers_styles['reticolo_dati_'+value])
}


