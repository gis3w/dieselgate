var mapLegend = [
  {
    labels: ['0.0 - 2.5', '2.5 - 5.0', '5.0 - 8.0', '8.0 - 10.0','10.0 - 20.0','20.0 - 45.0'],
    fill:['#f7fbff', '#d1e3f3', '#9ac8e1', '#529dcc', '#1c6cb1', '#08306b']
  },
  {
    labels: ['0.0 - 7.5', '7.5 - 5.0', '7.5 - 15.0', '15.0 - 22.5','22.5 - 30.0','30.0 - 37.5'],
    fill:['#f7fbff', '#d1e3f3', '#9ac8e1', '#529dcc', '#1c6cb1', '#08306b']
  },
  {
    labels: ['0 - 1', '1 - 3', '3 - 7', '7 - 12','12 - 50','50 - 120'],
    fill:['#fcfbfd', '#e4e3f0', '#babbdb', '#8c88c0', '#63439c', '#3f007d']
  },
  {
    labels: ['0 - 20', '20 - 40', '40 - 60', '60 - 80','80 - 100','100 - 120'],
    fill:['#fcfbfd', '#e4e3f0', '#babbdb', '#8c88c0', '#63439c', '#3f007d']
  },
  {
    labels: ['1 - 50000', '50000 - 200000', '200000 - 500000', '500000 - 1000000','1000000 - 2500000','2500000 - 10000000'],
    fill:['#fef0d9', '#fed49a', '#fda66d', '#f2724a', '#f2724a', '#b30000']
  }
];

function createLegend(index) {
  var legend = mapLegend[index];
  for (var i=0; i<7;i++) {
    $('#textclass'+i).text(legend.labels[i]);
    $('#fillclass'+i).css({'background-color': legend.fill[i]})
  }
}
