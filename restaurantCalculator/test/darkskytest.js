var springTestController = function($scope, $http){
  $http.get('http://rest-service.guides.spring.io/greeting')
       .success(function(response){
         console.log(response);
         console.log(response.content);
         $scope.data = response.content;

       })
       .error(function(){
         console.log("bad stuff");
       });
};

var darkskyTestController = function($scope, $http){
//https://api.darksky.net/forecast/6c8b305547beae413df14241f389aea7/37.8267,-122.4233
  $http.jsonp('https://api.darksky.net/forecast/6c8b305547beae413df14241f389aea7/34.9836398,-101.9306303' + "?callback=JSON_CALLBACK",
               {jsonpCallbackParam: 'callback'})
       .success(function(response){
         console.log(response);
         $scope.forecast = response.currently;

       })
       .error(function(){
         console.log("bad stuff");
       });
};

angular.module('darkskytest', [])
  .controller('springTestController', springTestController)
  .controller('darkskyTestController', darkskyTestController);
