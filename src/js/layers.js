var reticolo_layer = new ol.layer.Vector({
  style: layers_styles.reticolo_dati_0,
  source: new ol.source.Vector({
    features: new ol.format.GeoJSON({
      defaultDataProjection: "urn:ogc:def:crs:OGC:1.3:CRS84",
      featureProjection: "EPSG:3857"
    }).readFeatures(reticolo_dati)
  })
});

var stati_layer = new ol.layer.Vector({
  style: layers_styles.stati,
  source: new ol.source.Vector({
    features: new ol.format.GeoJSON({
      defaultDataProjection: "urn:ogc:def:crs:OGC:1.3:CRS84",
      featureProjection: "EPSG:3857"
    }).readFeatures(stati)
  })
});


function change_reticolo_style(value) {
  reticolo_layer.setStyle(layers_styles['reticolo_dati_'+value])
}


