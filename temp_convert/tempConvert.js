var convertController = function($scope){
	$scope.conversionResult = 'N/A';
	// console.log($scope.cSelected);
	
	/*
	$scope.$watch('Celsius', function(Celsius){
		console.log(Celsius);
		//alert("Celsius");
		$scope.cSelected = true;
		$scope.fSelected = false;
	})
	
	$scope.$watch('Fahrenheit', function(Fahrenheit){
		console.log(Fahrenheit);
		//alert("Fahrenheit");
		$scope.cSelected = false;
		$scope.fSelected = true;
	})
	*/
	
	$scope.setCSelected = function(newValue){
		$scope.cSelected = true;
		$scope.fSelected = false;
		// console.log("Celsius is: " + $scope.cSelected);
	}
	
	$scope.setFSelected = function(newValue){
		$scope.cSelected = false;
		$scope.fSelected = true;
		// console.log("Fahrenheit is: " + $scope.fSelected);
	}
	
	/*
	$scope.$watch($scope.cSelected, alert("Celsius Selected"));
	$scope.$watch($scope.fSelected, alert("Fahrenheit Selected"));
	*/
	
	$scope.doConversion = function(){
		if($scope.cSelected){
			$scope.conversionResult = (parseInt($scope.tempInput) * 1.8) + 32;
			$scope.unitScale = "Celsius";
			$scope.convertedUnitScale = "Fahrenheit";
			//$scope.$watch($scope.cSelected, alert("Celsius Selected"));
		}
		else if($scope.fSelected){
			$scope.conversionResult = (parseInt($scope.tempInput) - 32) / 1.8;
			$scope.unitScale = "Fahrenheit";
			$scope.convertedUnitScale = "Celsius";
			//$scope.$watch($scope.fSelected, alert("Fahrenheit Selected"));
		}
	}
}
angular
	.module('ngTempConverter', [])
	.controller('convertController', convertController);