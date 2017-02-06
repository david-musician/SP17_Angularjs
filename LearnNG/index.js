var myApp = angular.module('angularability', []);

myApp.controller('indexController', ['$scope', function($scope){
    $scope.greeting = 'Hola!';
}]);

myApp.controller('indexController2', ['$scope', function($scope){
    $scope.MakeItDouble = function(value){
        return value * 2;
    }
}]);

//angular.module('angularability', [])
  //.controller('indexController', indexController);