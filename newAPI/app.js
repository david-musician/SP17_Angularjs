/* global angular */
var newAPIController = function($scope) {
    $scope.greeting = 'Hola!';
    
    var nac = this;
    
    nac.gibblet = "Hello!";
};

/* HAVE TO USE .then INSTEAD OF .success IN ANGULAR 1.6
var darkskyTestController = function($scope, $http){
    $http.get('https://api.darksky.net/forecast/6c8b305547beae413df14241f389aea7/34.9836398,-101.9306303',
        {jsonpCallbackParam: 'callback'})
        .then(function successCallback(response){
            console.log(response);
            $scope.forecast = response.currently;
        }, function errorCallback(response){
            console.log("Oops, there's an error!");
        });
};
*/

// This version works in Angular 1.5.x
var darkskyTestController = function($scope, $http, $sce){
    $http.jsonp('https://api.darksky.net/forecast/6c8b305547beae413df14241f389aea7/34.9836398,-101.9306303' + '?callback=JSON_CALLBACK',
        {jsonpCallbackParam: 'callback'})
        .success(function(response){
            console.log(response);
            $scope.forecast = response.currently;
        })

        .error(function(){
            console.log("Oops, there's an error!");
    });
};


angular.module("NewAPI", [])
    .controller('newAPIController', newAPIController)
    .controller('darkskyTestController', darkskyTestController);