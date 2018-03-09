var reticolo_dati_labels_colors = [
  {
    labels: ['7.42 - 12.00', '12.00 - 50.00', '50.00 - 120.00'],
    fill:['rgba( 244, 77, 55, 0.60 )', 'rgba( 197, 22, 27, 0.60 )', 'rgba( 103, 0, 13, 0.60 )']
  },
  {
    labels: ['0.00 - 1.00', '1.00 - 3.00', '3.00 - 7.00', '7.00 - 12.00','12.00 - 50.00','50.00 - 120.00'],
    fill:['rgba( 255, 245, 240, 0.60 )', 'rgba( 253, 204, 184, 0.60 )', 'rgba( 252, 143, 111, 0.60 )', 'rgba( 244, 77, 55, 0.60 )', 'rgba( 197, 22, 27, 0.60 )', 'rgba( 103, 0, 13, 0.60 )']
  },
  {
    labels: ['0.000 - 0.050', '0.050 - 0.100', '0.100 - 0.200', '0.200 - 0.500','0.500 - 1.030'],
    fill:['rgba( 247, 251, 255, 0.60 )', 'rgba( 200, 221, 240, 0.60 )', 'rgba( 115, 179, 216, 0.60 )', 'rgba( 40, 121, 185, 0.60 )', 'rgba( 8, 48, 107, 0.60 )']
  },
  {
    labels: ['1 - 50.000', '50.000 - 200.000', '200.000 - 500.000', '500.000 - 1.000.000','1.000.000 - 2.500.000','2.500.000 - 10.000.000'],
    fill:['rgba( 237, 248, 251, 0.60 )', 'rgba( 190, 231, 231, 0.60 )', 'rgba( 132, 207, 189, 0.60 )', 'rgba( 79, 181, 136, 0.60 )', 'rgba( 35, 151, 85, 0.60 )', 'rgba( 0, 109, 44, 0.60 )']
  }
];

var borders_color = 'rgba( 0,0,0, 0.8 )';

