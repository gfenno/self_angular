var app = angular.module('siteApp6',[])
.config(function($interpolateProvider){
  $interpolateProvider.startSymbol('{[{').endSymbol('}]}');
});

app.controller('mainCtrl6', function($scope) {

	$scope.user = 'gfenno';
	$scope.email = 'gfenno@somedomain.com';

});
