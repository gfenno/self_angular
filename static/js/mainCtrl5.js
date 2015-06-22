var app = angular.module('siteApp5',[])
.config(function($interpolateProvider){
  $interpolateProvider.startSymbol('{[{').endSymbol('}]}');
});

app.controller('mainCtrl5', function($scope) {

  $scope.counter1 = 0;

  $scope.switch1 = true;
  $scope.switch2 = false;

  $scope.toggle = function() {

  	$scope.switch1 = !$scope.switch1;
  	$scope.switch2 = !$scope.switch2;

  };

});
