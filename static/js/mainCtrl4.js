var app = angular.module('siteApp4',[])
.config(function($interpolateProvider){
  $interpolateProvider.startSymbol('{[{').endSymbol('}]}');
});

app.controller('mainCtrl4', function($scope) {

  $scope.switch1 = true;
  $scope.switch2 = false;

});
