var layers_styles = {
  reticolo_dati_0: function (feature, resolution) {
    if(feature.get('Death incr') >= 0.000000 && feature.get('Death incr') <= 0.020000) {
      return new ol.style.Style({
        fill: new ol.style.Fill({
          color: [247, 251, 255, 1.0]
        }),
        stroke: new ol.style.Stroke({
          color: [105, 105, 105, 1.0]
        })
      })
    }
    if(feature.get('Death incr') >= 0.020000 && feature.get('Death incr') <= 0.060000) {
      return new ol.style.Style({
        fill: new ol.style.Fill({
          color: [209, 227, 243, 1.0]
        }),
        stroke: new ol.style.Stroke({
          color: [105, 105, 105, 1.0]
        })
      })
    }
    if(feature.get('Death incr') >= 0.060000 && feature.get('Death incr') <= 0.120000) {
      return new ol.style.Style({
        fill: new ol.style.Fill({
          color: [154, 200, 225, 1.0]
        }),
        stroke: new ol.style.Stroke({
          color: [105, 105, 105, 1.0]
        })
      })
    }
    if(feature.get('Death incr') >= 0.120000 && feature.get('Death incr') <= 0.220000) {
      return new ol.style.Style({
        fill: new ol.style.Fill({
          color: [82, 157, 204, 1.0]
        }),
        stroke: new ol.style.Stroke({
          color: [105, 105, 105, 1.0]
        })
      })
    }
    if(feature.get('Death incr') >= 0.220000 && feature.get('Death incr') <= 0.420000) {
      return new ol.style.Style({
        fill: new ol.style.Fill({
          color: [28, 108, 177, 1.0]
        }),
        stroke: new ol.style.Stroke({
          color: [105, 105, 105, 1.0]
        })
      })
    }
    if(feature.get('Death incr') >= 0.420000 && feature.get('Death incr') <= 0.640000) {
      return new ol.style.Style({
        fill: new ol.style.Fill({
          color: [8, 48, 107, 1.0]
        }),
        stroke: new ol.style.Stroke({
          color: [105, 105, 105, 1.0]
        })
      })
    }
  },
  reticolo_dati_1: function (feature, resolution) {
    if (feature.get('Death incr') >= 0.000000 && feature.get('Death incr') <= 0.020000 ) {
      return new ol.style.Style({
        fill: new ol.style.Fill({
          color: [0,251,255,1.0]
        }),
        stroke: new ol.style.Stroke({
          color: [105,105,105,1.0]
        })
      })
    }
    if (feature.get('Death incr') >= 0.020000 && feature.get('Death incr') <= 0.060000 ) {
      return new ol.style.Style({
        fill: new ol.style.Fill({
          color: [209,0,243, 1.0]
        }),
        stroke: new ol.style.Stroke({
          color: [105,105,105,1.0]
        })
      })
    }
    if (feature.get('Death incr') >= 0.060000 && feature.get('Death incr') <= 0.120000 ) {
      return new ol.style.Style({
        fill: new ol.style.Fill({
          color: [154,200,0,1.0]
        }),
        stroke: new ol.style.Stroke({
          color: [105,200,105,1.0]
        })
      })
    }
    if (feature.get('Death incr') >= 0.120000 && feature.get('Death incr') <= 0.220000 ) {
      return new ol.style.Style({
        fill: new ol.style.Fill({
          color: [82,157,204,1.0]
        }),
        stroke: new ol.style.Stroke({
          color: [105,255,105,1.0]
        })
      })
    }
    if (feature.get('Death incr') >= 0.220000 && feature.get('Death incr') <= 0.420000 ) {
      return new ol.style.Style({
        fill: new ol.style.Fill({
          color: [28,108,177,1.0]
        }),
        stroke: new ol.style.Stroke({
          color: [0,105,255,1.0]
        })
      })
    }
    if (feature.get('Death incr') >= 0.420000 && feature.get('Death incr') <= 0.640000 ) {
      return new ol.style.Style({
        fill: new ol.style.Fill({
          color: [8,48,107,1.0]
        }),
        stroke: new ol.style.Stroke({
          color: [105,105,105,1.0]
        })
      })
    }
  },
  city2: function(feature, resolution) {
    if (feature.get('featurecla')  == 'Admin-0 capital') {
      return [new ol.style.Style({
        image: new ol.style.Circle({
          radius: 4,
          fill: new ol.style.Fill({
            color: [255,255,255,1.0]
          }),
          stroke: new ol.style.Stroke({
            color: [0,0,0,1.0],
            width: 1
          })
        })
      }),
        new ol.style.Style({
          image: new ol.style.Circle({
            radius: 2,
            fill: new ol.style.Fill({
              color: [0,0,0,1.0]
            }),
            stroke: new ol.style.Stroke({
              color: [0,0,0,1.0],
              width: 1
            })
          })
        }),
        new ol.style.Style({
          text: new ol.style.Text({
            text: feature.get('name'),
            offsetX: 10,
            offsetY: 10,
            font: 'bold 15px Arial',
            fill: new ol.style.Fill({color: '#353535'}),
            stroke: new ol.style.Stroke({color: '#ffffff', width: 4})
          })
        })
      ]
    }
    if (resolution < 2000) {
      if (feature.get('featurecla')  != 'Admin-0 capital') {
        return new ol.style.Style({
          text: new ol.style.Text({
            text: feature.get('name'),
            offsetX: 10,
            offsetY: 10,
            font: 'bold 10px Arial',
            fill: new ol.style.Fill({color: '#000000'}),
            stroke: new ol.style.Stroke({color: '#ffffff', width: 3})
          }),
          image: new ol.style.Circle({
            radius: 2,
            fill: new ol.style.Fill({
              color: [255,255,255,1.0]
            }),
            stroke: new ol.style.Stroke({
              color: [0,0,0,1.0],
              width: 1
            })
          })
        })
      }
    }
  },
  stati: new ol.style.Style({
    stroke: new ol.style.Stroke({
      color: [227,26,28,1.0],
      width: 2
    })
  })
};
