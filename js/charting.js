	/*

  //The data for our line
  var lineData = [ { "x": 1,   "y": 5},  { "x": 20,  "y": 20},
  { "x": 40,  "y": 10}, { "x": 60,  "y": 40},
  { "x": 80,  "y": 5},  { "x": 100, "y": 60}];


 //This is the accessor function we talked about above
 var lineFunction = d3.svg.line()
 .x(function(d) { return d.x; })
 .y(function(d) { return d.y; })
 .interpolate("basis");
 
//The SVG Container
var svgContainer = d3.select("#getThis").append("svg")
.attr("width", 1200)
.attr("height", 600);

//The line SVG Path we draw
var lineGraph = svgContainer.append("path")
.attr("d", lineFunction(lineData))
.attr("stroke", "blue")
.attr("stroke-width", 2)
.attr("fill", "none");
*/