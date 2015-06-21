var app = angular.module('siteApp2',[])
.config(function($interpolateProvider){
$interpolateProvider.startSymbol('{[{').endSymbol('}]}');
});

app.controller('mainCtrl2', function($scope) {

$scope.visited = [
		
	{place:'Mexico',year:'2003'},
	{place:'Hawaii',year:'2010'},
	{place:'New Orleans', year:'2004'}

	];

});