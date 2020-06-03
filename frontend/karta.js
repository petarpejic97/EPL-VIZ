(function() {
    var height, path, projection, states, svg, width;
    states = d3.select('body').append('svg:svg').append("svg:g").attr("id", "states");
    svg = d3.select('svg');
    width = parseInt(svg.style('width'), 10);
    height = parseInt(svg.style('height'), 10);
    projection = d3.geo.mercator().center([-2, 54]).scale(1100).translate([width / 2, height / 2]);
    console.log(projection.scale());
    path = d3.geo.path().projection(projection);
    d3.json("uk.json", function(collection) {
      console.log(collection.features);
      return states.selectAll("path").data(collection.features).enter().append("svg:path").attr("d", path).append("svg:title").text(function(d) {
        return d.properties.name;
      });
    });
  }).call(this);