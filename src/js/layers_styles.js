var layers_styles = {
  reticolo_dati_0: function (feature, resolution) {
    if (feature.get('PM_REAL') >= 0.000 && feature.get('PM_REAL') < 2.500 ) {
      return new ol.style.Style({
        fill: new ol.style.Fill({
          color: '#f7fbff'
        }),
        stroke: new ol.style.Stroke({
          color: [105,105,105,1.0]
        })
      })
    }
    if (feature.get('PM_REAL') >= 2.500 && feature.get('PM_REAL') < 5.000 ) {
      return new ol.style.Style({
        fill: new ol.style.Fill({
          color: '#d1e3f3'
        }),
        stroke: new ol.style.Stroke({
          color: [105,105,105,1.0]
        })
      })
    }
    if (feature.get('PM_REAL') >= 5.000 && feature.get('PM_REAL') < 8.000 ) {
      return new ol.style.Style({
        fill: new ol.style.Fill({
          color: '#9ac8e1'
        }),
        stroke: new ol.style.Stroke({
          color: [105,105,105,1.0]
        })
      })
    }
    if (feature.get('PM_REAL') >= 8.000 && feature.get('PM_REAL') < 10.000 ) {
      return new ol.style.Style({
        fill: new ol.style.Fill({
          color: '#529dcc'
        }),
        stroke: new ol.style.Stroke({
          color: [105,105,105,1.0]
        })
      })
    }
    if (feature.get('PM_REAL') >= 10.000 && feature.get('PM_REAL') < 20.000 ) {
      return new ol.style.Style({
        fill: new ol.style.Fill({
          color: '#1c6cb1'
        }),
        stroke: new ol.style.Stroke({
          color: [105,105,105,1.0]
        })
      })
    }
    if (feature.get('PM_REAL') >= 20.500 && feature.get('PM_REAL') <= 45.000 ) {
      return new ol.style.Style({
        fill: new ol.style.Fill({
          color: '#08306b'
        }),
        stroke: new ol.style.Stroke({
          color: [105,105,105,1.0]
        })
      })
    }
  },
  reticolo_dati_1: function (feature, resolution) {
    if (feature.get('PREM_DEATH') >= 0.0 && feature.get('PREM_DEATH') < 7.5 ) {
      return new ol.style.Style({
        fill: new ol.style.Fill({
          color: '#f7fbff'
        }),
        stroke: new ol.style.Stroke({
          color: [105,105,105,1.0]
        })
      })
    }
    if (feature.get('PREM_DEATH') >= 7.5 && feature.get('PREM_DEATH') < 15.0 ) {
      return new ol.style.Style({
        fill: new ol.style.Fill({
          color: '#d1e3f3'
        }),
        stroke: new ol.style.Stroke({
          color: [105,105,105,1.0]
        })
      })
    }
    if (feature.get('PREM_DEATH') >= 15.0 && feature.get('PREM_DEATH') < 22.5 ) {
      return new ol.style.Style({
        fill: new ol.style.Fill({
          color: '#9ac8e1'
        }),
        stroke: new ol.style.Stroke({
          color: [105,105,105,1.0]
        })
      })
    }
    if (feature.get('PREM_DEATH') >= 22.5 && feature.get('PREM_DEATH') < 30.0 ) {
      return new ol.style.Style({
        fill: new ol.style.Fill({
          color: '#529dcc'
        }),
        stroke: new ol.style.Stroke({
          color: [105,105,105,1.0]
        })
      })
    }
    if (feature.get('PREM_DEATH') >= 30.0 && feature.get('PREM_DEATH') < 37.5 ) {
      return new ol.style.Style({
        fill: new ol.style.Fill({
          color: '#1c6cb1'
        }),
        stroke: new ol.style.Stroke({
          color: [105,105,105,1.0]
        })
      })
    }
    if (feature.get('PREM_DEATH') >= 37.5 && feature.get('PREM_DEATH') <= 45.0 ) {
      return new ol.style.Style({
        fill: new ol.style.Fill({
          color: '#08306b'
        }),
        stroke: new ol.style.Stroke({
          color: [105,105,105,1.0]
        })
      })
    }
  },
  reticolo_dati_2: function (feature, resolution) {
    if (feature.get('PREM_DEATH') >= 0.0 && feature.get('PREM_DEATH') < 1.0 ) {
      return new ol.style.Style({
        fill: new ol.style.Fill({
          color: '#fcfbfd'
        }),
        stroke: new ol.style.Stroke({
          color: [105,105,105,1.0]
        })
      })
    }
    if (feature.get('PREM_DEATH') >= 1.0 && feature.get('PREM_DEATH') < 3.0 ) {
      return new ol.style.Style({
        fill: new ol.style.Fill({
          color: '#e4e3f0'
        }),
        stroke: new ol.style.Stroke({
          color: [105,105,105,1.0]
        })
      })
    }
    if (feature.get('PREM_DEATH') >= 3.0 && feature.get('PREM_DEATH') < 7.0 ) {
      return new ol.style.Style({
        fill: new ol.style.Fill({
          color: '#babbdb'
        }),
        stroke: new ol.style.Stroke({
          color: [105,105,105,1.0]
        })
      })
    }
    if (feature.get('PREM_DEATH') >= 7.0 && feature.get('PREM_DEATH') < 12.0 ) {
      return new ol.style.Style({
        fill: new ol.style.Fill({
          color: '#8c88c0'
        }),
        stroke: new ol.style.Stroke({
          color: [105,105,105,1.0]
        })
      })
    }
    if (feature.get('PREM_DEATH') >= 12.0 && feature.get('PREM_DEATH') < 50.0 ) {
      return new ol.style.Style({
        fill: new ol.style.Fill({
          color: '#63439c'
        }),
        stroke: new ol.style.Stroke({
          color: [105,105,105,1.0]
        })
      })
    }
    if (feature.get('PREM_DEATH') >= 50.0 && feature.get('PREM_DEATH') <= 120.0 ) {
      return new ol.style.Style({
        fill: new ol.style.Fill({
          color: '#3f007d'
        }),
        stroke: new ol.style.Stroke({
          color: [105,105,105,1.0]
        })
      })
    }
  },
  reticolo_dati_3: function (feature, resolution) {
    if (feature.get('PREM_DEATH') >= 0.000000 && feature.get('PREM_DEATH') < 20.00000 ) {
      return new ol.style.Style({
        fill: new ol.style.Fill({
          color: '#fcfbfd'
        }),
        stroke: new ol.style.Stroke({
          color: [105,105,105,1.0]
        })
      })
    }
    if (feature.get('PREM_DEATH') >= 20.0 && feature.get('PREM_DEATH') < 40.0 ) {
      return new ol.style.Style({
        fill: new ol.style.Fill({
          color: '#e4e3f0'
        }),
        stroke: new ol.style.Stroke({
          color: [105,105,105,1.0]
        })
      })
    }
    if (feature.get('PREM_DEATH') >= 40.0 && feature.get('PREM_DEATH') < 60.0 ) {
      return new ol.style.Style({
        fill: new ol.style.Fill({
          color: '#babbdb'
        }),
        stroke: new ol.style.Stroke({
          color: [105,105,105,1.0]
        })
      })
    }
    if (feature.get('PREM_DEATH') >= 60.0 && feature.get('PREM_DEATH') < 80.0 ) {
      return new ol.style.Style({
        fill: new ol.style.Fill({
          color: '#8c88c0'
        }),
        stroke: new ol.style.Stroke({
          color: [105,105,105,1.0]
        })
      })
    }
    if (feature.get('PREM_DEATH') >= 80.0 && feature.get('PREM_DEATH') < 100.0 ) {
      return new ol.style.Style({
        fill: new ol.style.Fill({
          color: '#63439c'
        }),
        stroke: new ol.style.Stroke({
          color: [105,105,105,1.0]
        })
      })
    }
    if (feature.get('PREM_DEATH') >= 100.0 && feature.get('PREM_DEATH') <= 120.0 ) {
      return new ol.style.Style({
        fill: new ol.style.Fill({
          color: '#3f007d'
        }),
        stroke: new ol.style.Stroke({
          color: [105,105,105,1.0]
        })
      })
    }
  },
  reticolo_dati_4: function (feature, resolution) {
    if (feature.get('pop') >= 1.0 && feature.get('pop') < 50000.0 ) {
      return new ol.style.Style({
        fill: new ol.style.Fill({
          color: '#fef0d9'
        }),
        stroke: new ol.style.Stroke({
          color: [105,105,105,1.0]
        })
      })
    }
    if (feature.get('pop') >= 50000.0 && feature.get('pop') < 200000.0 ) {
      return new ol.style.Style({
        fill: new ol.style.Fill({
          color: '#fed49a'
        }),
        stroke: new ol.style.Stroke({
          color: [105,105,105,1.0]
        })
      })
    }
    if (feature.get('pop') >= 200000.0 && feature.get('pop') < 500000.0 ) {
      return new ol.style.Style({
        fill: new ol.style.Fill({
          color: '#fda66d'
        }),
        stroke: new ol.style.Stroke({
          color: [105,105,105,1.0]
        })
      })
    }
    if (feature.get('pop') >= 500000.0 && feature.get('pop') < 1000000.0 ) {
      return new ol.style.Style({
        fill: new ol.style.Fill({
          color: '#f2724a'
        }),
        stroke: new ol.style.Stroke({
          color: [105,105,105,1.0]
        })
      })
    }
    if (feature.get('pop') >= 1000000.0 && feature.get('pop') < 2500000.0 ) {
      return new ol.style.Style({
        fill: new ol.style.Fill({
          color: '#da3b28'
        }),
        stroke: new ol.style.Stroke({
          color: [105,105,105,1.0]
        })
      })
    }
    if (feature.get('pop') >= 2500000.0 && feature.get('pop') <= 10000000.0 ) {
      return new ol.style.Style({
        fill: new ol.style.Fill({
          color: '#b30000'
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
    if (resolution < 0.02) {
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
