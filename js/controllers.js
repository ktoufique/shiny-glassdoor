var cvControllers = angular.module('resumeControllers', []);

cvControllers.controller('introCtrl', function ($scope) {


	$scope.$on('takeIntro', function(event, args) {
		$scope.introData = args;
	});  
})

cvControllers.controller('educationJobsCtrl', function ($scope, $http) {
	$scope.$on('takeJobsEduc', function(event, args) {
		$scope.education = args.education;
		$scope.jobs = args.jobs;
	}); 
})

var path = [];

cvControllers.controller('headCtrl', function ($scope, $http) {
	$scope.sign = false;

	$scope.$on('takeHead', function(event, args) {
		$scope.title = args;
	});

	$http.get('nameSVG.json').success(function(res){
		animatedLine("#signature", res, 700, 300, 3);		
	})
})



function animatedLine(parent, data, width, height, time){	
	
	var svg = createSVG(parent, width, height);
	
	var x = d3.scale.linear().domain([0, 10]).range([0, width]);
	var y = d3.scale.linear().domain([0, 10]).range([0, height]);

	var line = getLineFunc(x, y);

	var path = appendPATH(svg);

	var totalLength = path.node().getTotalLength();

	

	drawPATH(path, totalLength, time);
	setTimeout(
		function() 
		{
			undrawPATH(path, totalLength, time);
			setTimeout(
		function() 
		{
			svg.transition().ease("bounce").duration(1000).attr("width", 0).attr("height", 0).remove();
		}, time*1000
		);
		}, time*1000
		);

function createSVG(parent, w, h){
	return d3.select(parent)
	.append("svg")
	.attr("width", w)
	.attr("height", h);
}

function getLineFunc(x, y){
	return d3.svg.line()
	.interpolate("basis")
	.x(function(d) {return x(d.x);})
	.y(function(d) {return y(d.y);});
}

function appendPATH(svg){
	return svg.append("path")
	.attr("d", line(data))
	.attr("stroke", "white")
	.attr("stroke-width", "3")
	.attr("fill", "none");
}

function drawPATH(path, totalLength, time){
	path
	.attr("stroke-dasharray", totalLength + " " + totalLength)
	.attr("stroke-dashoffset", totalLength)
	.transition()
	.duration(time*1000)
	.ease("linear")
	.attr("stroke-dashoffset", 0);
}
function undrawPATH(path, totalLength, time){
	path      
	.transition()
	.duration(time*1000)
	.ease("linear")
	.attr("stroke-dashoffset", totalLength);
}
}
