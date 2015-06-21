var app = angular.module('siteApp',[])
.config(function($interpolateProvider){
  $interpolateProvider.startSymbol('{[{').endSymbol('}]}');
});

app.controller('customerCtrl', function($scope, $http) {

	$http.get("http://www.w3schools.com/angular/customers.php")
	.success(function(response) {$scope.names = response.records;});
	
});