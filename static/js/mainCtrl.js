var app = angular.module('siteApp',[])
.config(function($interpolateProvider){
  $interpolateProvider.startSymbol('{[{').endSymbol('}]}');
});

app.controller('mainCtrl', function($scope) {

  $scope.book = "Harry Potter";
  $scope.movie = "Pirates";
  $scope.display = [$scope.book,$scope.movie];
  $scope.visited = [
    
    {place:'Mexico',year:'2003'},
    {place:'Hawaii',year:'2010'},
    {place:'New Orleans', year:'2004'}

  ];

});
