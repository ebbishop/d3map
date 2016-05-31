var width = 900;
var height = 1100;

var svg = d3.select('body').append('svg')
    .attr('width', width)
    .attr('height', height);

d3.json('json/uk.json', function (err, topo) {
  if(err) console.error(err);
  console.log(topo);
});