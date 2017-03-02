/* global angular */
angular.module("ForecastApp", [])
	   .controller("ForecastController", ["$scope", "$http", 
		function($scope, $http){
		   
		   var fc = this;
		   
		   fc.message = "Hello World";
		   
		   var resturl = 'https://api.darksky.net/forecast/6c8b305547beae413df14241f389aea7/34.9813815,-101.9181973';
		   resturl +=  "?callback=JSON_CALLBACK";
		   
		   //Use one or the other
		   //$http.get("model.txt")
		   //$http.jsonp(resturl, {jsonpCallbackParam: 'callback'})
		   
		   $http.get("data.txt")
		   .then(function(response){
				/*fc.forecast = angular.fromJson(response.data);
				// fc.forecast = response.data;
				fc.temp	  = fc.forecast.currently.temperature;
				fc.dp		  = fc.forecast.currently.dewPoint;
				fc.humidity = fc.forecast.currently.humidity * 100;*/
				
				fc.student = angular.fromJson(response.data);
				fc.fn = fc.student.firstname;
		   });
		   
	   }]);