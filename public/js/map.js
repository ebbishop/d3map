var width = 900;
var height = 600;

var projection = d3.geo.mercator();

var svg = d3.select('body').append('svg')
    .attr('width', width)
    .attr('height', height);

var path = d3.geo.path()
    .projection(projection);

var g = svg.append('g');

d3.json('world-110m2.json', function (err, topo) {
  g.selectAll('path')
    .data(topojson.object(topo, topo.objects.countries).geometries)
    .enter().append('path').attr('d', path);
});