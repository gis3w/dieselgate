function createLegend(index) {
  var legend = reticolo_dati_labels_colors[index];
  var length = reticolo_dati_labels_colors[index].fill.length;
  if (index != 3)
    $('#legend').hide();
  else {
    $('#legend').show();
    for (var i=0; i<length;i++) {
      $('#textclass'+i).text(legend.labels[i]);
      $('#fillclass'+i).css({'background-color': legend.fill[i]});
      $('#class' + i).css('display', 'inline-block');
    }
  }
}
