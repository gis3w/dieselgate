function createLegend(index) {
  var legend = reticolo_dati_labels_colors[index];
  var length = reticolo_dati_labels_colors[index].fill.length;
  if (index == 0)
    $('#class3, #class4, #class5').hide();
  else if (index == 2) {
    $('#class5').hide();
  }
  for (var i=0; i<length;i++) {
    $('#textclass'+i).text(legend.labels[i]);
    $('#fillclass'+i).css({'background-color': legend.fill[i]})
    $('#class' + i).css('display', 'inline-block');
  }
}
