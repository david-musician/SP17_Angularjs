/* global angular */
var toppingList = angular.module("PizzaToppings", []);

// Dependnecy injection list
toppingList.controller("ToppingListController", ['$scope',
    'ToppingStorageService', function($scope, ToppingStorageService) {
        var tlc = this;
        
        tlc.toppingName = "";
        tlc.toppingCost = "";
        tlc.background = "emphasis";
        tlc.presidents = [];
        
        tlc.emphasis = function(status, $event){
            var el = $event.target.id;
            
            if(status){
                console.log("enter: " + el);
                tlc.background = "emphasis";
                console.log(tlc.background);
            } else {
                console.log("exit: " + el);
                tlc.background = "deemphasis";
                console.log(tlc.background);
            }
        };
        
        tlc.remove = function($index){
            tlc.presidents = tlc.latestData();
            tlc.presidents.splice($index, 1);
            return ToppingStorageService.setData('my-storage', angular.toJson(tlc.presidents));
        };
        
        tlc.latestData = function(){
            return ToppingStorageService.getData('my-storage');
        };
        
        tlc.update = function(pname, pyear){
            tlc.presidents = tlc.latestData();
            if(tlc.presidents == null){
                tlc.presidents = [];
            }
            var president = {name: pname, year: pyear};
            console.log(angular.toJson(president));
            tlc.presidents.push(president);
            return ToppingStorageService.setData('my-storage', angular.toJson(tlc.presidents));
        };
        
        // Check to see if null
        if(tlc.presidents != null){
            tlc.presidents = tlc.latestData();
        } else {
            console.log("crikey");
        }
}]);

toppingList.factory("ToppingStorageService", function($window, $rootScope){
    angular.element($window).on('storage', function(event){
        if (event.key === 'my-storage'){
            $rootScope.$apply();
        }
    });
    
    return {
        setData: function(key, val){
            $window.localStorage && $window.localStorage.setItem(key, val);
            return this;
        },
        getData: function(key){
            var val = $window.localStorage && $window.localStorage.getItem(key);
            
            var data = angular.fromJson(val);
            
            return data;
        }
    };
});