var layers_styles = {
  reticolo_dati_0: function (feature, resolution) {
    if (feature.get('PREM_DEATH') >= 7.4200 && feature.get('PREM_DEATH') < 12.00 ) {
      return new ol.style.Style({
        fill: new ol.style.Fill({
          color: reticolo_dati_labels_colors[0].fill[0]
        }),
        stroke: new ol.style.Stroke({
          color: borders_color,
          width: 1
        })
      })
    } else if (feature.get('PREM_DEATH') >= 12.00 && feature.get('PREM_DEATH') < 50.000 ) {
      return new ol.style.Style({
        fill: new ol.style.Fill({
          color: reticolo_dati_labels_colors[0].fill[1]
        }),
        stroke: new ol.style.Stroke({
          color:borders_color,
          width: 1
        })
      })
    } else if (feature.get('PREM_DEATH') >= 50.000 && feature.get('PREM_DEATH') <= 120.000 ) {
      return new ol.style.Style({
        fill: new ol.style.Fill({
          color: reticolo_dati_labels_colors[0].fill[2]
        }),
        stroke: new ol.style.Stroke({
          color: borders_color,
          width: 1
        })
      })
    }
  },
  reticolo_dati_1: function (feature, resolution) {
    if (feature.get('PREM_DEATH') >= 0.0 && feature.get('PREM_DEATH') < 1.0 ) {
      return new ol.style.Style({
        fill: new ol.style.Fill({
          color: reticolo_dati_labels_colors[1].fill[0]
        }),
        stroke: new ol.style.Stroke({
          color: borders_color,
          width: 1
        })
      })
    } else if (feature.get('PREM_DEATH') >= 1.0 && feature.get('PREM_DEATH') < 3.0 ) {
      return new ol.style.Style({
        fill: new ol.style.Fill({
          color: reticolo_dati_labels_colors[1].fill[1]
        }),
        stroke: new ol.style.Stroke({
          color: borders_color,
          width: 1
        })
      })
    } else if (feature.get('PREM_DEATH') >= 3.0 && feature.get('PREM_DEATH') < 7.0 ) {
      return new ol.style.Style({
        fill: new ol.style.Fill({
          color: reticolo_dati_labels_colors[1].fill[2]
        }),
        stroke: new ol.style.Stroke({
          color: borders_color,
          width: 1
        })
      })
    } else if (feature.get('PREM_DEATH') >= 7.0 && feature.get('PREM_DEATH') < 12.0 ) {
      return new ol.style.Style({
        fill: new ol.style.Fill({
          color: reticolo_dati_labels_colors[1].fill[3]
        }),
        stroke: new ol.style.Stroke({
          color: borders_color,
          width: 1
        })
      })
    } else if (feature.get('PREM_DEATH') >= 12.0 && feature.get('PREM_DEATH') < 50.0 ) {
      return new ol.style.Style({
        fill: new ol.style.Fill({
          color: reticolo_dati_labels_colors[1].fill[4]
        }),
        stroke: new ol.style.Stroke({
          color: borders_color,
          width: 1
        })
      })
    } else if (feature.get('PREM_DEATH') >= 50.0 && feature.get('PREM_DEATH') <= 120.0 ) {
      return new ol.style.Style({
        fill: new ol.style.Fill({
          color: reticolo_dati_labels_colors[1].fill[5]
        }),
        stroke: new ol.style.Stroke({
          color: borders_color,
          width: 1
        })
      })
    }
  },
  reticolo_dati_2: function (feature, resolution) {
    if (feature.get('PM_DIESEL') >= 0.000 && feature.get('PM_DIESEL') < 0.050 ) {
      return new ol.style.Style({
        fill: new ol.style.Fill({
          color: reticolo_dati_labels_colors[2].fill[0]
        }),
        stroke: new ol.style.Stroke({
          color: borders_color,
          width: 1
        })
      })
    } else if (feature.get('PM_DIESEL') >= 0.050 && feature.get('PM_DIESEL') < 0.100 ) {
      return new ol.style.Style({
        fill: new ol.style.Fill({
          color: reticolo_dati_labels_colors[2].fill[1]
        }),
        stroke: new ol.style.Stroke({
          color: borders_color,
          width: 1
        })
      })
    } else if (feature.get('PM_DIESEL') >= 0.100 && feature.get('PM_DIESEL') < 0.200 ) {
      return new ol.style.Style({
        fill: new ol.style.Fill({
          color: reticolo_dati_labels_colors[2].fill[2]
        }),
        stroke: new ol.style.Stroke({
          color: borders_color,
          width: 1
        })
      })
    } else if (feature.get('PM_DIESEL') >= 0.200 && feature.get('PM_DIESEL') < 0.500) {
      return new ol.style.Style({
        fill: new ol.style.Fill({
          color: reticolo_dati_labels_colors[2].fill[3]
        }),
        stroke: new ol.style.Stroke({
          color: borders_color,
          width: 1
        })
      })
    } else if (feature.get('PM_DIESEL') >= 0.500 && feature.get('PM_DIESEL') <= 1.030 ) {
      return new ol.style.Style({
        fill: new ol.style.Fill({
          color: reticolo_dati_labels_colors[2].fill[4]
        }),
        stroke: new ol.style.Stroke({
          color: borders_color,
          width: 1
        })
      })
    }
  },
  reticolo_dati_3: function (feature, resolution) {
    if (feature.get('pop') >= 1.0 && feature.get('pop') < 50000.0 ) {
      return new ol.style.Style({
        fill: new ol.style.Fill({
          color: reticolo_dati_labels_colors[3].fill[0]
        }),
        stroke: new ol.style.Stroke({
          color: borders_color,
          width: 1
        })
      })
    }
    if (feature.get('pop') >= 50000.0 && feature.get('pop') < 200000.0 ) {
      return new ol.style.Style({
        fill: new ol.style.Fill({
          color: reticolo_dati_labels_colors[3].fill[1]
        }),
        stroke: new ol.style.Stroke({
          color: borders_color,
          width: 1
        })
      })
    }
    if (feature.get('pop') >= 200000.0 && feature.get('pop') < 500000.0 ) {
      return new ol.style.Style({
        fill: new ol.style.Fill({
          color: reticolo_dati_labels_colors[3].fill[2]
        }),
        stroke: new ol.style.Stroke({
          color: borders_color,
          width: 1
        })
      })
    }
    if (feature.get('pop') >= 500000.0 && feature.get('pop') < 1000000.0 ) {
      return new ol.style.Style({
        fill: new ol.style.Fill({
          color: reticolo_dati_labels_colors[3].fill[3]
        }),
        stroke: new ol.style.Stroke({
          color: borders_color,
          width: 1
        })
      })
    }
    if (feature.get('pop') >= 1000000.0 && feature.get('pop') < 2500000.0 ) {
      return new ol.style.Style({
        fill: new ol.style.Fill({
          color: reticolo_dati_labels_colors[3].fill[4]
        }),
        stroke: new ol.style.Stroke({
          color: borders_color,
          width: 1
        })
      })
    }
    if (feature.get('pop') >= 2500000.0 && feature.get('pop') <= 10000000.0 ) {
      return new ol.style.Style({
        fill: new ol.style.Fill({
          color: reticolo_dati_labels_colors[3].fill[5]
        }),
        stroke: new ol.style.Stroke({
          color: borders_color,
          width: 1
        })
      })
    }
  },
  stati: function (feature, resolution) {
      return new ol.style.Style({
        stroke: new ol.style.Stroke({
          color: '#7d7d7d',
          width: 1
        }),
        text: new ol.style.Text({
          font: 'bold 14px Arial',
          text: feature.get('NAME'),
          fill: new ol.style.Fill({color: '#000000'}),
          stroke: new ol.style.Stroke({
            color: '#ffffff',
            width: 3
          })
        })
    })
  }
};
